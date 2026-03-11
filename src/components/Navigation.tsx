"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/config";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setScrolled(current > 20);
      if (current > lastScroll && current > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScroll(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScroll]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden && !isOpen ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <nav
        className={`transition-all duration-300 ${
          scrolled || isOpen
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-forest-100"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <Image
                src="/images/gromm-logo.jpeg"
                alt="GroMM GmbH Logo"
                width={160}
                height={50}
                className="h-10 w-auto sm:h-12"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors min-h-[44px] flex items-center ${
                    pathname === item.href
                      ? "text-forest-700 bg-forest-50"
                      : scrolled
                        ? "text-slate-700 hover:text-forest-700 hover:bg-forest-50"
                        : "text-slate-700 hover:text-forest-700 hover:bg-forest-50/80"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/kontakt" className="btn-primary ml-3 text-sm !py-2 !px-5">
                Anfrage stellen
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-md"
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
                    isOpen ? "top-2.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 w-6 h-0.5 bg-slate-800 transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-slate-800 transition-all duration-300 ${
                    isOpen ? "top-2.5 -rotate-45" : "top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white border-t border-forest-100 px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg min-h-[48px] flex items-center ${
                  pathname === item.href
                    ? "text-forest-700 bg-forest-50"
                    : "text-slate-700 hover:bg-forest-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                href="/kontakt"
                className="btn-primary w-full text-center"
              >
                Anfrage stellen
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
