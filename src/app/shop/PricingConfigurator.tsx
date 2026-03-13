"use client";

import { useState } from "react";
import Link from "next/link";
import { pricing, products, company } from "@/lib/config";
import { ArrowRightIcon, CheckIcon, MailIcon } from "@/components/Icons";

function formatPrice(value: number): string {
  const [whole, decimal] = value.toFixed(2).split(".");
  const formatted = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return `${formatted},${decimal} €`;
}

const tiers = pricing.vs1200;
const maxPrice = tiers[0].priceNet;

export function PricingConfigurator() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selected = selectedIndex !== null ? tiers[selectedIndex] : null;

  // Calculate savings vs Promopack price for a given tier
  function getSavingsPercent(tierPriceNet: number): number {
    return Math.round(((maxPrice - tierPriceNet) / maxPrice) * 100);
  }

  return (
    <div>
      {/* ── Desktop Table ── */}
      <div className="hidden md:block mb-8">
        {/* Product header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-lg bg-forest-950 text-white flex items-center justify-center font-heading font-bold text-xl uppercase tracking-wider">
            12
          </div>
          <div>
            <h3 className="text-2xl font-heading font-bold uppercase tracking-wide">
              {products.vs1200.name}
            </h3>
            <p className="text-steel-500 font-heading text-sm uppercase tracking-wider">
              {products.vs1200.height} — Schutz gegen {products.vs1200.target}
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-steel-200">
          <table className="w-full">
            <thead>
              <tr className="bg-forest-950">
                <th className="px-6 py-4 text-left text-sm font-heading font-semibold uppercase tracking-wider text-steel-300">
                  Paket
                </th>
                <th className="px-6 py-4 text-right text-sm font-heading font-semibold uppercase tracking-wider text-steel-300">
                  Menge
                </th>
                <th className="px-6 py-4 text-right text-sm font-heading font-semibold uppercase tracking-wider text-steel-300">
                  Netto / Stk.
                </th>
                <th className="px-6 py-4 text-right text-sm font-heading font-semibold uppercase tracking-wider text-steel-300">
                  Netto Gesamt
                </th>
                <th className="px-6 py-4 text-right text-sm font-heading font-semibold uppercase tracking-wider text-steel-300">
                  Brutto Gesamt
                </th>
                <th className="px-6 py-4 text-right text-sm font-heading font-semibold uppercase tracking-wider text-steel-300">
                  Ersparnis
                </th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier, i) => {
                const isXXL = tier.label === "XXL";
                const isSelected = selectedIndex === i;
                const savings = getSavingsPercent(tier.priceNet);

                return (
                  <tr
                    key={tier.label}
                    onClick={() => setSelectedIndex(i)}
                    className={`
                      border-t cursor-pointer transition-all duration-200
                      ${isXXL && !isSelected
                        ? "bg-forest-50 border-forest-200"
                        : isSelected
                          ? "bg-forest-100 border-forest-300"
                          : i % 2 === 0
                            ? "bg-white border-steel-100"
                            : "bg-steel-50/50 border-steel-100"
                      }
                      ${isSelected ? "ring-2 ring-inset ring-forest-500" : "hover:bg-forest-50/60"}
                    `}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        {/* Radio indicator */}
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? "border-forest-600 bg-forest-600"
                              : "border-steel-300 bg-white"
                          }`}
                        >
                          {isSelected && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className={`font-heading font-bold text-base uppercase tracking-wider ${isXXL ? "text-forest-700" : "text-slate-800"}`}>
                          {tier.label}
                        </span>
                        {isXXL && (
                          <span className="px-2.5 py-1 rounded bg-accent-500 text-white text-xs font-heading font-bold uppercase tracking-wider">
                            Bester Preis
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600 font-medium">
                      {tier.quantity.toLocaleString("de-DE")} Stk.
                    </td>
                    <td className={`px-6 py-4 text-right font-heading font-bold text-base ${isXXL ? "text-forest-700" : "text-slate-800"}`}>
                      {formatPrice(tier.priceNet)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600">
                      {formatPrice(tier.totalNet)}
                    </td>
                    <td className="px-6 py-4 text-right text-slate-600">
                      {formatPrice(tier.totalGross)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      {savings > 0 ? (
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-heading font-bold uppercase tracking-wider ${
                          isXXL
                            ? "bg-accent-500 text-white"
                            : "bg-forest-100 text-forest-700"
                        }`}>
                          -{savings}%
                        </span>
                      ) : (
                        <span className="text-steel-300 text-sm">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Mobile Cards ── */}
      <div className="md:hidden mb-8">
        {/* Product header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-lg bg-forest-950 text-white flex items-center justify-center font-heading font-bold text-lg uppercase tracking-wider">
            12
          </div>
          <div>
            <h3 className="text-xl font-heading font-bold uppercase tracking-wide">
              {products.vs1200.name}
            </h3>
            <p className="text-steel-500 text-sm">
              {products.vs1200.height} — {products.vs1200.target}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {tiers.map((tier, i) => {
            const isXXL = tier.label === "XXL";
            const isSelected = selectedIndex === i;
            const savings = getSavingsPercent(tier.priceNet);

            return (
              <button
                key={tier.label}
                type="button"
                onClick={() => setSelectedIndex(i)}
                className={`
                  w-full text-left rounded-lg border p-5 transition-all duration-200
                  ${isXXL && !isSelected
                    ? "border-forest-300 bg-forest-50"
                    : isSelected
                      ? "border-forest-500 bg-forest-50 ring-2 ring-forest-500"
                      : "border-steel-100 bg-white"
                  }
                `}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {/* Radio indicator */}
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "border-forest-600 bg-forest-600"
                          : "border-steel-300 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="font-heading font-bold text-lg uppercase tracking-wider">
                      {tier.label}
                    </span>
                    {isXXL && (
                      <span className="px-2 py-0.5 rounded bg-accent-500 text-white text-xs font-heading font-bold uppercase tracking-wider">
                        Bester Preis
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {savings > 0 && (
                      <span className={`px-2 py-0.5 rounded text-xs font-heading font-bold uppercase tracking-wider ${
                        isXXL ? "bg-accent-500 text-white" : "bg-forest-100 text-forest-700"
                      }`}>
                        -{savings}%
                      </span>
                    )}
                    <span className="text-steel-500 text-sm">
                      {tier.quantity.toLocaleString("de-DE")} Stk.
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div>
                    <div className="text-steel-400 text-xs font-heading uppercase tracking-wider mb-1">
                      Netto / Stk.
                    </div>
                    <div className={`font-heading font-bold ${isXXL ? "text-forest-700" : "text-slate-800"}`}>
                      {formatPrice(tier.priceNet)}
                    </div>
                  </div>
                  <div>
                    <div className="text-steel-400 text-xs font-heading uppercase tracking-wider mb-1">
                      Netto Ges.
                    </div>
                    <div className="text-slate-600">{formatPrice(tier.totalNet)}</div>
                  </div>
                  <div>
                    <div className="text-steel-400 text-xs font-heading uppercase tracking-wider mb-1">
                      Brutto Ges.
                    </div>
                    <div className="text-slate-600">{formatPrice(tier.totalGross)}</div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Selection Summary ── */}
      <div
        className={`
          overflow-hidden transition-all duration-500 ease-out
          ${selected ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        {selected && (
          <div className="bg-forest-950 rounded-lg border border-forest-800 p-6 sm:p-8">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              {/* Left: Selection details */}
              <div className="flex-1">
                <p className="text-forest-400 font-heading text-xs uppercase tracking-[0.2em] mb-2">
                  Ihre Auswahl
                </p>
                <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-wide mb-4">
                  Paket {selected.label} — {selected.quantity.toLocaleString("de-DE")} Stück
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div>
                    <div className="text-forest-500 text-xs font-heading uppercase tracking-wider mb-1">
                      Stückpreis netto
                    </div>
                    <div className="text-white font-heading font-bold text-lg">
                      {formatPrice(selected.priceNet)}
                    </div>
                  </div>
                  <div>
                    <div className="text-forest-500 text-xs font-heading uppercase tracking-wider mb-1">
                      Gesamt netto
                    </div>
                    <div className="text-white font-heading font-bold text-lg">
                      {formatPrice(selected.totalNet)}
                    </div>
                  </div>
                  <div>
                    <div className="text-forest-500 text-xs font-heading uppercase tracking-wider mb-1">
                      Gesamt brutto
                    </div>
                    <div className="text-white font-heading font-bold text-lg">
                      {formatPrice(selected.totalGross)}
                    </div>
                  </div>
                  <div>
                    <div className="text-forest-500 text-xs font-heading uppercase tracking-wider mb-1">
                      Versand
                    </div>
                    <div className="text-white font-heading font-bold text-lg">
                      {selected.shippingCost}
                    </div>
                  </div>
                </div>

                {getSavingsPercent(selected.priceNet) > 0 && (
                  <div className="mt-4 flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-forest-400" />
                    <span className="text-forest-300 text-sm">
                      Sie sparen {getSavingsPercent(selected.priceNet)}% gegenüber dem Einzelpreis
                    </span>
                  </div>
                )}

                {selected.quantity >= 300 && (
                  <div className="mt-2 flex items-center gap-2">
                    <CheckIcon className="w-5 h-5 text-forest-400" />
                    <span className="text-forest-300 text-sm">
                      Schüttgut-Lieferung möglich — nochmal 3 € / Stk. günstiger
                    </span>
                  </div>
                )}
              </div>

              {/* Right: CTA */}
              <div className="shrink-0 flex flex-col gap-3">
                <Link
                  href={`mailto:${company.email}?subject=Bestellung%20${products.vs1200.model}%20Paket%20${selected.label}%20(${selected.quantity}%20Stk.)&body=Guten%20Tag%2C%0A%0Aich%20möchte%20gerne%20das%20Paket%20${selected.label}%20(${selected.quantity}%20Stk.)%20des%20${products.vs1200.model}%20bestellen.%0A%0AMit%20freundlichen%20Grüßen`}
                  className="btn-primary text-center whitespace-nowrap"
                >
                  <MailIcon className="w-5 h-5" />
                  Paket {selected.label} bestellen
                </Link>
                <p className="text-forest-600 text-xs text-center">
                  zzgl. {selected.shippingCost} Versand
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Prompt to select if nothing chosen */}
      {!selected && (
        <div className="text-center py-6 rounded-lg border-2 border-dashed border-steel-200 bg-steel-50/50">
          <p className="text-steel-500 font-heading text-sm uppercase tracking-wider">
            Klicken Sie auf ein Paket oben, um Ihre Auswahl zu sehen
          </p>
        </div>
      )}
    </div>
  );
}
