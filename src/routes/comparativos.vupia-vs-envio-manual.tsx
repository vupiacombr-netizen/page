import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/comparativos/vupia-vs-envio-manual",
  eyebrow: "Comparativo",
  h1: "Vupia x envio manual: quanto tempo você economiza com automação",
  quickAnswer: "No envio manual você procura ofertas, gera cada link de afiliado, monta a mensagem e envia grupo por grupo. Com a Vupia, as ofertas chegam prontas com seu link e são enviadas automaticamente, 24 horas por dia.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Comparativo" }],
  sections: [
    { heading: "Envio manual", body: ["O que o divulgador faz sozinho:"], list: ["Procurar ofertas em várias lojas.", "Gerar link de afiliado um por um.", "Formatar a mensagem.", "Enviar em cada grupo, várias vezes ao dia."] },
    { heading: "Com a Vupia", body: ["O que a plataforma faz por você:"], list: ["Monitora as lojas em tempo real.", "Converte os links automaticamente.", "Formata e programa os envios.", "Distribui em todos os grupos, mesmo de madrugada."] },
  ],
  faq: [{ q: "A automação substitui a curadoria?", a: "Não. Você continua escolhendo o que faz sentido para seu público; a Vupia elimina o trabalho repetitivo." }],
  related: [
    { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
    { label: "Guias", href: "/guias" },
  ],
};

export const Route = createFileRoute("/comparativos/vupia-vs-envio-manual")({
  head: () => ({
    meta: [
      { title: "Vupia x Envio Manual de Achadinhos: Comparativo | Vupia" },
      { name: "description", content: config.quickAnswer.slice(0, 158) },
      { property: "og:title", content: "Vupia x envio manual de achadinhos" },
      { property: "og:description", content: "Compare o trabalho manual com a automação da Vupia." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical(config.path)],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Comparativo" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: config.path, title: config.h1, description: config.quickAnswer })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
