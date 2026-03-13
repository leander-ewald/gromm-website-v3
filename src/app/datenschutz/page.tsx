import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der ${company.name} — Informationen zum Umgang mit personenbezogenen Daten.`,
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>
          <p className="text-steel-200 text-lg sm:text-xl max-w-2xl leading-relaxed">
            Informationen zum Umgang mit Ihren personenbezogenen Daten
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="space-y-12">
            {/* Verantwortliche Stelle */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                1. Verantwortliche Stelle
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser
                Website ist:
              </p>
              <div className="space-y-1 text-slate-600 text-lg leading-relaxed mb-4">
                <p className="font-semibold text-slate-800">{company.name}</p>
                <p>{company.address.street}</p>
                <p>
                  {company.address.zip} {company.address.city}
                </p>
                <p>{company.address.country}</p>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed">
                E-Mail:{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-forest-600 hover:text-forest-700 underline underline-offset-2 min-h-[44px] inline-flex items-center"
                >
                  {company.email}
                </a>
              </p>
            </div>

            {/* Allgemeines zur Datenverarbeitung */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Wir erheben und verwenden personenbezogene Daten unserer Nutzer
                grundsätzlich nur, soweit dies zur Bereitstellung einer
                funktionsfähigen Website sowie unserer Inhalte und Leistungen
                erforderlich ist. Die Erhebung und Verwendung personenbezogener
                Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des
                Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine
                vorherige Einholung einer Einwilligung aus tatsächlichen Gründen
                nicht möglich ist und die Verarbeitung der Daten durch
                gesetzliche Vorschriften gestattet ist.
              </p>
            </div>

            {/* Rechtsgrundlagen */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                3. Rechtsgrundlagen der Verarbeitung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine
                Einwilligung der betroffenen Person einholen, dient Art. 6 Abs. 1
                lit. a EU-Datenschutzgrundverordnung (DSGVO) als Rechtsgrundlage.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Bei der Verarbeitung von personenbezogenen Daten, die zur
                Erfüllung eines Vertrages, dessen Vertragspartei die betroffene
                Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO
                als Rechtsgrundlage. Dies gilt auch für Verarbeitungsvorgänge,
                die zur Durchführung vorvertraglicher Maßnahmen erforderlich
                sind.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Ist die Verarbeitung zur Wahrung eines berechtigten Interesses
                unseres Unternehmens oder eines Dritten erforderlich und
                überwiegen die Interessen, Grundrechte und Grundfreiheiten des
                Betroffenen das erstgenannte Interesse nicht, so dient Art. 6
                Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
              </p>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                4. Hosting
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Diese Website wird bei Vercel Inc. gehostet. Vercel kann beim
                Aufruf dieser Webseiten technische Informationen inklusive Ihrer
                IP-Adresse aufzeichnen. Weitere Informationen finden Sie in der
                Datenschutzerklärung von Vercel unter{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-forest-600 hover:text-forest-700 underline underline-offset-2 min-h-[44px] inline-flex items-center"
                >
                  vercel.com/legal/privacy-policy
                </a>
                .
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
                möglichst zuverlässigen Darstellung unserer Website.
              </p>
            </div>

            {/* Server-Log-Files */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                5. Server-Log-Files
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Der Provider der Seiten erhebt und speichert automatisch
                Informationen in sogenannten Server-Log-Files, die Ihr Browser
                automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 text-lg leading-relaxed mb-4">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-slate-600 text-lg leading-relaxed">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf
                Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
                hat ein berechtigtes Interesse an der technisch fehlerfreien
                Darstellung und der Optimierung seiner Website — hierzu müssen
                die Server-Log-Files erfasst werden.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                6. Cookies
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Unsere Internetseiten verwenden teilweise sogenannte Cookies.
                Cookies richten auf Ihrem Rechner keinen Schaden an und
                enthalten keine Viren. Cookies dienen dazu, unser Angebot
                nutzerfreundlicher, effektiver und sicherer zu machen. Cookies
                sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden
                und die Ihr Browser speichert.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Die meisten der von uns verwendeten Cookies sind sogenannte
                „Session-Cookies". Sie werden nach Ende Ihres Besuchs
                automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät
                gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es
                uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sie können Ihren Browser so einstellen, dass Sie über das Setzen
                von Cookies informiert werden und Cookies nur im Einzelfall
                erlauben, die Annahme von Cookies für bestimmte Fälle oder
                generell ausschließen sowie das automatische Löschen der Cookies
                beim Schließen des Browsers aktivieren. Bei der Deaktivierung
                von Cookies kann die Funktionalität dieser Website eingeschränkt
                sein.
              </p>
            </div>

            {/* Analyse-Tools */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                7. Analyse-Tools und Tracking
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Diese Website verwendet keine Analyse-Tools oder
                Tracking-Dienste. Es werden keine Nutzungsprofile erstellt und
                kein Tracking-Code eingebunden. Ihre Nutzung dieser Website wird
                nicht zu Werbezwecken oder zur Erstellung von Nutzerprofilen
                ausgewertet.
              </p>
            </div>

            {/* Kontaktformular */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                8. Kontaktformular
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Die Verarbeitung der in das Kontaktformular eingegebenen Daten
                erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung
                (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung
                jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
                E-Mail an{" "}
                <a
                  href={`mailto:${company.email}`}
                  className="text-forest-600 hover:text-forest-700 underline underline-offset-2 min-h-[44px] inline-flex items-center"
                >
                  {company.email}
                </a>
                . Die Rechtmäßigkeit der bis zum Widerruf erfolgten
                Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung
                zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung
                Ihrer Anfrage). Zwingende gesetzliche Bestimmungen —
                insbesondere Aufbewahrungsfristen — bleiben unberührt.
              </p>
            </div>

            {/* SSL/TLS */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                9. SSL- bzw. TLS-Verschlüsselung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
                Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
                oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung
                erkennen Sie daran, dass die Adresszeile des Browsers von
                „http://" auf „https://" wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung
                aktiviert ist, können die Daten, die Sie an uns übermitteln,
                nicht von Dritten mitgelesen werden.
              </p>
            </div>

            {/* Auskunft */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                10. Recht auf Auskunft, Löschung und Berichtigung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft über Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
                auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
                weiteren Fragen zum Thema personenbezogene Daten können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Recht auf Einschränkung der Verarbeitung
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Hierzu können Sie sich
                jederzeit unter der im Impressum angegebenen Adresse an uns
                wenden.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Widerspruch gegen Werbe-E-Mails
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
                Werbung und Informationsmaterialien wird hiermit widersprochen.
                Die Betreiber der Seiten behalten sich ausdrücklich rechtliche
                Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Beschwerderecht bei der zuständigen Aufsichtsbehörde
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen
                ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist
                der Landesdatenschutzbeauftragte des Bundeslandes, in dem unser
                Unternehmen seinen Sitz hat.
              </p>
            </div>

            {/* Datenübertragbarkeit */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                11. Recht auf Datenübertragbarkeit
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erfüllung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem gängigen,
                maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
                direkte Übertragung der Daten an einen anderen Verantwortlichen
                verlangen, erfolgt dies nur, soweit es technisch machbar ist.
              </p>
            </div>

            {/* Aktualität */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                12. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig. Durch die
                Weiterentwicklung unserer Website und Angebote oder aufgrund
                geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
                kann es notwendig werden, diese Datenschutzerklärung zu ändern.
                Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf
                dieser Website abgerufen und ausgedruckt werden.
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
