export const SITE_URL = "https://vupia.com.br";

export const SITE_DESCRIPTION =
  "A Vupia é uma plataforma para afiliados e criadores de conteúdo encontrarem, organizarem, programarem e automatizarem a divulgação de ofertas, cupons e achadinhos de marketplaces em seus canais e grupos.";

export function canonical(path: string) {
  return { rel: "canonical", href: `${SITE_URL}${path}` };
}

export function breadcrumbSchema(items: Array<{ label: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.path ? { item: `${SITE_URL}${item.path}` } : {}),
    })),
  };
}

export function articleSchema(opts: { path: string; title: string; description: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    author: { "@type": "Organization", name: "Vupia", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Vupia", url: SITE_URL },
  };
}

export function faqSchema(faq: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vupia",
    url: SITE_URL,
    description: SITE_DESCRIPTION,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vupia",
    url: SITE_URL,
  };
}

export function softwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vupia",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  };
}
