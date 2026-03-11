import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/lib/config";
import { ArrowRightIcon, MailIcon } from "@/components/Icons";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/50 to-forest-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Häufige Fragen
          </h1>
          <p className="text-forest-200 text-lg max-w-2xl mx-auto">
            Antworten auf die wichtigsten Fragen rund um den GroMM Einzelschützer.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-earth-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-forest-50 border border-forest-100 p-8 sm:p-12">
            <div className="w-14 h-14 rounded-full bg-forest-100 text-forest-600 flex items-center justify-center mx-auto mb-6">
              <MailIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ihre Frage ist nicht dabei?
            </h2>
            <p className="text-slate-600 text-lg mb-8 max-w-lg mx-auto">
              Schreiben Sie uns — wir beraten Sie gerne persönlich und beantworten alle offenen Fragen.
            </p>
            <Link href="/kontakt" className="btn-primary text-base">
              Kontakt aufnehmen
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
