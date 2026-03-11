// Single Source of Truth — Alle Geschaeftsdaten zentral
export const company = {
  name: "GroMM GmbH",
  slogan: "Einfach. Wirtschaftlich. Nachhaltig.",
  claim: "Der nachhaltigste und beste Einzelschützer",
  description:
    "Patentierter Einzelschützer für Forst- und Kulturpflanzen gegen Wildschäden aus feuerverzinktem Stahl.",
  address: {
    street: "Oberlemperstraße 1",
    zip: "35630",
    city: "Ehringshausen",
    country: "Deutschland",
  },
  ceo: "Thomas Groos",
  email: "info@gromm-gmbh.de",
  contactEmail: "mario@bildat.com",
  registry: "Amtsgericht Wetzlar, HRB 8229",
  taxId: "020 234 82243",
  vatId: "DE340697091",
  iban: "DE10 5155 0035 0002 1213 41",
  website: "https://gromm-gmbh.de",
} as const;

export const team = [
  {
    name: "Thomas Groos",
    role: "Geschäftsführer",
    description:
      "Forstwirt mit über 20 Jahren Erfahrung in der Forstwirtschaft. Entwickler des patentierten GroMM-Einzelschützers.",
  },
  {
    name: "Michael Müller",
    role: "Einkauf & Technik",
    description:
      "Maschinenbautechniker. Verantwortlich für Produktentwicklung, Qualitätssicherung und technische Beratung.",
  },
] as const;

export const products = {
  vs1200: {
    model: "VS1200S2",
    name: "GroMM VS1200S2",
    height: "1.200 mm",
    target: "Rehwild",
    material: "Feuerverzinkter Stahl",
    description:
      "Entwickelt für den zuverlässigen Schutz von Kulturpflanzen gegen Verbiss- und Fegeschäden durch Rehwild. Kompakte Bauweise, ideal für Mischpflanzungen.",
    features: [
      "Optimale Höhe für Rehwild-Schutz",
      "Kompakte, leichte Bauweise",
      "Ideal für Mischpflanzungen",
      "Ergonomisches Ausbringen ohne Werkzeuge",
    ],
  },
  vs1700: {
    model: "VS1700S2",
    name: "GroMM VS1700S2",
    height: "1.700 mm",
    target: "Rotwild",
    material: "Feuerverzinkter Stahl",
    description:
      "Entwickelt für den zuverlässigen Schutz von Kulturpflanzen gegen Verbiss- und Fegeschäden durch Rotwild. Robuste Konstruktion für größere Bäume.",
    features: [
      "Erhöhter Schutz gegen Rotwild",
      "Robuste, langlebige Konstruktion",
      "Für größere Bäume geeignet",
      "Ergonomisches Ausbringen ohne Werkzeuge",
    ],
  },
} as const;

export const pricing = {
  vs1200: [
    {
      label: "Promopack",
      quantity: 5,
      weight: "18 kg",
      shipping: "1 Päckchen",
      shippingCost: "20 €",
      priceNet: 49.8,
      totalNet: 249.0,
      totalGross: 296.31,
      priceGross: 59.26,
    },
    {
      label: "S",
      quantity: 50,
      weight: "180 kg",
      shipping: "½ Palette",
      shippingCost: "100 €",
      priceNet: 44.95,
      totalNet: 2247.5,
      totalGross: 2674.53,
      priceGross: 53.49,
    },
    {
      label: "M",
      quantity: 100,
      weight: "360 kg",
      shipping: "½ Palette",
      shippingCost: "100 €",
      priceNet: 39.95,
      totalNet: 3995.0,
      totalGross: 4754.05,
      priceGross: 47.54,
    },
    {
      label: "L",
      quantity: 300,
      weight: "1.080 kg",
      shipping: "1 Palette",
      shippingCost: "120 €",
      priceNet: 35.95,
      totalNet: 10785.0,
      totalGross: 12834.15,
      priceGross: 42.78,
    },
    {
      label: "XL",
      quantity: 500,
      weight: "1.800 kg",
      shipping: "2 Paletten",
      shippingCost: "190 €",
      priceNet: 32.95,
      totalNet: 16475.0,
      totalGross: 19605.25,
      priceGross: 39.21,
    },
    {
      label: "XXL",
      quantity: 1000,
      weight: "3.600 kg",
      shipping: "10 Paletten",
      shippingCost: "700 €",
      priceNet: 27.5,
      totalNet: 27500.0,
      totalGross: 32725.0,
      priceGross: 32.73,
    },
  ],
} as const;

export const navigation = [
  { label: "Start", href: "/" },
  { label: "Produkte", href: "/produkte" },
  { label: "Shop", href: "/shop" },
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Galerie", href: "/galerie" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
] as const;

export const benefits = [
  {
    title: "Sekundenschnell",
    description:
      "Ergonomisches Ausbringen ohne Werkzeuge — nach einmaliger Montage erfolgt das Ausbringen und Abbauen in wenigen Sekunden.",
    icon: "timer",
  },
  {
    title: "Einziger Mehrweg-Schützer",
    description:
      "Der einzige wiederverwendbare Einzelschützer am Markt. Nach dem ersten Einsatz wirtschaftlich neutral.",
    icon: "recycle",
  },
  {
    title: "Minimaler Pflegeaufwand",
    description:
      "Störender Begleitwuchs ist direkt sichtbar und ohne Aufwand zu entfernen. Kaum Nachpflege nötig.",
    icon: "eye",
  },
  {
    title: "Kein Mikroplastik",
    description:
      "Aus feuerverzinktem Stahl — keine Quelle von Mikroplastik. Erfüllt kommende EU-Regularien.",
    icon: "ban",
  },
  {
    title: "PEFC-zertifiziert",
    description:
      "Erfüllt aktuelle Anforderungen der PEFC-Zertifizierung für nachhaltige Forstwirtschaft.",
    icon: "award",
  },
  {
    title: "Patentiert",
    description:
      "Patentierter Einzelschützer mit einzigartiger Konstruktion. 2014 angemeldet, 2020 erteilt.",
    icon: "shield",
  },
  {
    title: "Über 20 Jahre Lebensdauer",
    description:
      "Feuerverzinkter Stahl garantiert eine Lebensdauer von über 20 Jahren. 100% recyclebar.",
    icon: "clock",
  },
  {
    title: "Kein Mikroklima",
    description:
      "Offene Konstruktion verhindert schädliches Mikroklima. Kein Wespen- oder Mäusebefall.",
    icon: "wind",
  },
] as const;

export const faqItems = [
  {
    question: "Wie funktioniert der GroMM Einzelschützer?",
    answer:
      "Der GroMM Einzelschützer wird um die zu schützende Pflanze herum aufgestellt. Die optimal dimensionierten Scherdorne verhindern, dass Reh- und Rotwild beim Äsen die Terminalknospe abbeißen können, während Licht und Luft ungehindert zur Pflanze gelangen.",
  },
  {
    question: "Brauche ich Werkzeuge für die Montage?",
    answer:
      "Nein. Nach der einmaligen Erstmontage der Komponenten erfolgt das Ausbringen im Wald und das spätere Abbauen komplett ohne Werkzeuge in wenigen Sekunden.",
  },
  {
    question: "Wie oft kann der Schützer wiederverwendet werden?",
    answer:
      "Der GroMM ist der einzige Mehrweg-Einzelschützer am Markt. Dank feuerverzinktem Stahl hat er eine Lebensdauer von über 20 Jahren und kann beliebig oft wiederverwendet werden. Bereits nach dem ersten Einsatz ist die Kostenneutralität gegenüber herkömmlichen Einzelschutz-Verfahren erreicht.",
  },
  {
    question: "Was unterscheidet VS1200S2 und VS1700S2?",
    answer:
      "Der VS1200S2 (1.200 mm Höhe) ist für den Schutz gegen Rehwild konzipiert. Der VS1700S2 (1.700 mm Höhe) bietet erhöhten Schutz gegen Rotwild und eignet sich für größere Bäume und Pflanzen.",
  },
  {
    question: "Gibt es Mengenrabatte?",
    answer:
      "Ja, die Stückpreise sinken mit zunehmender Bestellmenge erheblich. Unser VS1200S2 beginnt bei 49,80 € netto/Stück (Promopack, 5 Stück) und sinkt auf 27,50 € netto/Stück bei 1.000 Stück. Ab 300 Stück ist auch eine Lieferung als Schüttgut möglich — der Einzelpreis reduziert sich dann um weitere 3 €.",
  },
  {
    question: "Wie wird der Versand abgewickelt?",
    answer:
      "Der Versand erfolgt je nach Bestellmenge als Päckchen, auf halben oder ganzen Paletten. Die Versandkosten sind nach Paketgröße gestaffelt. Bei größeren Projekten erstellen wir gerne ein individuelles Angebot.",
  },
  {
    question: "Ist der GroMM umweltfreundlich?",
    answer:
      "Absolut. Der GroMM besteht aus feuerverzinktem Stahl und ist zu 100% recyclebar. Er enthält kein Plastik und erzeugt kein Mikroplastik. Die offene Konstruktion verhindert schädliches Mikroklima und ermöglicht optimale Wachstumsbedingungen. Er erfüllt die Anforderungen der PEFC-Zertifizierung.",
  },
  {
    question: "Kann ich den GroMM testen bevor ich große Mengen bestelle?",
    answer:
      "Ja, genau dafür bieten wir das Promopack mit 5 Stück an. So können Sie den GroMM in Ihrem Revier unter realen Bedingungen testen.",
  },
] as const;
