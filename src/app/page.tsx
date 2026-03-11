import Link from "next/link";
import { company, benefits, products } from "@/lib/config";
import { BenefitIcon, ArrowRightIcon, CheckIcon } from "@/components/Icons";

function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-forest-950 overflow-hidden">
      {/* Background pattern */}
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
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-forest-950 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-800/80 border border-forest-700/50 mb-8">
            <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
            <span className="text-forest-300 text-sm font-medium">
              Patentierter Einzelschützer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            {company.claim}
          </h1>

          <p className="text-lg sm:text-xl text-forest-200 leading-relaxed max-w-2xl mb-10">
            Verbiss- und Fegeschutz für Forst- und Kulturpflanzen aus
            feuerverzinktem Stahl. Wiederverwendbar, werkzeuglos, nachhaltig.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link href="/produkte" className="btn-primary text-base">
              Produkte entdecken
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link href="/shop" className="btn-outline !border-forest-500 !text-forest-300 hover:!bg-forest-800 hover:!text-white text-base">
              Direkt bestellen
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: "100%", label: "Wiederverwendbar" },
              { value: "<30s", label: "Aufbauzeit" },
              { value: "0", label: "Werkzeuge nötig" },
              { value: "20+", label: "Jahre Lebensdauer" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-forest-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Vorteile
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Warum sich der GroMM lohnt
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Die Wälder leiden unter dem Klimawandel. Jungpflanzen brauchen
            zuverlässigen Schutz vor Wildverbiss. Bisherige Lösungen waren
            aufwendig, teuer und nicht nachhaltig. Der GroMM ändert das.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-xl border border-slate-100 bg-white hover:border-forest-200 hover:shadow-lg hover:shadow-forest-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                <BenefitIcon icon={benefit.icon as "timer"} className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  const items = [products.vs1200, products.vs1700];
  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Produkte
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Zwei Modelle, ein Ziel
          </h2>
          <p className="text-slate-600 text-lg">
            Zuverlässiger Schutz für Ihre Kulturen — angepasst an die
            Wildart in Ihrem Revier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((product) => (
            <div
              key={product.model}
              className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product illustration placeholder */}
              <div className="w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-forest-50 to-forest-100 flex items-center justify-center mb-8">
                <div className="text-center">
                  <div className="text-6xl sm:text-7xl font-bold text-forest-300 mb-2">
                    {product.height.replace(" mm", "")}
                  </div>
                  <div className="text-forest-500 font-medium">mm Höhe</div>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <span className="shrink-0 px-3 py-1 rounded-full bg-forest-100 text-forest-700 text-sm font-medium">
                  {product.target}
                </span>
              </div>

              <p className="text-slate-600 leading-relaxed mb-6">
                {product.description}
              </p>

              <ul className="space-y-3 mb-8">
                {product.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckIcon className="w-5 h-5 text-forest-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <Link href="/shop" className="btn-primary flex-1 text-center">
                  Bestellen
                </Link>
                <Link href="/produkte" className="btn-outline flex-1 text-center">
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="section-padding bg-forest-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-forest-400 font-semibold text-sm uppercase tracking-wider mb-3">
              Wirtschaftlichkeit
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Warum 45&nbsp;€ für einen Einzelschützer?
            </h2>
            <p className="text-forest-200 text-lg leading-relaxed mb-8">
              Herkömmliche Einzelschutzverfahren wie Kunststoffhüllen oder
              Drahthosen sind Einwegprodukte. Sie müssen nach Gebrauch teuer
              entsorgt werden und hinterlassen Mikroplastik im Waldboden.
            </p>
            <p className="text-forest-200 text-lg leading-relaxed mb-8">
              Der GroMM erreicht trotz höherer Anschaffungskosten schon nach
              dem ersten Einsatz die Kostenneutralität — und spart ab dem
              zweiten Einsatz bares Geld.
            </p>
            <Link href="/shop" className="btn-primary">
              Preise ansehen
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Herkömmlich",
                items: [
                  "Einweg — jede Saison neu kaufen",
                  "Entsorgung nötig (Kosten + Aufwand)",
                  "Mikroplastik im Waldboden",
                  "Aufwendige Montage vor Ort",
                ],
                positive: false,
              },
              {
                title: "GroMM",
                items: [
                  "Mehrweg — über 20 Jahre Lebensdauer",
                  "100% recyclebar, kein Abfall",
                  "Kein Plastik, kein Mikroplastik",
                  "Aufbau in unter 30 Sekunden",
                ],
                positive: true,
              },
            ].map((col) => (
              <div
                key={col.title}
                className={`p-6 rounded-xl ${
                  col.positive
                    ? "bg-forest-800 border border-forest-600"
                    : "bg-forest-950/50 border border-forest-800"
                }`}
              >
                <h3
                  className={`font-semibold text-lg mb-4 ${
                    col.positive ? "text-forest-300" : "text-forest-500"
                  }`}
                >
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-forest-200">
                      <span
                        className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                          col.positive ? "bg-forest-400" : "bg-accent-500"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="text-forest-300 text-6xl sm:text-8xl font-serif leading-none mb-6">
          &ldquo;
        </div>
        <blockquote className="text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-light italic mb-8">
          Until you dig a hole, you plant a tree, you water it and make it
          survive, you haven&apos;t done a thing. You are just talking.
        </blockquote>
        <cite className="text-slate-500 text-base not-italic font-medium">
          — Wangari Maathai, Friedensnobelpreisträgerin
        </cite>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding bg-forest-800">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Bereit für nachhaltigen Waldschutz?
        </h2>
        <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
          Testen Sie den GroMM mit unserem Promopack (5 Stück) oder
          kontaktieren Sie uns für eine individuelle Beratung.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/shop" className="btn-primary text-base">
            Jetzt bestellen
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

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ProductPreview />
      <WhySection />
      <QuoteSection />
      <CTASection />
    </>
  );
}
