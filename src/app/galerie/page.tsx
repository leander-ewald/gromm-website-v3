import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/config";
import { ArrowRightIcon } from "@/components/Icons";
import { ScrollReveal, StaggerReveal } from "@/components/ScrollReveal";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { ForestDivider } from "@/components/ForestDivider";

export const metadata: Metadata = {
  title: "Galerie",
};

const galleryItems = [
  { label: "Produktfoto folgt", sublabel: "VS1200S2 Frontansicht", bg: "bg-steel-50" },
  { label: "Einsatzfoto folgt", sublabel: "VS1200S2 im Revier", bg: "bg-steel-100" },
  { label: "Produktfoto folgt", sublabel: "VS1700S2 Frontansicht", bg: "bg-steel-50" },
  { label: "Einsatzfoto folgt", sublabel: "VS1700S2 im Revier", bg: "bg-steel-100" },
  { label: "Detailaufnahme folgt", sublabel: "Montage & Scherdorne", bg: "bg-steel-50" },
  { label: "CGI-Rendering folgt", sublabel: "Materialbeschaffenheit", bg: "bg-steel-100" },
];

export default function GaleriePage() {
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

        {/* Floating leaves */}
        <FloatingLeaves count={3} variant="dark" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="accent-line mb-6" />
              <p className="section-label text-steel-300 mb-4">
                Medien
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Galerie<span className="text-forest-400">.</span>
              </h1>
              <p className="text-steel-200 text-lg max-w-2xl leading-relaxed">
                Produktfotos, Detailaufnahmen und Einsatzbilder des {company.name} Einzelschützers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gallery Grid — Coming Soon */}
      <section className="section-padding bg-white steel-pattern">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="accent-line mb-6" />
              <p className="section-label text-forest-600 mb-3">
                Produktbilder
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Unsere Schützer in Aktion
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Professionelle Produktfotos und CGI-Renderings sind in Produktion.
              </p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.08}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className={`rounded-xl aspect-[4/3] ${item.bg} border border-steel-200 flex flex-col items-center justify-center p-6 group hover:border-steel-300 hover:shadow-lg transition-all duration-300`}
              >
                {/* Camera/Image icon */}
                <div className="w-14 h-14 rounded-lg bg-steel-200/60 text-steel-400 flex items-center justify-center mb-5 group-hover:bg-steel-200 group-hover:text-steel-500 transition-colors">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
                    <circle cx="12" cy="13" r="4" />
                  </svg>
                </div>
                <p className="text-steel-600 text-sm font-heading font-semibold uppercase tracking-wider text-center mb-1">
                  {item.label}
                </p>
                <p className="text-steel-400 text-xs text-center">
                  {item.sublabel}
                </p>
              </div>
            ))}
          </StaggerReveal>

          {/* Coming soon note */}
          <ScrollReveal delay={0.3}>
            <div className="mt-10 flex items-center gap-3 justify-center rounded-lg bg-steel-50 border border-steel-100 px-6 py-4 max-w-xl mx-auto">
              <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0" />
              <p className="text-steel-600 text-sm">
                <span className="font-semibold">In Produktion:</span> Professionelle Produktfotos und CGI-Renderings werden derzeit erstellt und hier veröffentlicht.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ForestDivider variant="subtle" />

      {/* Video Section */}
      <section className="section-padding bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="accent-line mb-6" />
              <p className="section-label text-steel-600 mb-3">
                Video
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Montageanleitung
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Sehen Sie, wie einfach der GroMM aufgebaut wird — ganz ohne Werkzeuge.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={0.1}>
            <div className="rounded-xl aspect-video bg-gradient-to-br from-steel-700 to-steel-800 flex items-center justify-center max-w-4xl border border-steel-600/30">
              <div className="text-center px-6">
                <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-4 hover:bg-white/15 transition-colors">
                  <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-steel-200 text-lg font-heading font-semibold uppercase tracking-wider mb-2">
                  Video folgt
                </p>
                <p className="text-steel-400 text-sm">
                  Montagevideo wird demnächst hier eingebettet.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ForestDivider variant="bold" />

      {/* CTA */}
      <section className="relative section-padding bg-forest-900 overflow-hidden">
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

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="accent-line mx-auto mb-6" />
            <p className="section-label text-forest-400 mb-3">
              Interesse geweckt?
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Mehr erfahren?
            </h2>
            <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Kontaktieren Sie uns für weitere Informationen, Detailbilder oder eine persönliche Beratung.
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
    </>
  );
}
