import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, softwareAppSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/ferramenta-para-achadinhos",
  eyebrow: "Ferramenta para achadinhos",
  h1: "Uma ferramenta para organizar e automatizar seus achadinhos",
  quickAnswer:
    "A Vupia é uma ferramenta para achadinhos que encontra ofertas dos principais marketplaces, organiza sua curadoria, converte links em links de afiliado e automatiza o envio para seus grupos de WhatsApp — tudo em um só lugar.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Ferramenta para achadinhos" }],
  sections: [
    {
      heading: "Por que você precisa de uma ferramenta para achadinhos",
      body: [
        "Quem divulga achadinhos manualmente conhece a rotina: abrir várias abas, caçar ofertas, copiar links, gerar link de afiliado, formatar mensagem e colar em cada grupo. Com poucas ofertas por dia funciona; com dezenas, vira um emprego em tempo integral.",
        "Uma ferramenta para achadinhos transforma esse processo em um fluxo único: encontrar, organizar, programar e enviar.",
      ],
    },
    {
      heading: "O que a Vupia faz por você",
      body: ["A Vupia reúne em uma única plataforma tudo o que o divulgador de achadinhos precisa:"],
      list: [
        "Monitoramento de ofertas em tempo real nas lojas conectadas.",
        "Curadoria: salve e organize as ofertas que combinam com cada público.",
        "Links de afiliado gerados automaticamente a partir do link do produto.",
        "Envio programado para vários grupos de uma vez.",
        "Mensagens personalizadas com o formato que você definir.",
        "Métricas de cliques, pedidos e comissões.",
      ],
    },
    {
      heading: "Lojas integradas",
      body: [
        "Shopee, Amazon, Mercado Livre, SHEIN e Magalu — com novas lojas sendo integradas constantemente. Você encontra ofertas de todas elas no mesmo painel.",
      ],
    },
    {
      heading: "Para quem é",
      body: [
        "Afiliados de marketplace, donos de grupos de achadinhos no WhatsApp ou Telegram e criadores de conteúdo que compartilham ofertas com sua audiência e querem escalar sem contratar equipe.",
      ],
    },
  ],
  faq: [
    {
      q: "A Vupia é um aplicativo para achadinhos?",
      a: "A Vupia é uma plataforma web para achadinhos: você acessa pelo navegador, conecta seus canais e gerencia toda a operação de divulgação em um só lugar.",
    },
    {
      q: "A ferramenta funciona com a Shopee?",
      a: "Sim. A Vupia é integrada à Shopee, Amazon, Mercado Livre, SHEIN e Magalu, e converte os links dos produtos em links com a sua identificação de afiliado.",
    },
    {
      q: "Quanto custa?",
      a: "O acesso à Vupia é por 12 meses, com todos os recursos liberados e atualizações inclusas. Veja as condições atuais na página inicial.",
    },
  ],
  related: [
    { label: "Achadinhos", href: "/achadinhos" },
    { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
    { label: "WhatsApp para afiliados", href: "/funcionalidades/whatsapp-para-afiliados" },
    { label: "Como funciona", href: "/como-funciona" },
  ],
};

export const Route = createFileRoute("/ferramenta-para-achadinhos")({
  head: () => ({
    meta: [
      { title: "Ferramenta para Achadinhos e Afiliados | Vupia" },
      { name: "description", content: "Ferramenta para achadinhos: encontre ofertas, organize sua curadoria e automatize envios para grupos de WhatsApp com links de afiliado. Shopee, SHEIN, Mercado Livre e mais." },
      { property: "og:title", content: "Ferramenta para Achadinhos e Afiliados | Vupia" },
      { property: "og:description", content: "Encontre, organize e automatize seus achadinhos em um só lugar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/ferramenta-para-achadinhos")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Ferramenta para achadinhos" }])) },
      { type: "application/ld+json", children: JSON.stringify(softwareAppSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
