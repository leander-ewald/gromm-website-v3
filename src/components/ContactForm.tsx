"use client";

import { useState } from "react";
import { ArrowRightIcon } from "@/components/Icons";

interface FormData {
  firma: string;
  name: string;
  email: string;
  telefon: string;
  nachricht: string;
  website: string; // honeypot
}

const initialForm: FormData = {
  firma: "",
  name: "",
  email: "",
  telefon: "",
  nachricht: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Client-side validation
    if (!form.name.trim()) {
      setError("Bitte geben Sie Ihren Namen ein.");
      return;
    }
    if (!form.email.trim()) {
      setError("Bitte geben Sie Ihre E-Mail-Adresse ein.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    if (!form.nachricht.trim()) {
      setError("Bitte geben Sie eine Nachricht ein.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.");
        return;
      }

      setSuccess(true);
      setForm(initialForm);
    } catch {
      setError("Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-forest-50 border border-forest-200 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Nachricht gesendet</h3>
        <p className="text-slate-600 mb-6">
          Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.
        </p>
        <button
          type="button"
          onClick={() => setSuccess(false)}
          className="text-forest-600 font-semibold hover:text-forest-800 transition-colors cursor-pointer"
        >
          Weitere Nachricht senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot — hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          value={form.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="firma" className="block text-sm font-medium text-slate-700 mb-1.5">
          Firma <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="text"
          id="firma"
          name="firma"
          value={form.firma}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 min-h-[48px] text-[16px] leading-normal bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          placeholder="Ihre Firma"
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">
          Name <span className="text-accent-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 min-h-[48px] text-[16px] leading-normal bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          placeholder="Ihr Name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          E-Mail <span className="text-accent-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-lg border border-slate-300 px-4 py-3 min-h-[48px] text-[16px] leading-normal bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          placeholder="ihre@email.de"
        />
      </div>

      <div>
        <label htmlFor="telefon" className="block text-sm font-medium text-slate-700 mb-1.5">
          Telefon <span className="text-slate-400 font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="telefon"
          name="telefon"
          value={form.telefon}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 min-h-[48px] text-[16px] leading-normal bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors"
          placeholder="+49 ..."
        />
      </div>

      <div>
        <label htmlFor="nachricht" className="block text-sm font-medium text-slate-700 mb-1.5">
          Nachricht <span className="text-accent-500">*</span>
        </label>
        <textarea
          id="nachricht"
          name="nachricht"
          value={form.nachricht}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 min-h-[120px] text-[16px] leading-normal bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors resize-y"
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>

      {error && (
        <div className="rounded-lg bg-accent-500/10 border border-accent-500/20 text-accent-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? (
          <>
            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Wird gesendet...
          </>
        ) : (
          <>
            Nachricht senden
            <ArrowRightIcon className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
