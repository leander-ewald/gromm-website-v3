import type { Metadata } from "next";
import Link from "next/link";
import { products, company } from "@/lib/config";
import {
  CheckIcon,
  ArrowRightIcon,
  ShieldIcon,
  LeafIcon,
  FactoryIcon,
  GermanyIcon,
  RecycleIcon,
  TimerIcon,
  BanIcon,
} from "@/components/Icons";
import { ScrollReveal, StaggerReveal, CountUp } from "@/components/ScrollReveal";
import { MetallicSheen } from "@/components/MetallicSheen";
import { ForestDivider } from "@/components/ForestDivider";
import { FloatingLeaves } from "@/components/FloatingLeaves";

export const metadata: Metadata = {
  title: "Produkte",
  description: `${products.vs1200.name} und ${products.vs1700.name} — Patentierte Einzelschützer aus feuerverzinktem Stahl für den Schutz gegen Reh- und Rotwild.`,
};

/* ─── HERO ─── */
function HeroBanner() {
  return (
    <section className="relative bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Diagonal line pattern — same as homepage hero */}
      <div className="absolute inset-0">
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

      {/* Floating leaves */}
      <FloatingLeaves count={4} variant="dark" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="accent-line mb-8" />
        <p className="section-label text-steel-300 mb-4">
          {company.name} — Produktübersicht
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Zwei Modelle.<br />
          <span className="text-forest-400">Ein patentiertes System.</span>
        </h1>
        <p className="text-steel-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Entwickelt für den zuverlässigen Schutz Ihrer Kulturen gegen
          Verbiss- und Fegeschäden — aus feuerverzinktem Stahl,
          wiederverwendbar, in&nbsp;Sekunden aufgebaut.
        </p>
      </div>
    </section>
  );
}

/* ─── PRODUCT CARDS ─── */
function ProductCards() {
  const items = [
    {
      product: products.vs1200,
      priceNote: "Ab 27,50 € netto (1.000+ Stk.)",
      available: true,
      accent: "text-[#2e7d32]",
      accentBg: "bg-[#e8f5e9]",
      accentBorder: "border-[#2e7d32]/20",
      gradientFrom: "from-[#e8f5e9]",
      gradientTo: "to-[#c8e6c9]",
      numberColor: "text-[#2e7d32]",
      tagColor: "bg-[#e8f5e9] text-[#2e7d32]",
      checkColor: "text-[#2e7d32]",
      barColor: "#2e7d32",
    },
    {
      product: products.vs1700,
      priceNote: "Preis auf Anfrage",
      available: false,
      accent: "text-[#6d4c41]",
      accentBg: "bg-[#efebe9]",
      accentBorder: "border-[#6d4c41]/20",
      gradientFrom: "from-[#efebe9]",
      gradientTo: "to-[#d7ccc8]",
      numberColor: "text-[#6d4c41]",
      tagColor: "bg-[#efebe9] text-[#6d4c41]",
      checkColor: "text-[#6d4c41]",
      barColor: "#6d4c41",
    },
  ];

  return (
    <section className="section-padding bg-white steel-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Unsere Produkte
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Für jedes Revier<br />das richtige Modell
            </h2>
            <p className="text-slate-600 text-lg">
              Angepasst an die Wildart in Ihrem Revier —
              von Rehwild bis Rotwild.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" stagger={0.15}>
          {items.map(({
            product,
            priceNote,
            available,
            accent,
            accentBorder,
            gradientFrom,
            gradientTo,
            numberColor,
            tagColor,
            checkColor,
            barColor,
          }) => (
            <div
              key={product.model}
              className={`metallic-sheen bg-white rounded-lg overflow-hidden border ${accentBorder} hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Product visual — height number on colored gradient */}
              <div className={`relative w-full aspect-[16/9] bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center overflow-hidden`}>
                {/* Subtle steel diagonal pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(0,0,0,0.15) 40px, rgba(0,0,0,0.15) 41px)",
                  }}
                />
                <div className="relative text-center">
                  <div className={`text-7xl sm:text-8xl lg:text-9xl font-heading font-bold ${numberColor} opacity-80 leading-none mb-2`}>
                    {product.height.replace(" mm", "")}
                  </div>
                  <div className={`${accent} font-heading text-sm uppercase tracking-[0.2em] font-semibold opacity-60`}>
                    Millimeter Höhe
                  </div>
                </div>
                {/* Model badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1.5 rounded text-xs font-heading font-bold uppercase tracking-wider ${tagColor}`}>
                    {product.model}
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10">
                {/* Colored top bar */}
                <div
                  className="w-12 h-1 rounded-full mb-6"
                  style={{ backgroundColor: barColor }}
                />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold uppercase">
                    {product.name}
                  </h2>
                  <span className={`shrink-0 px-3 py-1.5 rounded text-sm font-heading font-semibold uppercase tracking-wider ${tagColor}`}>
                    {product.target}
                  </span>
                </div>

                {/* Price note */}
                <p className={`${accent} font-heading font-semibold text-lg uppercase tracking-wider mb-4`}>
                  {priceNote}
                </p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Specs — compact horizontal */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Höhe", value: product.height },
                    { label: "Zielwild", value: product.target },
                    { label: "Material", value: product.material },
                    { label: "Modell", value: product.model },
                  ].map((spec) => (
                    <div
                      key={spec.label}
                      className="bg-steel-50 rounded px-3 py-2.5 border border-steel-100"
                    >
                      <div className="text-steel-500 font-heading text-xs uppercase tracking-wider mb-0.5">
                        {spec.label}
                      </div>
                      <div className="text-slate-800 text-sm font-semibold">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <CheckIcon className={`w-5 h-5 ${checkColor} shrink-0 mt-0.5`} />
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
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─── METALL STATT PLASTIK ─── */
function MetallStattPlastik() {
  const comparison = [
    {
      aspect: "Material",
      traditional: "Kunststoff",
      gromm: "Feuerverzinkter Stahl",
    },
    {
      aspect: "Lebensdauer",
      traditional: "1–3 Jahre",
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
  ];

  return (
    <MetallicSheen className="section-padding bg-forest-950">
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
              Herkömmliche Einzelschützer bestehen aus Plastik — der GroMM aus
              feuerverzinktem Stahl. Das macht den entscheidenden Unterschied.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            {/* Column headers */}
            <div className="grid grid-cols-3 gap-4 mb-3 px-4">
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

            {/* Rows */}
            <div className="space-y-2">
              {comparison.map((row) => (
                <div
                  key={row.aspect}
                  className="grid grid-cols-3 gap-4 rounded-lg bg-forest-900/60 border border-forest-800/50 px-4 py-3.5 items-center"
                >
                  <div className="text-white font-semibold text-sm">
                    {row.aspect}
                  </div>
                  <div className="text-center text-forest-500 text-sm">
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

        {/* Stats strip */}
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-forest-800 pt-10 mt-16 max-w-4xl mx-auto">
            {[
              { icon: RecycleIcon, value: "100%", label: "Recyclebar" },
              { icon: BanIcon, value: "0%", label: "Plastik" },
              { icon: TimerIcon, value: "<30s", label: "Aufbauzeit" },
              { icon: ShieldIcon, value: "20+", label: "Jahre Lebensdauer" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-forest-500 mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-bold text-white font-heading mb-1">
                  {stat.value}
                </div>
                <div className="text-forest-400 text-sm font-heading uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </MetallicSheen>
  );
}

/* ─── TECHNICAL DETAILS ─── */
function TechnicalDetails() {
  const constructionFeatures = [
    {
      label: "Scherdorne",
      desc: "Optimal dimensioniert — verhindern Verbiss und Fegen zuverlässig",
      icon: ShieldIcon,
    },
    {
      label: "Offene Bauweise",
      desc: "Licht und Luft gelangen ungehindert zur Pflanze — kein Mikroklima",
      icon: LeafIcon,
    },
    {
      label: "Feuerverzinkung",
      desc: "Korrosionsschutz für über 20 Jahre unter Waldbedingungen",
      icon: FactoryIcon,
    },
    {
      label: "Stecksystem",
      desc: "Einmalige Montage der Komponenten, danach werkzeugloses Ausbringen",
      icon: TimerIcon,
    },
    {
      label: "Ergonomie",
      desc: "Ausbringen und Abbauen in wenigen Sekunden — rückenschonend",
      icon: RecycleIcon,
    },
  ];

  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Text content */}
          <ScrollReveal direction="left">
            <div>
              <div className="accent-line mb-6" />
              <p className="section-label text-forest-600 mb-3">
                Technik & Konstruktion
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Feuerverzinkter Stahl —<br />gebaut für Jahrzehnte
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Beide Modelle bestehen aus hochwertigem, feuerverzinktem Stahl.
                Die Feuerverzinkung garantiert eine Lebensdauer von über 20
                Jahren — selbst unter den rauen Bedingungen im Wald. Der Stahl
                ist zu 100% recyclebar und enthält keinerlei Kunststoffanteile.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Die patentierte Konstruktion mit optimal dimensionierten
                Scherdornen verhindert zuverlässig, dass Wild die
                Terminalknospe der geschützten Pflanze erreicht. Gleichzeitig
                ermöglicht die offene Bauweise ungehinderten Zugang von Licht
                und Luft — ein schädliches Mikroklima wird vermieden.
              </p>

              {/* Certification badges */}
              <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.08}>
                {[
                  {
                    icon: ShieldIcon,
                    title: "Patentiert",
                    desc: "2014 angemeldet, 2020 erteilt — einzigartige Konstruktion",
                  },
                  {
                    icon: TimerIcon,
                    title: "Werkzeuglos",
                    desc: "Nach Erstmontage kein Werkzeug mehr nötig",
                  },
                  {
                    icon: LeafIcon,
                    title: "PEFC-zertifiziert",
                    desc: "Erfüllt Anforderungen für nachhaltige Forstwirtschaft",
                  },
                  {
                    icon: RecycleIcon,
                    title: "100% Recyclebar",
                    desc: "Feuerverzinkter Stahl, kein Plastik, kein Mikroplastik",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-lg bg-white border border-steel-100"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="w-5 h-5 text-forest-600" />
                      <h3 className="font-heading font-bold text-sm uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </StaggerReveal>
            </div>
          </ScrollReveal>

          {/* Right: Construction diagram with steel/industrial styling */}
          <ScrollReveal direction="right">
            <div className="bg-steel-800 rounded-lg p-8 sm:p-10 relative overflow-hidden">
              {/* Subtle industrial pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 8px, rgba(255,255,255,0.15) 8px, rgba(255,255,255,0.15) 9px)",
                }}
              />

              <div className="relative space-y-1">
                <h3 className="text-xl font-heading font-bold uppercase tracking-wider text-white text-center mb-8">
                  Konstruktionsmerkmale
                </h3>
                <div className="w-10 h-0.5 bg-accent-500 mx-auto mb-10" />

                {constructionFeatures.map((item, i) => (
                  <div
                    key={item.label}
                    className="flex gap-4 py-4 border-b border-steel-700/50 last:border-b-0"
                  >
                    <div className="shrink-0 w-10 h-10 rounded bg-steel-700/80 text-steel-300 flex items-center justify-center">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-steel-100 uppercase tracking-wider text-sm mb-1">
                        {item.label}
                      </h4>
                      <p className="text-steel-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Bottom badge */}
                <div className="flex items-center justify-center gap-3 pt-6 mt-4">
                  <GermanyIcon className="w-5 h-5" />
                  <span className="text-steel-300 font-heading text-xs uppercase tracking-[0.2em] font-semibold">
                    Entwickelt & gefertigt in Deutschland
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── COMPARISON TABLE: VS1200 vs VS1700 ─── */
function ModelComparison() {
  const specs = [
    { label: "Modell", vs1200: products.vs1200.model, vs1700: products.vs1700.model },
    { label: "Höhe", vs1200: products.vs1200.height, vs1700: products.vs1700.height },
    { label: "Zielwild", vs1200: products.vs1200.target, vs1700: products.vs1700.target },
    { label: "Material", vs1200: products.vs1200.material, vs1700: products.vs1700.material },
    { label: "Einsatzbereich", vs1200: "Mischpflanzungen, Jungbäume", vs1700: "Größere Bäume, exponierte Lagen" },
    { label: "Bauweise", vs1200: "Kompakt & leicht", vs1700: "Robust & langlebig" },
    { label: "Preis", vs1200: "Ab 27,50 € netto", vs1700: "Auf Anfrage" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Modellvergleich
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              VS1200 vs. VS1700
            </h2>
            <p className="text-slate-600 text-lg">
              Welches Modell ist das richtige für Ihr Revier? Der direkte
              Vergleich hilft bei der Entscheidung.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-lg border border-steel-100">
            {/* Header */}
            <div className="grid grid-cols-3">
              <div className="bg-steel-50 px-6 py-4 border-r border-steel-100" />
              <div className="bg-[#e8f5e9] px-6 py-4 text-center border-r border-[#c8e6c9]">
                <span className="font-heading font-bold text-[#2e7d32] uppercase tracking-wider text-sm">
                  VS1200S2
                </span>
                <div className="text-[#2e7d32]/60 font-heading text-xs uppercase tracking-wider mt-0.5">
                  Rehwild
                </div>
              </div>
              <div className="bg-[#efebe9] px-6 py-4 text-center">
                <span className="font-heading font-bold text-[#6d4c41] uppercase tracking-wider text-sm">
                  VS1700S2
                </span>
                <div className="text-[#6d4c41]/60 font-heading text-xs uppercase tracking-wider mt-0.5">
                  Rotwild
                </div>
              </div>
            </div>

            {/* Rows */}
            {specs.map((spec, i) => (
              <div
                key={spec.label}
                className={`grid grid-cols-3 ${i < specs.length - 1 ? "border-b border-steel-100" : ""}`}
              >
                <div className="bg-steel-50 px-6 py-3.5 border-r border-steel-100">
                  <span className="text-steel-700 font-heading font-semibold text-sm uppercase tracking-wider">
                    {spec.label}
                  </span>
                </div>
                <div className="px-6 py-3.5 text-center text-slate-700 text-sm border-r border-steel-100">
                  {spec.vs1200}
                </div>
                <div className="px-6 py-3.5 text-center text-slate-700 text-sm">
                  {spec.vs1700}
                </div>
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-3 border-t border-steel-200 bg-steel-50/50">
              <div className="px-6 py-5 border-r border-steel-100" />
              <div className="px-4 py-5 flex justify-center border-r border-steel-100">
                <Link href="/shop" className="btn-primary text-sm !px-5 !py-2.5">
                  Bestellen
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
              <div className="px-4 py-5 flex justify-center">
                <Link href="/kontakt" className="btn-secondary text-sm !px-5 !py-2.5">
                  Anfragen
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTASection() {
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

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <div className="accent-line mx-auto mb-6" />
          <p className="section-label text-forest-400 mb-3">
            Bereit loszulegen?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Überzeugt?<br />Bestellen Sie jetzt.
          </h2>
          <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
            Starten Sie mit dem Promopack (5 Stück) zum Testen oder bestellen
            Sie direkt in größerer Menge — mit attraktiven Staffelpreisen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/shop" className="btn-primary text-base">
              Zum Shop
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
export default function ProduktePage() {
  return (
    <>
      <HeroBanner />
      <ProductCards />
      <ForestDivider variant="bold" />
      <MetallStattPlastik />
      <TechnicalDetails />
      <ForestDivider variant="subtle" />
      <ModelComparison />
      <CTASection />
    </>
  );
}
