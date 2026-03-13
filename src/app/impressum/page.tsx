import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${company.name} — Angaben gemäß § 5 TMG.`,
};

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-950 pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(176,190,197,0.5) 60px, rgba(176,190,197,0.5) 61px)",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-800/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="accent-line mb-6" />
          <p className="section-label text-steel-400 mb-3">
            Rechtliches
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Impressum
          </h1>
          <p className="text-steel-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Angaben gemäß § 5 TMG
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-12">
            {/* Unternehmensangaben */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed">
                <p className="font-semibold text-slate-800">{company.name}</p>
                <p>{company.address.street}</p>
                <p>
                  {company.address.zip} {company.address.city}
                </p>
                <p>{company.address.country}</p>
              </div>
            </div>

            {/* Vertreten durch */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Vertreten durch
              </h2>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed">
                <p>
                  Geschäftsführer: {company.ceo}
                </p>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Kontakt</h2>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed">
                <p>
                  E-Mail:{" "}
                  <a
                    href={`mailto:${company.email}`}
                    className="text-forest-600 hover:text-forest-700 underline underline-offset-2 min-h-[44px] inline-flex items-center"
                  >
                    {company.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Handelsregister */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Registereintrag
              </h2>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed">
                <p>Registergericht: {company.registry}</p>
              </div>
            </div>

            {/* Steuer */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Umsatzsteuer-ID
              </h2>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed">
                <p>Steuernummer: {company.taxId}</p>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß §27a
                  Umsatzsteuergesetz: {company.vatId}
                </p>
              </div>
            </div>

            {/* Bankverbindung */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Bankverbindung
              </h2>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed">
                <p>IBAN: {company.iban}</p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Haftungsausschluss
              </h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Haftung für Inhalte
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen
                zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir
                diese Inhalte umgehend entfernen.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Haftung für Links
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
                der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            {/* Urheberrecht */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Urheberrecht
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>

            {/* Back link */}
            <div className="pt-8 border-t border-slate-200">
              <Link
                href="/"
                className="text-forest-600 hover:text-forest-700 font-medium underline underline-offset-2 min-h-[44px] inline-flex items-center"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
