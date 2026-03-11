import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/config";
import { MailIcon, MapPinIcon } from "@/components/Icons";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/50 to-forest-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Kontakt
          </h1>
          <p className="text-forest-200 text-lg max-w-2xl mx-auto">
            Haben Sie Fragen zum GroMM oder möchten ein individuelles Angebot? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — left column (wider) */}
            <div className="lg:col-span-3 relative">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                Schreiben Sie uns
              </h2>
              <p className="text-slate-600 mb-8">
                Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
              </p>
              <ContactForm />
            </div>

            {/* Info — right column */}
            <div className="lg:col-span-2">
              <div className="space-y-8 lg:sticky lg:top-32">
                {/* Address */}
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center">
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

                {/* Email */}
                <div className="rounded-xl bg-earth-50 border border-earth-200 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-forest-100 text-forest-600 flex items-center justify-center">
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

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden border border-earth-200">
                  <div className="aspect-[4/3] bg-gradient-to-br from-forest-100 to-earth-100 flex items-center justify-center">
                    <div className="text-center px-4">
                      <MapPinIcon className="w-8 h-8 text-forest-400 mx-auto mb-3" />
                      <p className="text-slate-500 text-sm font-medium">
                        {company.address.zip} {company.address.city}
                      </p>
                      <p className="text-slate-400 text-xs mt-1">
                        Kartenansicht wird geladen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
