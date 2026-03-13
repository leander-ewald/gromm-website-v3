import type { Metadata } from "next";
import Link from "next/link";
import { company, team } from "@/lib/config";
import { ScrollReveal, StaggerReveal, CountUp } from "@/components/ScrollReveal";
import {
  ArrowRightIcon,
  TreeIcon,
  ShieldIcon,
  CheckIcon,
  LeafIcon,
  EyeIcon,
  RecycleIcon,
  TimerIcon,
} from "@/components/Icons";
import { TreeRings } from "@/components/TreeRings";
import { FloatingLeaves } from "@/components/FloatingLeaves";

export const metadata: Metadata = {
  title: "Über uns",
  description: `${company.name} — Patentierter Einzelschützer für nachhaltige Forstwirtschaft. Gegründet 2021 von Thomas Groos, Forstwirt mit über 20 Jahren Erfahrung.`,
};

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
        <p className="section-label text-steel-300 mb-6">
          {company.name}
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 font-heading">
          Aus der Praxis.<br />
          <span className="text-forest-400">Für die Praxis.</span>
        </h1>
        <p className="text-steel-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Wie ein Forstwirt den nachhaltigen Einzelschützer erfand,
          der die Branche verändert.
        </p>
      </div>
    </section>
  );
}

/* ─── COMPANY STORY ─── */
function CompanyStory() {
  return (
    <section className="section-padding bg-white steel-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="accent-line mb-6" />
              <p className="section-label text-forest-600 mb-3">
                Unsere Geschichte
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Vom Wald<br />
                <span className="text-forest-600">ins Patent</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Thomas Groos arbeitet seit über 20 Jahren als Forstwirt. Immer
                wieder sah er dasselbe Problem: Kunststoffhüllen und Drahthosen zum
                Schutz von Jungpflanzen waren teuer, aufwändig in der Handhabung
                und alles andere als nachhaltig. Die Einweglösungen hinterließen
                Mikroplastik im Waldboden und mussten kostspielig entsorgt werden.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Die Idee: Ein Einzelschützer aus feuerverzinktem Stahl, der
                wiederverwendbar ist, in Sekunden aufgebaut werden kann und über
                Jahrzehnte hält. 2014 meldete Thomas Groos das Patent an. Nach
                Jahren der Entwicklung und Erprobung im Feld wurde das Patent 2020
                offiziell erteilt.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                2021 gründete er die {company.name}, um den GroMM Einzelschützer
                Forstbetrieben, Kommunen und Waldbesitzern in ganz Deutschland
                zugänglich zu machen.
              </p>
            </div>
          </ScrollReveal>

          {/* Large stat visual */}
          <ScrollReveal direction="right">
            <div className="bg-forest-950 rounded-lg p-10 sm:p-14 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(176,190,197,0.5) 40px, rgba(176,190,197,0.5) 41px)",
                }}
              />
              {/* Tree rings growing in the background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <TreeRings size={320} rings={8} className="text-forest-600" />
              </div>
              <div className="relative">
                <p className="section-label text-steel-400 mb-6">
                  Erfahrung im Forst
                </p>
                <div className="text-7xl sm:text-8xl lg:text-9xl font-heading font-bold text-white mb-2">
                  <CountUp end={20} suffix="+" className="tabular-nums" />
                </div>
                <p className="text-forest-300 font-heading text-xl sm:text-2xl uppercase tracking-wider font-semibold mb-8">
                  Jahre
                </p>
                <div className="w-16 h-px bg-forest-700 mx-auto mb-8" />
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">
                      2014
                    </div>
                    <div className="text-steel-400 text-sm font-heading uppercase tracking-wider">
                      Patent angemeldet
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-heading font-bold text-white mb-1">
                      2021
                    </div>
                    <div className="text-steel-400 text-sm font-heading uppercase tracking-wider">
                      GmbH gegründet
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── TIMELINE ─── */
function TimelineSection() {
  const milestones = [
    {
      year: "2014",
      title: "Patent angemeldet",
      desc: "Thomas Groos meldet das Patent für den neuartigen Einzelschützer aus feuerverzinktem Stahl an.",
    },
    {
      year: "2014–2020",
      title: "Entwicklung & Feldtests",
      desc: "Jahrelange Erprobung unter realen Waldbedingungen. Optimierung von Material, Konstruktion und Handhabung.",
    },
    {
      year: "2020",
      title: "Patent erteilt",
      desc: "Das Deutsche Patent- und Markenamt erteilt das Patent für die einzigartige Konstruktion.",
    },
    {
      year: "2021",
      title: "GmbH gegründet",
      desc: `Gründung der ${company.name} in Ehringshausen. Start der Serienproduktion und Vermarktung.`,
    },
    {
      year: "Heute",
      title: "Wachstum",
      desc: "Immer mehr Forstbetriebe, Kommunen und Waldbesitzer setzen auf den nachhaltigen GroMM Einzelschützer.",
    },
  ];

  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Meilensteine
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Unser Weg
            </h2>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          <StaggerReveal className="space-y-0" stagger={0.12}>
            {milestones.map((milestone, i) => (
              <div key={milestone.year} className="flex gap-5 sm:gap-8">
                {/* Numbered steel block + vertical line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-steel-700 text-white flex items-center justify-center font-heading font-bold text-lg sm:text-xl rounded-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 bg-steel-200 my-0" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10 sm:pb-12 pt-1">
                  <span className="font-heading font-bold text-steel-500 text-sm uppercase tracking-[0.15em]">
                    {milestone.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mt-1 mb-2 font-heading">
                    {milestone.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed max-w-lg">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── TEAM ─── */
function TeamSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Das Team
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Menschen hinter<br />dem GroMM
            </h2>
            <p className="text-slate-600 text-lg">
              Erfahrung aus der Forstwirtschaft trifft auf technisches Know-how.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" stagger={0.15}>
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-lg border border-steel-100 p-8 hover:shadow-lg hover:shadow-steel-100/50 transition-all duration-300"
            >
              {/* Industrial avatar placeholder */}
              <div className="w-20 h-20 bg-steel-700 border-2 border-steel-400 flex items-center justify-center mb-6 rounded-sm">
                <span className="text-white text-2xl font-heading font-bold uppercase tracking-wider">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <h3 className="text-xl font-heading font-bold uppercase tracking-wide mb-1">
                {member.name}
              </h3>
              <p className="text-forest-600 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
                {member.role}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─── PHILOSOPHY / SUSTAINABILITY ─── */
function PhilosophySection() {
  const pillars = [
    {
      title: "Kein Plastik im Wald",
      desc: "Feuerverzinkter Stahl statt Kunststoff. Kein Mikroplastik, keine aufwändige Entsorgung, 100% recyclebar.",
    },
    {
      title: "Kreislaufwirtschaft",
      desc: "Der einzige Mehrweg-Einzelschützer am Markt. Wird über Jahrzehnte wiederverwendet — Ressourcen sparen statt verschwenden.",
    },
    {
      title: "Artenschutz & Waldschutz",
      desc: "Die offene Konstruktion schützt die Pflanze und lässt gleichzeitig Licht, Luft und Insekten durch. Kein schädliches Mikroklima.",
    },
    {
      title: "PEFC-zertifiziert",
      desc: "Erfüllt die Anforderungen der PEFC-Zertifizierung für nachhaltige Forstwirtschaft und kommende EU-Regularien.",
    },
  ];

  return (
    <section className="section-padding bg-forest-950 text-white relative overflow-hidden">
      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(176,190,197,0.5) 60px, rgba(176,190,197,0.5) 61px)",
        }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-800/30 to-transparent" />
      {/* Floating leaves in the philosophy section */}
      <FloatingLeaves count={4} variant="dark" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <div className="accent-line mb-6" />
              <p className="section-label text-steel-300 mb-3">
                Philosophie
              </p>
              <div className="w-14 h-14 rounded-sm bg-forest-800 border border-forest-700 text-forest-400 flex items-center justify-center mb-6">
                <TreeIcon className="w-7 h-7" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Nachhaltige Forstwirtschaft beginnt beim Schutz
              </h2>
              <p className="text-steel-200 text-lg leading-relaxed mb-6">
                Der Klimawandel stellt unsere Wälder vor enorme Herausforderungen.
                Dürre, Stürme und Schädlinge dezimieren Baumbestände. Die
                Wiederaufforstung mit klimaresistenten Mischkulturen ist eine der
                wichtigsten Aufgaben unserer Zeit.
              </p>
              <p className="text-steel-200 text-lg leading-relaxed">
                Doch jede neu gepflanzte Kultur muss vor Wildverbiss geschützt
                werden. Bisherige Lösungen waren selbst Teil des Problems: Plastikmüll
                im Wald, hohe Folgekosten, aufwendige Pflege. Der GroMM löst
                diesen Widerspruch — nachhaltiger Schutz für nachhaltige
                Forstwirtschaft.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="space-y-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="p-6 rounded-sm bg-forest-900/80 border border-forest-700/60 hover:border-steel-500/40 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <CheckIcon className="w-5 h-5 text-forest-400 shrink-0" />
                    <h3 className="font-heading font-bold text-white uppercase tracking-wide">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-steel-300 text-sm leading-relaxed pl-8">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── VALUES ─── */
function ValuesSection() {
  const values = [
    {
      title: "Praxisnähe",
      desc: "Entwickelt von einem Forstwirt, der die Probleme im Wald jeden Tag selbst erlebt hat. Jedes Detail ist praxiserprobt.",
      icon: EyeIcon,
    },
    {
      title: "Nachhaltigkeit",
      desc: "Nicht nur ein Schlagwort: Unser Produkt ist wiederverwendbar, plastikfrei, recyclebar und PEFC-zertifiziert.",
      icon: LeafIcon,
    },
    {
      title: "Wirtschaftlichkeit",
      desc: "Der GroMM erreicht schon nach dem ersten Einsatz die Kostenneutralität. Ab dem zweiten Einsatz sparen Sie bares Geld.",
      icon: RecycleIcon,
    },
    {
      title: "Qualität",
      desc: "Feuerverzinkter Stahl, in Deutschland entwickelt. Über 20 Jahre Lebensdauer unter härtesten Waldbedingungen.",
      icon: ShieldIcon,
    },
    {
      title: "Einfachheit",
      desc: "Aufbau in unter 30 Sekunden, ohne Werkzeuge. So einfach, dass jeder es sofort kann.",
      icon: TimerIcon,
    },
    {
      title: "Verantwortung",
      desc: "Wir übernehmen Verantwortung für den Wald von morgen — mit einem Produkt, das Teil der Lösung ist, nicht des Problems.",
      icon: TreeIcon,
    },
  ];

  return (
    <section className="section-padding bg-white steel-pattern">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-600 mb-3">
              Unsere Werte
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Woran wir glauben
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto" stagger={0.1}>
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group text-center p-6 rounded-lg border border-slate-100 bg-white hover:border-forest-200 hover:shadow-lg hover:shadow-forest-100/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-forest-50 text-forest-600 flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-100 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg uppercase tracking-wide mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            );
          })}
        </StaggerReveal>
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
          <p className="section-label text-steel-300 mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Lernen Sie uns kennen
          </h2>
          <p className="text-steel-200 text-lg mb-10 max-w-2xl mx-auto">
            Haben Sie Fragen zu unseren Produkten oder möchten Sie sich persönlich
            beraten lassen? Wir freuen uns auf Ihre Nachricht.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="btn-primary text-base">
              Kontakt aufnehmen
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link href="/produkte" className="btn-outline-light text-base">
              Produkte ansehen
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── PAGE ─── */
export default function UeberUnsPage() {
  return (
    <>
      <HeroBanner />
      <CompanyStory />
      <TimelineSection />
      <TeamSection />
      <PhilosophySection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
