import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, softwareAppSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/como-funciona",
  eyebrow: "Como funciona",
  h1: "Como funciona a Vupia",
  quickAnswer:
    "A Vupia é uma plataforma para afiliados e criadores de conteúdo encontrarem, organizarem, programarem e automatizarem a divulgação de ofertas, cupons e achadinhos de marketplaces em seus canais e grupos de WhatsApp.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Como funciona" }],
  sections: [
    {
      heading: "O que é a Vupia",
      body: [
        "A Vupia é uma plataforma feita para quem vive de divulgar ofertas: afiliados, donos de grupos de achadinhos e criadores de conteúdo. Em vez de copiar, formatar e republicar cada promoção manualmente, você centraliza tudo em um só lugar.",
        "A plataforma monitora as lojas conectadas, encontra as melhores oportunidades e distribui as ofertas nos seus canais, já com o seu link de afiliado.",
      ],
    },
    {
      heading: "O fluxo completo, passo a passo",
      body: ["Do cadastro ao acompanhamento de resultados, o fluxo da Vupia foi desenhado para tirar você do trabalho repetitivo:"],
      list: [
        "1. Conecte seus canais — vincule os grupos e canais onde você divulga.",
        "2. Conecte os marketplaces — Shopee, Amazon, Mercado Livre, SHEIN e Magalu.",
        "3. Encontre ofertas — a Vupia monitora milhares de produtos em tempo real.",
        "4. Salve o que deseja divulgar — selecione as ofertas que combinam com o seu público.",
        "5. Escolha seus grupos — segmente por nicho e por público.",
        "6. Configure horários e automações — programe os envios com antecedência.",
        "7. A Vupia distribui as ofertas — os envios acontecem automaticamente, 24 horas por dia.",
        "8. Acompanhe cliques, pedidos e comissões — veja o que performa melhor e ajuste sua estratégia.",
      ],
    },
    {
      heading: "Quem usa a Vupia",
      body: [
        "Afiliados de marketplaces que querem escalar a divulgação sem passar o dia copiando links, donos de grupos de achadinhos no WhatsApp e no Telegram, e criadores que compartilham ofertas com a sua audiência.",
      ],
    },
    {
      heading: "Quais canais e marketplaces",
      body: [
        "Hoje a Vupia trabalha com grupos de WhatsApp e está conectada às principais lojas usadas por afiliados no Brasil: Shopee, Amazon, Mercado Livre, SHEIN e Magalu. Novas lojas são integradas constantemente.",
      ],
    },
    {
      heading: "Quais resultados você acompanha",
      body: [
        "Dentro da plataforma você acompanha cliques, pedidos e comissões gerados pelos seus envios, entendendo quais ofertas, horários e grupos trazem mais retorno.",
      ],
    },
  ],
  faq: [
    {
      q: "Preciso saber programar para usar a Vupia?",
      a: "Não. A Vupia foi feita para afiliados e criadores, não para desenvolvedores. Todo o fluxo é visual: você conecta seus canais, escolhe as ofertas e programa os envios em poucos cliques.",
    },
    {
      q: "A Vupia envia as ofertas automaticamente?",
      a: "Sim. Depois de configurar horários e regras, a plataforma distribui as ofertas nos seus grupos automaticamente, 24 horas por dia — mesmo quando você não está online.",
    },
    {
      q: "Com quais lojas a Vupia funciona?",
      a: "Shopee, Amazon, Mercado Livre, SHEIN e Magalu, com novas integrações sendo adicionadas constantemente.",
    },
  ],
  related: [
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
    { label: "WhatsApp para afiliados", href: "/funcionalidades/whatsapp-para-afiliados" },
    { label: "Achadinhos", href: "/achadinhos" },
  ],
};

export const Route = createFileRoute("/como-funciona")({
  head: () => ({
    meta: [
      { title: "Como Funciona a Vupia | Plataforma para Afiliados e Achadinhos" },
      { name: "description", content: "Entenda como a Vupia funciona: encontre ofertas, programe envios e automatize a divulgação nos seus grupos de WhatsApp com seus links de afiliado." },
      { property: "og:title", content: "Como Funciona a Vupia" },
      { property: "og:description", content: "Encontre ofertas, programe envios e automatize a divulgação nos seus grupos de WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/como-funciona")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Como funciona" }])) },
      { type: "application/ld+json", children: JSON.stringify(softwareAppSchema()) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
