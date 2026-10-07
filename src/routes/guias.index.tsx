import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema } from "@/lib/seo";
import { GUIAS } from "@/lib/guias";

const config: SeoPageConfig = {
  path: "/guias",
  eyebrow: "Guias",
  h1: "Guias para afiliados e divulgadores de achadinhos",
  quickAnswer: "Guias práticos para criar grupos de achadinhos, gerar links de afiliado e ganhar dinheiro divulgando ofertas de marketplaces.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Guias" }],
  sections: [{ heading: "Todos os guias", body: ["Escolha um tema para começar:"], list: GUIAS.map((g) => g.title) }],
  faq: [{ q: "Os guias são gratuitos?", a: "Sim, todo o conteúdo é aberto." }],
  related: [
    ...GUIAS.map((g) => ({ label: g.title, href: `/guias/${g.slug}` })),
    { label: "Comparativo: Vupia x envio manual", href: "/comparativos/vupia-vs-envio-manual" },
    { label: "Gerador de mensagem de oferta", href: "/ferramentas/gerador-de-mensagem" },
  ],
};

export const Route = createFileRoute("/guias/")({
  head: () => ({
    meta: [
      { title: "Guias para Afiliados e Achadinhos | Vupia" },
      { name: "description", content: config.quickAnswer },
      { property: "og:title", content: "Guias para afiliados e achadinhos" },
      { property: "og:description", content: config.quickAnswer },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/guias")],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Guias" }])) }],
  }),
  component: () => <SeoPage config={config} />,
});
