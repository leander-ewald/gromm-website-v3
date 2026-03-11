import type { Metadata } from "next";
import Link from "next/link";
import { pricing, products, company } from "@/lib/config";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Shop",
  description: `${products.vs1200.name} bestellen — Staffelpreise ab 27,50 € netto/Stk. Promopack, S, M, L, XL und XXL Pakete verfügbar.`,
};

function formatPrice(value: number): string {
  return value.toFixed(2).replace(".", ",") + " €";
}

function HeroBanner() {
  return (
    <section className="relative bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-800/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-forest-400 font-semibold text-sm uppercase tracking-wider mb-4">
          {company.name}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Shop
        </h1>
        <p className="text-forest-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Bestellen Sie den patentierten GroMM Einzelschützer — mit attraktiven
          Staffelpreisen ab 27,50 € netto pro Stück.
        </p>
      </div>
    </section>
  );
}

function ProductSelector() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Produkte & Preise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Wählen Sie Ihr Paket
          </h2>
          <p className="text-slate-600 text-lg">
            Je größer die Bestellmenge, desto günstiger der Stückpreis. Starten
            Sie mit dem Promopack zum Testen oder bestellen Sie direkt für Ihr
            Projekt.
          </p>
        </div>

        {/* VS1200S2 Pricing */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center font-bold text-lg">
              12
            </div>
            <div>
              <h3 className="text-2xl font-bold">{products.vs1200.name}</h3>
              <p className="text-slate-500">
                {products.vs1200.height} — Schutz gegen {products.vs1200.target}
              </p>
            </div>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-slate-200 overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-forest-900 text-white">
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Paket
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Menge
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Netto / Stk.
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Netto Gesamt
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">
                    Brutto Gesamt
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricing.vs1200.map((tier, i) => {
                  const isXXL = tier.label === "XXL";
                  return (
                    <tr
                      key={tier.label}
                      className={`border-t border-slate-100 ${
                        isXXL
                          ? "bg-forest-50 font-medium"
                          : i % 2 === 0
                            ? "bg-white"
                            : "bg-slate-50/50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-semibold ${isXXL ? "text-forest-700" : "text-slate-800"}`}
                          >
                            {tier.label}
                          </span>
                          {isXXL && (
                            <span className="px-2 py-0.5 rounded-full bg-forest-600 text-white text-xs font-medium">
                              Bester Preis
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-slate-600">
                        {tier.quantity.toLocaleString("de-DE")} Stk.
                      </td>
                      <td
                        className={`px-6 py-4 text-right ${isXXL ? "text-forest-700 font-bold" : "text-slate-600"}`}
                      >
                        {formatPrice(tier.priceNet)}
                      </td>
                      <td className="px-6 py-4 text-right text-slate-600">
                        {formatPrice(tier.totalNet)}
                      </td>
                      <td className="px-6 py-4 text-right text-slate-600">
                        {formatPrice(tier.totalGross)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4 mb-8">
            {pricing.vs1200.map((tier) => {
              const isXXL = tier.label === "XXL";
              return (
                <div
                  key={tier.label}
                  className={`rounded-xl border p-5 ${
                    isXXL
                      ? "border-forest-300 bg-forest-50"
                      : "border-slate-100 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">{tier.label}</span>
                      {isXXL && (
                        <span className="px-2 py-0.5 rounded-full bg-forest-600 text-white text-xs font-medium">
                          Bester Preis
                        </span>
                      )}
                    </div>
                    <span className="text-slate-500 text-sm">
                      {tier.quantity.toLocaleString("de-DE")} Stk.
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-slate-400 mb-1">Netto / Stk.</div>
                      <div
                        className={`font-semibold ${isXXL ? "text-forest-700" : ""}`}
                      >
                        {formatPrice(tier.priceNet)}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 mb-1">Netto Ges.</div>
                      <div>{formatPrice(tier.totalNet)}</div>
                    </div>
                    <div>
                      <div className="text-slate-400 mb-1">Brutto Ges.</div>
                      <div>{formatPrice(tier.totalGross)}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Shipping & notes */}
          <div className="bg-earth-50 rounded-xl border border-earth-200 p-6 space-y-4">
            <h4 className="font-semibold text-slate-800">
              Versand & Hinweise
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckIcon className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Versandkosten:</strong> 120 € pro Palette inkl.
                  EURO-Palette
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckIcon className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Ab 300 Stk.:</strong> Lieferung als Schüttgut möglich
                  — Einzelpreis reduziert sich um 3 €
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckIcon className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Größere Projekte:</strong> Individuelle Angebote auf
                  Anfrage
                </span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-600">
                <CheckIcon className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                <span>
                  Alle Preise zzgl. Versandkosten. Bruttopreise inkl. 19% MwSt.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* VS1700S2 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center font-bold text-lg">
              17
            </div>
            <div>
              <h3 className="text-2xl font-bold">{products.vs1700.name}</h3>
              <p className="text-slate-500">
                {products.vs1700.height} — Schutz gegen {products.vs1700.target}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
            <div className="flex-1">
              <p className="text-slate-600 leading-relaxed mb-4">
                {products.vs1700.description}
              </p>
              <ul className="space-y-2 mb-6 sm:mb-0">
                {products.vs1700.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckIcon className="w-4 h-4 text-forest-500 shrink-0 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 text-center sm:text-right">
              <p className="text-2xl font-bold text-forest-700 mb-2">
                Preis auf Anfrage
              </p>
              <p className="text-slate-500 text-sm mb-4">
                Individuelle Beratung und Angebotserstellung
              </p>
              <Link href="/kontakt" className="btn-secondary min-h-[48px]">
                <MailIcon className="w-5 h-5" />
                Anfrage senden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderCTA() {
  return (
    <section className="section-padding bg-forest-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Jetzt bestellen oder anfragen
          </h2>
          <p className="text-forest-200 text-lg max-w-2xl mx-auto">
            Für Bestellungen und individuelle Angebote kontaktieren Sie uns
            direkt per E-Mail. Wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

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
            className="btn-outline !border-forest-500 !text-forest-300 hover:!bg-forest-700 hover:!text-white text-center min-h-[48px]"
          >
            <MailIcon className="w-5 h-5" />
            {products.vs1700.model} anfragen
          </Link>
        </div>

        <div className="text-center">
          <p className="text-forest-300 text-sm mb-2">
            Oder kontaktieren Sie uns direkt:
          </p>
          <a
            href={`mailto:${company.email}`}
            className="text-forest-200 hover:text-white transition-colors font-medium text-lg"
          >
            {company.email}
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQTeaser() {
  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Fragen zur Bestellung?
        </h2>
        <p className="text-slate-600 text-lg mb-8">
          In unseren FAQ finden Sie Antworten zu Versand, Mengenrabatten und
          vielem mehr.
        </p>
        <Link href="/faq" className="btn-outline min-h-[48px]">
          Häufige Fragen ansehen
          <ArrowRightIcon className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}

export default function ShopPage() {
  return (
    <>
      <HeroBanner />
      <ProductSelector />
      <OrderCTA />
      <FAQTeaser />
    </>
  );
}
