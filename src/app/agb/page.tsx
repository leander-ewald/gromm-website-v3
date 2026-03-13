import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: "AGB",
  description: `Allgemeine Geschäftsbedingungen der ${company.name}.`,
};

export default function AGBPage() {
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
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-steel-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Verkaufsbedingungen der {company.name}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-12">
            {/* §1 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §1 Geltungsbereich
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Diese Verkaufsbedingungen gelten ausschließlich gegenüber
                Unternehmern, juristischen Personen des öffentlichen Rechts oder
                öffentlich-rechtlichen Sondervermögen im Sinne von § 310 Absatz 1
                BGB. Entgegenstehende oder von unseren Verkaufsbedingungen
                abweichende Bedingungen des Bestellers erkennen wir nur an, wenn
                wir ausdrücklich schriftlich der Geltung zustimmen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Unsere Verkaufsbedingungen gelten auch dann, wenn wir in Kenntnis
                entgegenstehender oder von unseren Verkaufsbedingungen
                abweichender Bedingungen des Bestellers die Lieferung an den
                Besteller vorbehaltlos ausführen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Diese Verkaufsbedingungen gelten auch für alle zukünftigen
                Geschäfte mit dem Besteller, soweit es sich um Rechtsgeschäfte
                verwandter Art handelt. Individuelle zwischen den
                Vertragsparteien getroffene schriftliche Vereinbarungen haben
                Vorrang gegenüber diesen allgemeinen Geschäftsbedingungen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Handelsklauseln werden gemäß den INCOTERMS 2020 ausgelegt.
              </p>
            </div>

            {/* §2 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §2 Angebot und Vertragsabschluss
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sofern eine Bestellung als Angebot gemäß § 145 BGB anzusehen
                ist, können wir diese innerhalb von zwei Wochen annehmen.
              </p>
            </div>

            {/* §3 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §3 Überlassene Unterlagen
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                An allen in Zusammenhang mit der Auftragserteilung dem Besteller
                überlassenen Unterlagen — auch in elektronischer Form —, wie z.
                B. Kalkulationen, Zeichnungen etc., behalten wir uns Eigentums-
                und Urheberrechte vor. Diese Unterlagen dürfen Dritten nicht
                zugänglich gemacht werden, es sei denn, wir erteilen dazu dem
                Besteller unsere ausdrückliche schriftliche Zustimmung.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Soweit wir das Angebot des Bestellers nicht innerhalb der Frist
                von § 2 annehmen, sind diese Unterlagen uns unverzüglich
                zurückzusenden.
              </p>
            </div>

            {/* §4 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §4 Preise und Zahlung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Sofern nichts Gegenteiliges schriftlich vereinbart wird, gelten
                unsere Preise ab Werk ausschließlich Verpackung und Fracht
                zuzüglich Mehrwertsteuer in jeweils gültiger Höhe. Kosten der
                Verpackung und des Transports werden gesondert in Rechnung
                gestellt.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Die Zahlung des Kaufpreises hat ausschließlich auf das genannte
                Konto zu erfolgen. Sofern nichts anderes vereinbart wird, ist der
                gesamte Kaufpreis innerhalb von 10 Tagen nach Lieferung fällig.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Verzugszinsen werden in Höhe von 9 % über dem jeweiligen
                Basiszinssatz p.a. berechnet. Die Geltendmachung eines höheren
                Verzugsschadens bleibt vorbehalten.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sofern keine Festpreisabrede getroffen wurde, bleiben
                angemessene Preisänderungen wegen veränderter Lohn-, Material-
                und Vertriebskosten für Lieferungen, die 3 oder mehr Monate nach
                Vertragsabschluss erfolgen, vorbehalten.
              </p>
            </div>

            {/* §5 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §5 Zurückbehaltungsrechte
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Zur Ausübung eines Zurückbehaltungsrechts ist der Besteller nur
                insoweit befugt, als sein Gegenanspruch auf dem gleichen
                Vertragsverhältnis beruht.
              </p>
            </div>

            {/* §6 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §6 Lieferzeit und Lieferbedingungen
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Sofern nichts anderes vereinbart ist, erfolgt die Lieferung DAP
                (Delivered At Place). Sofern nichts anderes vereinbart ist,
                beträgt die Lieferzeit maximal 8 Wochen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Kann der Besteller die ordnungsgemäße Zustellung nicht
                sicherstellen, hat der Besteller durch Bereitstellung von
                geeigneten Flurförderfahrzeugen dafür Sorge zu tragen, dass die
                Waren am Bestimmungsort entladen werden.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Bei Annahmeverzug des Bestellers können wir Schadensersatz
                verlangen. Die Verzugsentschädigung beträgt 0,5 % des
                Lieferwertes pro vollendete Woche, maximal jedoch nicht mehr als
                5 % des Lieferwertes.
              </p>
            </div>

            {/* §7 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §7 Gefahrübergang bei Versendung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Wird die Ware auf Wunsch des Bestellers an diesen versandt, so
                geht mit der Absendung an den Besteller, spätestens mit
                Verlassen des Werks/Lagers die Gefahr des zufälligen Untergangs
                oder der zufälligen Verschlechterung der Ware auf den Besteller
                über. Dies gilt unabhängig davon, ob die Versendung der Ware vom
                Erfüllungsort erfolgt oder wer die Frachtkosten trägt.
              </p>
            </div>

            {/* §8 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §8 Eigentumsvorbehalt
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Wir behalten uns das Eigentum an der gelieferten Sache bis zur
                vollständigen Zahlung sämtlicher Forderungen aus dem
                Liefervertrag vor. Der Besteller ist verpflichtet, solange das
                Eigentum noch nicht auf ihn übergegangen ist, die Kaufsache
                pfleglich zu behandeln und Pfändungen oder sonstige Zugriffe
                Dritter unverzüglich mitzuteilen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Der Besteller ist befugt, die Vorbehaltsware im ordnungsgemäßen
                Geschäftsbetrieb weiterzuveräußern. Er tritt uns jedoch bereits
                jetzt alle Forderungen in Höhe des mit uns vereinbarten
                Faktura-Endbetrages (einschließlich Mehrwertsteuer) ab, die ihm
                durch die Weiterveräußerung gegen seine Abnehmer oder Dritte
                erwachsen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sicherheiten werden freigegeben, wenn ihr Wert die gesicherten
                Forderungen um mehr als 10% übersteigt.
              </p>
            </div>

            {/* §9 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §9 Gewährleistung und Mängelrüge
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Gewährleistungsrechte des Bestellers setzen voraus, dass dieser
                seinen nach § 377 HGB geschuldeten Untersuchungs- und
                Rügeobliegenheiten ordnungsgemäß nachgekommen ist.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Mängelansprüche verjähren in 12 Monaten nach erfolgter
                Ablieferung der von uns gelieferten Ware. Wir bessern nach oder
                liefern Ersatzware. Es ist uns stets Gelegenheit zur
                Nacherfüllung innerhalb angemessener Frist zu geben.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Mängelansprüche bestehen nicht bei unerheblichen Abweichungen,
                natürlicher Abnutzung oder Schäden durch fehlerhafte oder
                nachlässige Behandlung, übermäßige Beanspruchung oder
                ungeeignete Betriebsmittel.
              </p>
            </div>

            {/* §10 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                §10 Sonstiges
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Dieser Vertrag und die gesamten Rechtsbeziehungen der Parteien
                unterliegen dem Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts (CISG).
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Erfüllungsort und Gerichtsstand ist der Geschäftssitz des
                Unternehmens. Alle Vereinbarungen sind schriftlich niedergelegt.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sollte eine Bestimmung unwirksam sein, berührt dies die
                Wirksamkeit der übrigen Bestimmungen nicht.
              </p>
            </div>

            {/* Stand */}
            <div className="bg-earth-50 rounded-xl p-6 border border-earth-200">
              <p className="text-slate-600 text-lg font-medium">
                Stand: März 2026
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
