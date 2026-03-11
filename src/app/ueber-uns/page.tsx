import type { Metadata } from "next";
import Link from "next/link";
import { company, team } from "@/lib/config";
import { ArrowRightIcon, TreeIcon, ShieldIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Über uns",
  description: `${company.name} — Patentierter Einzelschützer für nachhaltige Forstwirtschaft. Gegründet 2021 von Thomas Groos, Forstwirt mit über 20 Jahren Erfahrung.`,
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
          Über uns
        </h1>
        <p className="text-forest-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
          Aus der Praxis für die Praxis — wie ein Forstwirt den nachhaltigen
          Einzelschützer erfand, der die Branche verändert.
        </p>
      </div>
    </section>
  );
}

function CompanyStory() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Unsere Geschichte
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Vom Wald ins Patent
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

          {/* Visual timeline card */}
          <div className="bg-forest-950 rounded-2xl p-8 sm:p-10">
            <h3 className="text-xl font-bold text-white mb-8">Meilensteine</h3>
            <div className="space-y-0">
              {[
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
              ].map((milestone, i, arr) => (
                <div key={milestone.year} className="flex gap-4 sm:gap-6">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-forest-400 shrink-0 mt-1.5" />
                    {i < arr.length - 1 && (
                      <div className="w-px flex-1 bg-forest-700 my-1" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-forest-400 text-sm font-semibold">
                      {milestone.year}
                    </span>
                    <h4 className="text-white font-semibold mt-1 mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-forest-300 text-sm leading-relaxed">
                      {milestone.desc}
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

function TeamSection() {
  return (
    <section className="section-padding bg-earth-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Das Team
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Menschen hinter dem GroMM
          </h2>
          <p className="text-slate-600 text-lg">
            Erfahrung aus der Forstwirtschaft trifft auf technisches Know-how.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl border border-slate-100 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center mb-6">
                <span className="text-forest-700 text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-forest-600 font-medium text-sm mb-4">
                {member.role}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="section-padding bg-forest-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="w-14 h-14 rounded-xl bg-forest-800 text-forest-400 flex items-center justify-center mb-6">
              <TreeIcon className="w-7 h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Nachhaltige Forstwirtschaft beginnt beim Schutz
            </h2>
            <p className="text-forest-200 text-lg leading-relaxed mb-6">
              Der Klimawandel stellt unsere Wälder vor enorme Herausforderungen.
              Dürre, Stürme und Schädlinge dezimieren Baumbestände. Die
              Wiederaufforstung mit klimaresistenten Mischkulturen ist eine der
              wichtigsten Aufgaben unserer Zeit.
            </p>
            <p className="text-forest-200 text-lg leading-relaxed">
              Doch jede neu gepflanzte Kultur muss vor Wildverbiss geschützt
              werden. Bisherige Lösungen waren selbst Teil des Problems: Plastikmüll
              im Wald, hohe Folgekosten, aufwendige Pflege. Der GroMM löst
              diesen Widerspruch — nachhaltiger Schutz für nachhaltige
              Forstwirtschaft.
            </p>
          </div>

          <div className="space-y-6">
            {[
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
            ].map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-xl bg-forest-800 border border-forest-700"
              >
                <div className="flex items-center gap-3 mb-2">
                  <CheckIcon className="w-5 h-5 text-forest-400 shrink-0" />
                  <h3 className="font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-forest-300 text-sm leading-relaxed pl-8">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Unsere Werte
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Woran wir glauben
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Praxisnähe",
              desc: "Entwickelt von einem Forstwirt, der die Probleme im Wald jeden Tag selbst erlebt hat. Jedes Detail ist praxiserprobt.",
            },
            {
              title: "Nachhaltigkeit",
              desc: "Nicht nur ein Schlagwort: Unser Produkt ist wiederverwendbar, plastikfrei, recyclebar und PEFC-zertifiziert.",
            },
            {
              title: "Wirtschaftlichkeit",
              desc: "Der GroMM erreicht schon nach dem ersten Einsatz die Kostenneutralität. Ab dem zweiten Einsatz sparen Sie bares Geld.",
            },
            {
              title: "Qualität",
              desc: "Feuerverzinkter Stahl, in Deutschland entwickelt. Über 20 Jahre Lebensdauer unter härtesten Waldbedingungen.",
            },
            {
              title: "Einfachheit",
              desc: "Aufbau in unter 30 Sekunden, ohne Werkzeuge. So einfach, dass jeder es sofort kann.",
            },
            {
              title: "Verantwortung",
              desc: "Wir übernehmen Verantwortung für den Wald von morgen — mit einem Produkt, das Teil der Lösung ist, nicht des Problems.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="text-center p-6 rounded-xl border border-slate-100 hover:border-forest-200 hover:shadow-lg hover:shadow-forest-100/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center mx-auto mb-4">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.desc}
              </p>
            </div>
          ))}
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
          Lernen Sie uns kennen
        </h2>
        <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
          Haben Sie Fragen zu unseren Produkten oder möchten Sie sich persönlich
          beraten lassen? Wir freuen uns auf Ihre Nachricht.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/kontakt" className="btn-primary text-base">
            Kontakt aufnehmen
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/produkte"
            className="btn-outline !border-forest-500 !text-forest-300 hover:!bg-forest-700 hover:!text-white text-base"
          >
            Produkte ansehen
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function UeberUnsPage() {
  return (
    <>
      <HeroBanner />
      <CompanyStory />
      <TeamSection />
      <PhilosophySection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
