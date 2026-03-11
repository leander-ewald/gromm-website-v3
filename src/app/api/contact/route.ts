import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Simple in-memory rate limiter: IP -> [timestamps]
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3; // max requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Remove entries outside the window
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (recent.length >= RATE_LIMIT_MAX) {
    rateLimitMap.set(ip, recent);
    return true;
  }

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return false;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  // Rate limiting
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es in einer Minute erneut." },
      { status: 429 }
    );
  }

  // Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const { firma, name, email, telefon, nachricht, website } = body as {
    firma?: string;
    name?: string;
    email?: string;
    telefon?: string;
    nachricht?: string;
    website?: string;
  };

  // Honeypot check
  if (website && String(website).trim().length > 0) {
    // Silently accept but don't send — looks like a bot
    return NextResponse.json({ success: true });
  }

  // Validation
  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json(
      { error: "Bitte geben Sie Ihren Namen ein." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !email.trim()) {
    return NextResponse.json(
      { error: "Bitte geben Sie Ihre E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
      { status: 400 }
    );
  }

  if (!nachricht || typeof nachricht !== "string" || !nachricht.trim()) {
    return NextResponse.json(
      { error: "Bitte geben Sie eine Nachricht ein." },
      { status: 400 }
    );
  }

  // Length limits
  if (name.length > 200) {
    return NextResponse.json(
      { error: "Der Name darf maximal 200 Zeichen lang sein." },
      { status: 400 }
    );
  }

  if (email.length > 200) {
    return NextResponse.json(
      { error: "Die E-Mail-Adresse darf maximal 200 Zeichen lang sein." },
      { status: 400 }
    );
  }

  if (nachricht.length > 5000) {
    return NextResponse.json(
      { error: "Die Nachricht darf maximal 5.000 Zeichen lang sein." },
      { status: 400 }
    );
  }

  // Check SMTP configuration
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !contactEmail) {
    return NextResponse.json(
      { error: "Das Kontaktformular ist derzeit nicht verfügbar. Bitte senden Sie eine E-Mail direkt an info@gromm-gmbh.de." },
      { status: 503 }
    );
  }

  // Build email
  const sanitize = (s: string) => s.trim();
  const cleanName = sanitize(name);
  const cleanEmail = sanitize(email);
  const cleanFirma = firma ? sanitize(String(firma)) : "";
  const cleanTelefon = telefon ? sanitize(String(telefon)) : "";
  const cleanNachricht = sanitize(nachricht);

  const textBody = [
    `Neue Kontaktanfrage über gromm-gmbh.de`,
    ``,
    `Name: ${cleanName}`,
    cleanFirma ? `Firma: ${cleanFirma}` : null,
    `E-Mail: ${cleanEmail}`,
    cleanTelefon ? `Telefon: ${cleanTelefon}` : null,
    ``,
    `Nachricht:`,
    cleanNachricht,
  ]
    .filter((line) => line !== null)
    .join("\n");

  const htmlBody = `
    <h2 style="color:#163a27;margin-bottom:16px;">Neue Kontaktanfrage</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px 12px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(cleanName)}</td></tr>
      ${cleanFirma ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb;">Firma</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(cleanFirma)}</td></tr>` : ""}
      <tr><td style="padding:8px 12px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb;">E-Mail</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;"><a href="mailto:${escapeHtml(cleanEmail)}">${escapeHtml(cleanEmail)}</a></td></tr>
      ${cleanTelefon ? `<tr><td style="padding:8px 12px;font-weight:bold;color:#374151;border-bottom:1px solid #e5e7eb;">Telefon</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;">${escapeHtml(cleanTelefon)}</td></tr>` : ""}
    </table>
    <h3 style="color:#163a27;margin-top:24px;margin-bottom:8px;">Nachricht</h3>
    <p style="white-space:pre-wrap;color:#374151;line-height:1.6;">${escapeHtml(cleanNachricht)}</p>
    <hr style="border:none;border-top:1px solid #e5e7eb;margin-top:24px;" />
    <p style="color:#9ca3af;font-size:12px;">Gesendet über das Kontaktformular auf gromm-gmbh.de</p>
  `;

  // Send email
  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number(smtpPort),
      secure: Number(smtpPort) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"GroMM Website" <${smtpUser}>`,
      replyTo: cleanEmail,
      to: contactEmail,
      subject: `Kontaktanfrage von ${cleanName}${cleanFirma ? ` (${cleanFirma})` : ""}`,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form email error:", err);
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
