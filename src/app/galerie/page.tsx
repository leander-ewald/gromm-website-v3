import type { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/config";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Galerie",
};

const galleryItems = [
  { label: "VS1200S2 Nahaufnahme", from: "from-forest-700", to: "to-forest-900" },
  { label: "VS1200S2 im Einsatz", from: "from-forest-600", to: "to-forest-800" },
  { label: "VS1700S2 Nahaufnahme", from: "from-forest-800", to: "to-forest-950" },
  { label: "VS1700S2 im Einsatz", from: "from-forest-500", to: "to-forest-700" },
  { label: "Montage-Detail", from: "from-earth-400", to: "to-earth-800" },
  { label: "Materialbeschaffenheit", from: "from-forest-600", to: "to-earth-600" },
];

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-forest-950 pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/50 to-forest-950" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Galerie
          </h1>
          <p className="text-forest-200 text-lg max-w-2xl mx-auto">
            Produktfotos, Detailaufnahmen und Einsatzbilder des {company.name} Einzelschützers.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Produktbilder
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Unsere Schützer in Aktion
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Weitere Produktfotos und CGI-Renderings folgen in Kürze.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl aspect-[4/3] bg-gradient-to-br ${item.from} ${item.to} flex items-center justify-center p-6`}
              >
                <p className="text-white text-lg sm:text-xl font-semibold text-center drop-shadow-md">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-earth-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-forest-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Video
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Montageanleitung
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Sehen Sie, wie einfach der GroMM aufgebaut wird — ganz ohne Werkzeuge.
            </p>
          </div>

          <div className="rounded-xl aspect-video bg-gradient-to-br from-forest-800 to-forest-950 flex items-center justify-center max-w-4xl">
            <div className="text-center px-6">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-forest-200 text-lg font-medium">
                Montagevideo wird demnächst hier eingebettet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-forest-800">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Mehr erfahren?
          </h2>
          <p className="text-forest-200 text-lg mb-10 max-w-2xl mx-auto">
            Kontaktieren Sie uns für weitere Informationen, Detailbilder oder eine persönliche Beratung.
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
    </>
  );
}
