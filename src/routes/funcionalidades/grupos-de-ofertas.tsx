import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/funcionalidades/grupos-de-ofertas",
  eyebrow: "Funcionalidades",
  h1: "Organize e automatize seus grupos de ofertas",
  quickAnswer:
    "A Vupia organiza todos os seus grupos de ofertas em um único painel: você segmenta por público, programa envios e distribui ofertas e cupons automaticamente, com métricas para acompanhar o desempenho de cada grupo.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Funcionalidades" }, { label: "Grupos de ofertas" }],
  sections: [
    {
      heading: "O desafio de gerenciar grupos de ofertas",
      body: [
        "Quem administra grupos de ofertas no WhatsApp sabe: um grupo já dá trabalho; cinco ou dez grupos viram uma operação impossível de tocar manualmente. Cada grupo tem seu público, seu ritmo e suas ofertas que performam melhor.",
      ],
    },
    {
      heading: "Todos os seus grupos em um só painel",
      body: ["A Vupia centraliza a gestão dos seus grupos de ofertas:"],
      list: [
        "Visão única de todos os grupos conectados.",
        "Segmentação por nicho e por público.",
        "Envio de uma oferta para vários grupos de uma vez.",
        "Programação de horários por grupo ou por segmento.",
        "Histórico e métricas de envios por grupo.",
      ],
    },
    {
      heading: "Grupo de ofertas, grupo de promoções, grupo de achadinhos",
      body: [
        "Não importa o nome — grupo de ofertas, grupo de promoções ou grupo de achadinhos — a lógica é a mesma: conteúdo de qualidade, frequência consistente e links que geram comissão. A Vupia foi desenhada exatamente para esse modelo de operação.",
      ],
    },
    {
      heading: "Métricas para crescer com inteligência",
      body: [
        "Acompanhe cliques, pedidos e comissões por grupo e por oferta. Descubra quais categorias seu público mais compra, quais horários geram mais cliques e quais grupos trazem mais receita — e ajuste sua estratégia com dados, não com achismo.",
      ],
    },
  ],
  faq: [
    {
      q: "Quantos grupos de ofertas posso gerenciar?",
      a: "A Vupia foi feita para quem opera múltiplos grupos. Você conecta seus grupos e gerencia todos a partir de um único painel, com envios segmentados por público.",
    },
    {
      q: "Consigo enviar ofertas diferentes para grupos diferentes?",
      a: "Sim. A segmentação por público permite escolher quais ofertas vão para cada grupo, adaptando o conteúdo ao interesse de cada audiência.",
    },
    {
      q: "A Vupia funciona como um bot para grupo de ofertas?",
      a: "A Vupia automatiza a distribuição de ofertas nos seus grupos conforme as regras e horários que você define, mantendo sua divulgação ativa 24 horas por dia.",
    },
  ],
  related: [
    { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
    { label: "WhatsApp para afiliados", href: "/funcionalidades/whatsapp-para-afiliados" },
    { label: "Achadinhos", href: "/achadinhos" },
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
  ],
};

export const Route = createFileRoute("/funcionalidades/grupos-de-ofertas")({
  head: () => ({
    meta: [
      { title: "Grupos de Ofertas: Organize e Automatize | Vupia" },
      { name: "description", content: "Gerencie todos os seus grupos de ofertas e achadinhos em um só painel: segmentação por público, envios programados e métricas de cliques e comissões." },
      { property: "og:title", content: "Grupos de Ofertas: Organize e Automatize | Vupia" },
      { property: "og:description", content: "Todos os seus grupos de ofertas em um só painel, com envios automatizados." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/funcionalidades/grupos-de-ofertas")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Funcionalidades" }, { label: "Grupos de ofertas" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: "/funcionalidades/grupos-de-ofertas", title: config.h1, description: config.quickAnswer })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
