import Link from "next/link";
import { company, benefits, products } from "@/lib/config";
import { BenefitIcon, ArrowRightIcon, CheckIcon, XIcon, GermanyIcon } from "@/components/Icons";
import { ScrollReveal, StaggerReveal, CountUp } from "@/components/ScrollReveal";

/* ─── HERO ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-center bg-forest-950 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Subtle steel diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(176,190,197,0.5) 60px, rgba(176,190,197,0.5) 61px)",
          }}
        />
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-forest-800/40 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-forest-950 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-36 sm:pb-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <div className="accent-line mb-8" />

            <p className="text-steel-300 font-heading font-semibold text-sm uppercase tracking-[0.2em] mb-6">
              Patentierter Einzelschützer aus Stahl
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 font-heading">
              Wildverbiss<br />
              <span className="text-forest-400">stoppen.</span><br />
              Wälder schützen.
            </h1>

            <p className="text-lg sm:text-xl text-steel-200 leading-relaxed max-w-xl mb-10">
              Jedes Jahr vernichtet Wildverbiss Millionen Jungpflanzen.
              Der GroMM schützt sie — aus feuerverzinktem Stahl,
              wiederverwendbar, in&nbsp;Sekunden aufgebaut.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/produkte" className="btn-primary text-base">
                Produkte entdecken
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link href="/shop" className="btn-outline-light text-base">
                Direkt bestellen
              </Link>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-forest-800 pt-8">
              {[
                { value: "100%", label: "Wiederverwendbar" },
                { value: "<30s", label: "Aufbauzeit" },
                { value: "0", label: "Werkzeuge nötig" },
                { value: "20+", label: "Jahre Lebensdauer" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-white font-heading mb-1">
                    {stat.value}
                  </div>
                  <div className="text-steel-400 text-sm font-heading uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Product Visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Metallic circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-steel-600/20 via-steel-500/10 to-transparent" />
              <div className="absolute inset-8 rounded-full border border-steel-500/20" />
              <div className="absolute inset-16 rounded-full border border-steel-400/15" />

              {/* Central product representation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* Vertical steel bars representing the protector */}
                  <div className="flex gap-3 items-end">
                    {[180, 200, 210, 200, 180].map((h, i) => (
                      <div key={i} className="flex flex-col items-center">
                        {/* Pointed tip (Scherdorn) */}
                        <div
                          className="w-0 h-0 mb-0"
                          style={{
                            borderLeft: "4px solid transparent",
                            borderRight: "4px solid transparent",
                            borderBottom: "12px solid #90a4ae",
                          }}
                        />
                        {/* Steel bar */}
                        <div
                          className="w-2 rounded-sm"
                          style={{
                            height: `${h}px`,
                            background: `linear-gradient(180deg, #b0bec5 0%, #78909c 50%, #90a4ae 100%)`,
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Small tree between the bars */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
                    <svg width="60" height="80" viewBox="0 0 60 80" fill="none" className="opacity-60">
                      {/* Trunk */}
                      <rect x="27" y="50" width="6" height="30" fill="#5d4037" rx="2" />
                      {/* Crown layers */}
                      <path d="M30 5 L50 35 H10 Z" fill="#4a9e74" opacity="0.9" />
                      <path d="M30 20 L48 45 H12 Z" fill="#358560" opacity="0.9" />
                      <path d="M30 32 L46 55 H14 Z" fill="#2a6a4c" opacity="0.9" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-8 right-0 text-right">
                <span className="text-steel-300 text-xs font-heading uppercase tracking-widest">Feuerverzinkter</span><br />
                <span className="text-white text-sm font-heading font-bold uppercase tracking-wider">Stahl</span>
              </div>
              <div className="absolute bottom-12 left-0 text-left">
                <span className="text-forest-400 text-xs font-heading uppercase tracking-widest">Geschützte</span><br />
                <span className="text-white text-sm font-heading font-bold uppercase tracking-wider">Jungpflanze</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const items = [
    { icon: "🔩", label: "Patentiert" },
    { icon: "🇩🇪", label: "Made in Germany" },
    { icon: "🔗", label: "Metall statt Plastik" },
    { icon: "♻️", label: "100% Recyclebar" },
    { icon: "🌲", label: "PEFC-zertifiziert" },
  ];

  return (
    <section className="bg-steel-50 border-y border-steel-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 sm:gap-x-12">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-steel-700"
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-heading font-semibold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PROBLEM SECTION ─── */
function ProblemSection() {
  return (
    <section className="section-padding bg-white steel-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="accent-line mb-6" />
              <p className="section-label text-accent-500 mb-3">
                Die Herausforderung
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Wildverbiss vernichtet<br />
                <span className="text-accent-500">Millionen Jungpflanzen</span><br />
                jedes Jahr.
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Der Klimawandel zwingt uns zum Umbau unserer Wälder.
                Doch jede neu gepflanzte Kultur muss vor Wildverbiss
                geschützt werden. Bisherige Lösungen sind Teil des Problems:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Kunststoffhüllen hinterlassen Mikroplastik im Waldboden",
                  "Einwegprodukte verursachen hohe Folgekosten",
                  "Aufwendige Montage und teure Entsorgung",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-600">
                    <XIcon className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold text-forest-700">
                Der GroMM löst diesen Widerspruch.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bg-forest-950 rounded-lg p-8 sm:p-10 text-center">
              <p className="text-steel-400 font-heading text-sm uppercase tracking-widest mb-4">
                EU 3 Billion Trees Initiative
              </p>
              <div className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold text-white mb-4">
                3 Mrd.
              </div>
              <p className="text-forest-300 text-lg mb-2">
                neue Bäume sollen bis 2030 in der EU gepflanzt werden
              </p>
              <div className="w-16 h-px bg-forest-700 mx-auto my-6" />
              <p className="text-forest-400 text-sm">
                Jeder dieser Bäume braucht Schutz vor Wildverbiss.
                <br />
                <span className="text-white font-semibold">Der GroMM ist die Antwort.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── METAL VS PLASTIC ─── */
function ComparisonSection() {
  const comparison = [
    {
      aspect: "Material",
      traditional: "Kunststoff",
      gromm: "Feuerverzinkter Stahl",
    },
    {
      aspect: "Lebensdauer",
      traditional: "1-3 Jahre",
      gromm: "Über 20 Jahre",
    },
    {
      aspect: "Wiederverwendbar",
      traditional: "Nein (Einweg)",
      gromm: "Ja (unbegrenzt)",
    },
    {
      aspect: "Mikroplastik",
      traditional: "Ja — im Waldboden",
      gromm: "Nein — 0% Plastik",
    },
    {
      aspect: "Entsorgung",
      traditional: "Aufwändig & teuer",
      gromm: "100% recyclebar",
    },
    {
      aspect: "Montage",
      traditional: "Minuten, mit Werkzeug",
      gromm: "Sekunden, ohne Werkzeug",
    },
    {
      aspect: "Pflege",
      traditional: "Regelmäßig nötig",
      gromm: "Kaum Nachpflege",
    },
    {
      aspect: "Kosten (2. Einsatz)",
      traditional: "Voll (Neukauf)",
      gromm: "0 € (bereits bezahlt)",
    },
  ];

  return (
    <section className="section-padding bg-forest-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-400 mb-3">
              Der Unterschied
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Metall statt Plastik
            </h2>
            <p className="text-forest-200 text-lg">
              Der einzige Mehrweg-Einzelschützer am Markt.
              Vergleichen Sie selbst.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-4 mb-2 px-4">
              <div />
              <div className="text-center">
                <span className="text-forest-500 font-heading text-sm uppercase tracking-wider font-semibold">
                  Herkömmlich
                </span>
              </div>
              <div className="text-center">
                <span className="text-forest-300 font-heading text-sm uppercase tracking-wider font-semibold">
                  GroMM
                </span>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-2">
              {comparison.map((row, i) => (
                <div
                  key={row.aspect}
                  className="grid grid-cols-3 gap-4 rounded-lg bg-forest-900/60 border border-forest-800/50 px-4 py-3.5 items-center"
                >
                  <div className="text-white font-semibold text-sm">
                    {row.aspect}
                  </div>
                  <div className="text-center text-forest-400 text-sm">
                    {row.traditional}
                  </div>
                  <div className="text-center text-forest-200 text-sm font-medium">
                    {row.gromm}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── PRODUCTS PREVIEW ─── */
function ProductPreview() {
  const items = [
    {
      product: products.vs1200,
      color: "vs1200",
      bgFrom: "from-[#e8f5e9]",
      bgTo: "to-[#c8e6c9]",
      accent: "text-[#2e7d32]",
      accentBg: "bg-[#e8f5e9]",
      priceNote: "Ab 27,50 € netto/Stk.",
    },
    {
      product: products.vs1700,
      color: "vs1700",
      bgFrom: "from-[#efebe9]",
      bgTo: "to-[#d7ccc8]",
      accent: "text-[#6d4c41]",
      accentBg: "bg-[#efebe9]",
      priceNote: "Preis auf Anfrage",
    },
  ];

  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
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
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8" stagger={0.15}>
          {items.map(({ product, bgFrom, bgTo, accent, accentBg, priceNote }) => (
            <div
              key={product.model}
              className="bg-white rounded-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product visual */}
              <div className={`w-full aspect-[16/9] bg-gradient-to-br ${bgFrom} ${bgTo} flex items-center justify-center relative`}>
                <div className="text-center">
                  <div className={`text-6xl sm:text-7xl font-heading font-bold ${accent} mb-1 opacity-80`}>
                    {product.height.replace(" mm", "")}
                  </div>
                  <div className={`${accent} font-heading text-sm uppercase tracking-wider font-semibold opacity-60`}>
                    Millimeter
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-2xl font-heading font-bold uppercase">{product.name}</h3>
                  <span className={`shrink-0 px-3 py-1 rounded text-sm font-heading font-semibold uppercase tracking-wider ${accentBg} ${accent}`}>
                    {product.target}
                  </span>
                </div>

                <p className={`${accent} font-heading font-semibold text-lg uppercase tracking-wider mb-4`}>
                  {priceNote}
                </p>

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
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─── BENEFITS ─── */
function BenefitsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="accent-line mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Vorteile
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              8 Gründe für den GroMM
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Entwickelt von einem Forstwirt mit über 20 Jahren Erfahrung.
              Jedes Detail ist praxiserprobt.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.08}>
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group p-6 rounded-lg border border-slate-100 bg-white hover:border-forest-200 hover:shadow-lg hover:shadow-forest-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                <BenefitIcon icon={benefit.icon as "timer"} className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-2">{benefit.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS PLACEHOLDER ─── */
function TestimonialsSection() {
  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Kundenstimmen
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Was unsere Kunden sagen
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto" stagger={0.12}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-slate-100 p-8 text-center"
            >
              <div className="flex justify-center gap-1 mb-4 text-forest-400">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="text-slate-400 text-sm italic mb-6 leading-relaxed">
                &ldquo;Kundenstimme folgt in Kürze.&rdquo;
              </div>
              <div className="w-12 h-12 rounded-full bg-steel-100 mx-auto mb-3" />
              <div className="text-slate-400 text-sm font-medium">
                Kommt bald
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─── QUOTE ─── */
function QuoteSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="scale">
          <div className="text-forest-300 text-6xl sm:text-8xl font-serif leading-none mb-6">
            &ldquo;
          </div>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl text-slate-800 leading-relaxed font-light italic mb-4">
            Until you dig a hole, you plant a tree, you water it and make it
            survive, you haven&apos;t done a thing. You are just talking.
          </blockquote>
          <div className="w-12 h-px bg-forest-300 mx-auto my-6" />
          <cite className="text-slate-500 text-base not-italic font-medium">
            Wangari Maathai — Friedensnobelpreisträgerin
          </cite>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="section-padding bg-forest-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="accent-line mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit für nachhaltigen<br />Waldschutz?
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
            <Link href="/kontakt" className="btn-outline-light text-base">
              Beratung anfragen
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ComparisonSection />
      <ProductPreview />
      <BenefitsSection />
      <TestimonialsSection />
      <QuoteSection />
      <CTASection />
    </>
  );
}
