import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, organizationSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/sobre",
  eyebrow: "Sobre",
  h1: "Sobre a Vupia",
  quickAnswer:
    "A Vupia é uma plataforma brasileira para afiliados e criadores de conteúdo encontrarem, organizarem, programarem e automatizarem a divulgação de ofertas, cupons e achadinhos de marketplaces em seus canais e grupos.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Sobre" }],
  sections: [
    {
      heading: "Quem somos",
      body: [
        "A Vupia nasceu para resolver um problema que todo divulgador de ofertas conhece: o trabalho manual de encontrar, copiar, formatar e enviar promoções todos os dias, em vários grupos. Transformamos essa rotina em um fluxo automatizado, simples e acessível.",
      ],
    },
    {
      heading: "O que fazemos",
      body: [
        "Monitoramos ofertas dos principais marketplaces do Brasil — Shopee, Amazon, Mercado Livre, SHEIN e Magalu — e colocamos tudo em um único painel: curadoria, links de afiliado, programação de envios, distribuição automática nos grupos e métricas de resultado.",
      ],
    },
    {
      heading: "Para quem",
      body: [
        "Afiliados de marketplace, donos de grupos de achadinhos no WhatsApp e Telegram, e criadores de conteúdo que compartilham ofertas com sua audiência e querem escalar a operação sem perder qualidade.",
      ],
    },
    {
      heading: "Nossa missão",
      body: [
        "Dar a qualquer pessoa a capacidade de viver de divulgação de ofertas com uma operação profissional — sem precisar de equipe, sem processos manuais e sem perder o dia copiando e colando links.",
      ],
    },
    {
      heading: "Contato e redes oficiais",
      body: [
        "Fale com o time da Vupia pelo WhatsApp, disponível na página inicial, e acompanhe as novidades pelo nosso Instagram oficial. Os links estão no rodapé do site.",
      ],
    },
  ],
  faq: [
    {
      q: "A Vupia é uma empresa brasileira?",
      a: "Sim. A Vupia é uma plataforma brasileira, feita para o mercado de afiliados e achadinhos do Brasil, com suporte em português via WhatsApp.",
    },
    {
      q: "Como falo com o time da Vupia?",
      a: "Pelo WhatsApp oficial, disponível na página inicial do site, ou pelo Instagram. Nosso time responde dúvidas sobre a plataforma, planos e parcerias.",
    },
  ],
  related: [
    { label: "Como funciona", href: "/como-funciona" },
    { label: "Programa de Afiliados", href: "/programa-de-afiliados" },
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    { label: "Achadinhos", href: "/achadinhos" },
  ],
};

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre a Vupia | Plataforma para Afiliados e Achadinhos" },
      { name: "description", content: "Conheça a Vupia: plataforma brasileira que automatiza a divulgação de ofertas e achadinhos de marketplaces em grupos de WhatsApp para afiliados e criadores." },
      { property: "og:title", content: "Sobre a Vupia" },
      { property: "og:description", content: "Plataforma brasileira que automatiza a divulgação de ofertas e achadinhos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/sobre")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Sobre" }])) },
      { type: "application/ld+json", children: JSON.stringify(organizationSchema()) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
