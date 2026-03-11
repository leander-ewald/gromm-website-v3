import type { Metadata } from "next";
import Link from "next/link";
import { products, company } from "@/lib/config";
import { CheckIcon, ArrowRightIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Produkte",
  description: `${products.vs1200.name} und ${products.vs1700.name} — Patentierte Einzelschützer aus feuerverzinktem Stahl für den Schutz gegen Reh- und Rotwild.`,
};

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
          Unsere Produkte
        </h1>
        <p className="text-forest-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Zwei Modelle, ein patentiertes System — entwickelt für den
          zuverlässigen Schutz Ihrer Kulturen gegen Verbiss- und Fegeschäden.
        </p>
      </div>
    </section>
  );
}

function ProductCards() {
  const items = [
    {
      product: products.vs1200,
      priceNote: "Ab 27,50 € netto (1.000+ Stk.)",
      available: true,
    },
    {
      product: products.vs1700,
      priceNote: "Preis auf Anfrage",
      available: false,
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {items.map(({ product, priceNote, available }) => (
            <div
              key={product.model}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product visual */}
              <div className="w-full aspect-[4/3] bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl sm:text-8xl font-bold text-forest-300 mb-2">
                    {product.height.replace(" mm", "")}
                  </div>
                  <div className="text-forest-500 font-medium text-lg">
                    mm Höhe
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    {product.name}
                  </h2>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium">
                    {product.target}
                  </span>
                </div>

                {/* Price note */}
                <p className="text-forest-600 font-semibold text-lg mb-4">
                  {priceNote}
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs table */}
                <div className="rounded-xl bg-earth-50 border border-earth-200 overflow-hidden mb-6">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-earth-200">
                        <td className="px-4 py-3 font-medium text-slate-700 bg-earth-100/50 w-1/3">
                          Modell
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {product.model}
                        </td>
                      </tr>
                      <tr className="border-b border-earth-200">
                        <td className="px-4 py-3 font-medium text-slate-700 bg-earth-100/50">
                          Höhe
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {product.height}
                        </td>
                      </tr>
                      <tr className="border-b border-earth-200">
                        <td className="px-4 py-3 font-medium text-slate-700 bg-earth-100/50">
                          Zielwild
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {product.target}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-slate-700 bg-earth-100/50">
                          Material
                        </td>
                        <td className="px-4 py-3 text-slate-600">
                          {product.material}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckIcon className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {available ? (
                  <Link href="/shop" className="btn-primary w-full text-center">
                    Im Shop bestellen
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                ) : (
                  <Link
                    href="/kontakt"
                    className="btn-secondary w-full text-center"
                  >
                    Preis anfragen
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalDetails() {
  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Technik & Konstruktion
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Feuerverzinkter Stahl — gebaut für Jahrzehnte
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Beide Modelle bestehen aus hochwertigem, feuerverzinktem Stahl. Die
              Feuerverzinkung garantiert eine Lebensdauer von über 20 Jahren —
              selbst unter den rauen Bedingungen im Wald. Der Stahl ist zu 100%
              recyclebar und enthält keinerlei Kunststoffanteile.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Die patentierte Konstruktion mit optimal dimensionierten
              Scherdornen verhindert zuverlässig, dass Wild die Terminalknospe
              der geschützten Pflanze erreicht. Gleichzeitig ermöglicht die
              offene Bauweise ungehinderten Zugang von Licht und Luft — ein
              schädliches Mikroklima wird vermieden.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Patentiert",
                  desc: "2014 angemeldet, 2020 erteilt — einzigartige Konstruktion",
                },
                {
                  title: "Werkzeuglos",
                  desc: "Nach Erstmontage kein Werkzeug mehr nötig",
                },
                {
                  title: "PEFC-zertifiziert",
                  desc: "Erfüllt Anforderungen für nachhaltige Forstwirtschaft",
                },
                {
                  title: "100% Recyclebar",
                  desc: "Feuerverzinkter Stahl, kein Plastik, kein Mikroplastik",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white border border-slate-100"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldIcon className="w-5 h-5 text-forest-600" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                  </div>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Construction diagram placeholder */}
          <div className="bg-white rounded-2xl border border-slate-100 p-8 sm:p-12">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-center mb-8">
                Konstruktionsmerkmale
              </h3>
              {[
                {
                  label: "Scherdorne",
                  desc: "Optimal dimensioniert — verhindern Verbiss und Fegen zuverlässig",
                },
                {
                  label: "Offene Bauweise",
                  desc: "Licht und Luft gelangen ungehindert zur Pflanze — kein Mikroklima",
                },
                {
                  label: "Feuerverzinkung",
                  desc: "Korrosionsschutz für über 20 Jahre unter Waldbedingungen",
                },
                {
                  label: "Stecksystem",
                  desc: "Einmalige Montage der Komponenten, danach werkzeugloses Ausbringen",
                },
                {
                  label: "Ergonomie",
                  desc: "Ausbringen und Abbauen in wenigen Sekunden — rückenschonend",
                },
              ].map((item, i) => (
                <div key={item.label} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center text-sm font-semibold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">
                      {item.label}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding bg-forest-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Überzeugt? Bestellen Sie jetzt.
        </h2>
        <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
          Starten Sie mit dem Promopack (5 Stück) zum Testen oder bestellen Sie
          direkt in größerer Menge — mit attraktiven Staffelpreisen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop" className="btn-primary text-base">
            Zum Shop
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/kontakt"
            className="btn-outline !border-forest-500 !text-forest-300 hover:!bg-forest-700 hover:!text-white text-base"
          >
            Beratung anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function ProduktePage() {
  return (
    <>
      <HeroBanner />
      <ProductCards />
      <TechnicalDetails />
      <CTASection />
    </>
  );
}
