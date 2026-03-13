import type { Metadata } from "next";
import { company } from "@/lib/config";
import { MailIcon, MapPinIcon } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-950 pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
        {/* Diagonal line pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(176,190,197,0.5) 60px, rgba(176,190,197,0.5) 61px)",
          }}
        />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-forest-800/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-forest-950 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="accent-line mb-6" />
              <p className="section-label text-steel-300 mb-4">
                Kontakt
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Sprechen Sie<br />
                <span className="text-forest-400">mit uns.</span>
              </h1>
              <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
                Haben Sie Fragen zum GroMM oder möchten ein individuelles Angebot?
                Wir freuen uns auf Ihre Nachricht.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — left column (wider) */}
            <div className="lg:col-span-3 relative">
              <ScrollReveal direction="left">
                <div className="accent-line mb-6" />
                <p className="section-label text-forest-600 mb-3">
                  Nachricht senden
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Schreiben Sie uns
                </h2>
                <p className="text-slate-600 mb-8">
                  Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
                </p>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Info — right column */}
            <div className="lg:col-span-2">
              <div className="space-y-6 lg:sticky lg:top-32">
                <ScrollReveal direction="right" delay={0.1}>
                  {/* Address */}
                  <div className="rounded-xl bg-steel-50 border border-steel-100 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-steel-100 text-steel-600 flex items-center justify-center">
                        <MapPinIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-lg">Adresse</h3>
                    </div>
                    <address className="text-slate-600 not-italic leading-relaxed text-sm sm:text-base">
                      {company.name}<br />
                      {company.address.street}<br />
                      {company.address.zip} {company.address.city}<br />
                      {company.address.country}
                    </address>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.2}>
                  {/* Email */}
                  <div className="rounded-xl bg-steel-50 border border-steel-100 p-6 sm:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-steel-100 text-steel-600 flex items-center justify-center">
                        <MailIcon className="w-5 h-5" />
                      </div>
                      <h3 className="font-semibold text-lg">E-Mail</h3>
                    </div>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-forest-600 hover:text-forest-800 font-medium transition-colors text-sm sm:text-base break-all"
                    >
                      {company.email}
                    </a>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={0.3}>
                  {/* Real OpenStreetMap */}
                  <div className="rounded-xl overflow-hidden border border-steel-100">
                    <div className="aspect-[4/3] relative">
                      <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=8.33%2C50.64%2C8.39%2C50.68&layer=mapnik&marker=50.66%2C8.36"
                        className="w-full h-full border-0"
                        loading="lazy"
                        title={`Standort ${company.address.city}`}
                      />
                    </div>
                    <div className="bg-steel-50 px-4 py-3 flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4 text-steel-400" />
                      <span className="text-steel-600 text-sm font-medium">
                        {company.address.zip} {company.address.city}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
