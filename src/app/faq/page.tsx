import type { Metadata } from "next";
import Link from "next/link";
import { faqItems } from "@/lib/config";
import { ArrowRightIcon, MailIcon } from "@/components/Icons";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
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
                Wissen
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Häufige<br />
                <span className="text-forest-400">Fragen.</span>
              </h1>
              <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
                Antworten auf die wichtigsten Fragen rund um den GroMM Einzelschützer.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding bg-earth-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12">
              <div className="accent-line mb-6" />
              <p className="section-label text-forest-600 mb-3">
                {faqItems.length} Antworten
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Alles Wichtige auf einen Blick
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Von Montage bis Materialeigenschaften — hier finden Sie die Antworten.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <FaqAccordion items={faqItems} />
          </ScrollReveal>
        </div>
      </section>

      {/* "Noch Fragen?" Industrial Banner */}
      <section className="relative section-padding bg-forest-950 overflow-hidden">
        {/* Industrial diagonal pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(255,255,255,0.3) 60px, rgba(255,255,255,0.3) 61px)",
          }}
        />
        {/* Accent stripe at top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-accent-500" />

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-steel-400 mb-4">
              Nicht fündig geworden?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Noch Fragen?
            </h2>
            <p className="text-forest-200 text-lg mb-4 max-w-lg mx-auto leading-relaxed">
              Schreiben Sie uns — wir beraten Sie gerne persönlich und beantworten alle offenen Fragen.
            </p>

            {/* Industrial divider */}
            <div className="flex items-center justify-center gap-3 my-8">
              <div className="h-px w-12 bg-forest-700" />
              <div className="w-10 h-10 rounded border border-forest-700 text-forest-400 flex items-center justify-center">
                <MailIcon className="w-5 h-5" />
              </div>
              <div className="h-px w-12 bg-forest-700" />
            </div>

            <Link href="/kontakt" className="btn-primary text-base">
              Kontakt aufnehmen
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
