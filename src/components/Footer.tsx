import Link from "next/link";
import Image from "next/image";
import { company, navigation, footerLinks } from "@/lib/config";

export function Footer() {
  return (
    <footer
      className="bg-forest-950 text-white"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/gromm-logo.jpeg"
              alt="GroMM GmbH Logo"
              width={160}
              height={50}
              className="h-12 w-auto brightness-0 invert mb-4"
            />
            <p className="text-forest-300 text-sm leading-relaxed">
              {company.slogan}
              <br />
              {company.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-forest-200 hover:text-white transition-colors text-sm min-h-[44px] inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest-400 mb-4">
              Kontakt
            </h3>
            <address className="text-forest-200 text-sm not-italic space-y-3">
              <p>
                {company.name}
                <br />
                {company.address.street}
                <br />
                {company.address.zip} {company.address.city}
              </p>
              <p>
                <a
                  href={`mailto:${company.email}`}
                  className="hover:text-white transition-colors"
                >
                  {company.email}
                </a>
              </p>
            </address>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-forest-400 mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-forest-200 hover:text-white transition-colors text-sm min-h-[44px] inline-flex items-center"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-forest-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-forest-400 text-xs">
            &copy; {new Date().getFullYear()} {company.name}. Alle Rechte
            vorbehalten.
          </p>
          <p className="text-forest-500 text-xs">
            Geschäftsführer: {company.ceo}
          </p>
        </div>
      </div>
    </footer>
  );
}
