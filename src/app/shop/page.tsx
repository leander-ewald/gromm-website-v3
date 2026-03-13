import type { Metadata } from "next";
import Link from "next/link";
import { pricing, products, company } from "@/lib/config";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/Icons";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { PricingConfigurator } from "./PricingConfigurator";

export const metadata: Metadata = {
  title: "Shop",
  description: `${products.vs1200.name} bestellen — Staffelpreise ab 27,50 € netto/Stk. Promopack, S, M, L, XL und XXL Pakete verfügbar.`,
};

function formatPrice(value: number): string {
  const [whole, decimal] = value.toFixed(2).split(".");
  const formatted = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted},${decimal} €`;
}

/* ─── HERO ─── */
function HeroBanner() {
  return (
    <section className="relative bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(176,190,197,0.5) 60px, rgba(176,190,197,0.5) 61px)",
        }}
      />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-forest-800/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-forest-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="accent-line mb-8" />
        <p className="section-label text-steel-300 tracking-[0.2em] mb-4">
          {company.name} — Bestellung
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Staffelpreise &<br />
          <span className="text-forest-400">Konfiguration</span>
        </h1>
        <p className="text-steel-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Wählen Sie Ihr Paket und konfigurieren Sie Ihre Bestellung.
          Attraktive Staffelpreise ab 27,50 € netto pro Stück.
        </p>
      </div>
    </section>
  );
}

/* ─── VS1200 PRICING (interactive) ─── */
function VS1200Section() {
  return (
    <section className="section-padding bg-white steel-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <p className="section-label text-forest-600 mb-3">
              {products.vs1200.model} — Staffelpreise
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ihr Paket<br />
              <span className="text-forest-600">konfigurieren</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Je größer die Bestellmenge, desto günstiger der Stückpreis.
              Klicken Sie auf ein Paket, um Ihre Auswahl zu sehen.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <PricingConfigurator />
        </ScrollReveal>

        {/* Shipping & Notes */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            <h3 className="font-heading text-xl font-bold uppercase tracking-wide mb-8">
              Versand & Hinweise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="1" />
                      <path d="M16 8h4l3 3v5h-7V8z" />
                      <circle cx="5.5" cy="18.5" r="2.5" />
                      <circle cx="18.5" cy="18.5" r="2.5" />
                    </svg>
                  ),
                  title: "Versandkosten",
                  desc: "120 € pro Palette inkl. EURO-Palette",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                      <path d="M3.27 6.96L12 12.01l8.73-5.05" />
                      <path d="M12 22.08V12" />
                    </svg>
                  ),
                  title: "Ab 300 Stk.",
                  desc: "Lieferung als Schüttgut möglich — Stückpreis reduziert sich um 3 €",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6" />
                      <path d="M23 11h-6" />
                    </svg>
                  ),
                  title: "Großprojekte",
                  desc: "Individuelle Angebote und Beratung auf Anfrage",
                },
                {
                  icon: (
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4l3 3" />
                    </svg>
                  ),
                  title: "Preise",
                  desc: "Alle Preise zzgl. Versandkosten. Bruttopreise inkl. 19% MwSt.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-earth-50 border border-earth-200 rounded-lg p-6 flex flex-col items-start gap-3"
                >
                  <div className="w-12 h-12 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="font-heading font-bold text-base uppercase tracking-wide text-slate-800">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── VS1700 SECTION ─── */
function VS1700Section() {
  return (
    <section className="section-padding" style={{ backgroundColor: "#efebe9" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-12">
            <div className="w-[60px] h-[3px] mb-6" style={{ backgroundColor: "#6d4c41" }} />
            <p className="section-label mb-3" style={{ color: "#8d6e63" }}>
              {products.vs1700.model} — Rotwild-Schutz
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#3e2723" }}>
              Der große Bruder
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#5d4037" }}>
              Für Reviere mit Rotwild-Problematik: Der VS1700S2 bietet erhöhten
              Schutz mit 1.700 mm Höhe.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="rounded-lg overflow-hidden border" style={{ borderColor: "#d7ccc8", backgroundColor: "#ffffff" }}>
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left: Product visual */}
              <div
                className="lg:col-span-2 flex items-center justify-center p-10 sm:p-16"
                style={{ background: "linear-gradient(135deg, #efebe9 0%, #d7ccc8 100%)" }}
              >
                <div className="text-center">
                  <div className="text-7xl sm:text-8xl font-heading font-bold mb-2" style={{ color: "#6d4c41" }}>
                    1700
                  </div>
                  <div className="font-heading text-sm uppercase tracking-wider font-semibold" style={{ color: "#8d6e63" }}>
                    Millimeter Schutzhöhe
                  </div>
                </div>
              </div>

              {/* Right: Info */}
              <div className="lg:col-span-3 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-2xl sm:text-3xl font-heading font-bold uppercase" style={{ color: "#3e2723" }}>
                    {products.vs1700.name}
                  </h3>
                  <span
                    className="shrink-0 px-3 py-1 rounded text-sm font-heading font-semibold uppercase tracking-wider"
                    style={{ backgroundColor: "#efebe9", color: "#6d4c41" }}
                  >
                    {products.vs1700.target}
                  </span>
                </div>

                <p className="text-lg leading-relaxed mb-6" style={{ color: "#5d4037" }}>
                  {products.vs1700.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {products.vs1700.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "#5d4037" }}
                    >
                      <CheckIcon className="w-5 h-5 shrink-0 mt-0.5 text-earth-600" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div>
                    <div className="text-2xl font-bold font-heading uppercase" style={{ color: "#6d4c41" }}>
                      Preis auf Anfrage
                    </div>
                    <p className="text-sm" style={{ color: "#8d6e63" }}>
                      Individuelle Beratung und Angebotserstellung
                    </p>
                  </div>
                  <Link
                    href="/kontakt"
                    className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 font-heading font-semibold text-sm uppercase tracking-wider rounded min-h-[48px] transition-all duration-250"
                    style={{
                      backgroundColor: "#5d4037",
                      color: "#ffffff",
                    }}
                  >
                    <MailIcon className="w-5 h-5" />
                    Anfrage senden
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── ORDER CTA ─── */
function OrderCTA() {
  return (
    <section className="section-padding bg-forest-900 relative overflow-hidden">
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-400 tracking-[0.2em] mb-3">
              Bestellung aufgeben
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Jetzt bestellen<br />oder anfragen
            </h2>
            <p className="text-forest-200 text-lg max-w-2xl mx-auto">
              Für Bestellungen und individuelle Angebote kontaktieren Sie uns
              direkt per E-Mail. Wir melden uns innerhalb von 24 Stunden.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
            <Link
              href={`mailto:${company.email}?subject=Bestellung%20${products.vs1200.model}`}
              className="btn-primary text-center min-h-[48px]"
            >
              <MailIcon className="w-5 h-5" />
              {products.vs1200.model} bestellen
            </Link>
            <Link
              href={`mailto:${company.email}?subject=Anfrage%20${products.vs1700.model}`}
              className="btn-outline-light text-center min-h-[48px]"
            >
              <MailIcon className="w-5 h-5" />
              {products.vs1700.model} anfragen
            </Link>
          </div>

          <div className="text-center">
            <p className="text-forest-400 text-sm font-heading uppercase tracking-wider mb-3">
              Oder kontaktieren Sie uns direkt
            </p>
            <a
              href={`mailto:${company.email}`}
              className="text-white hover:text-forest-300 transition-colors font-heading font-bold text-xl uppercase tracking-wider"
            >
              {company.email}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── FAQ TEASER ─── */
function FAQTeaser() {
  return (
    <section className="section-padding bg-steel-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1 text-center sm:text-left">
              <p className="section-label text-steel-500 mb-3">
                Noch Fragen?
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Fragen zur Bestellung?
              </h2>
              <p className="text-slate-600 text-lg">
                In unseren FAQ finden Sie Antworten zu Versand, Mengenrabatten
                und vielem mehr.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/faq" className="btn-outline min-h-[48px]">
                FAQ ansehen
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function ShopPage() {
  return (
    <>
      <HeroBanner />
      <VS1200Section />
      <VS1700Section />
      <OrderCTA />
      <FAQTeaser />
    </>
  );
}
