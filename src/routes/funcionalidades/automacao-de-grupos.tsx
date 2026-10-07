import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/funcionalidades/automacao-de-grupos",
  eyebrow: "Funcionalidades",
  h1: "Automação de grupos para quem divulga ofertas e achadinhos",
  quickAnswer:
    "Automação de grupos é o processo de programar e organizar o envio de ofertas, cupons e links de afiliado para grupos de WhatsApp e canais, eliminando tarefas manuais como copiar, formatar e republicar cada promoção.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Funcionalidades" }, { label: "Automação de grupos" }],
  sections: [
    {
      heading: "O que é automação de grupos",
      body: [
        "É a capacidade de manter seus grupos de ofertas ativos sem operação manual contínua. Você define o que enviar, para quais grupos e em quais horários — e a plataforma executa os envios por você, todos os dias.",
      ],
    },
    {
      heading: "O problema do processo manual",
      body: [
        "Divulgar ofertas manualmente significa repetir o mesmo ciclo dezenas de vezes ao dia: encontrar a oferta, copiar o link, gerar o link de afiliado, formatar a mensagem e colar em cada grupo. Além de consumir horas, o processo manual limita o crescimento — cada grupo novo significa mais trabalho.",
      ],
    },
    {
      heading: "Como a automação da Vupia funciona",
      body: ["Com a Vupia, o fluxo fica assim:"],
      list: [
        "A plataforma monitora ofertas das lojas conectadas em tempo real.",
        "Você salva as ofertas que quer divulgar e organiza por público.",
        "Define os grupos de destino e os horários de envio.",
        "A Vupia distribui as ofertas automaticamente, com seu link de afiliado.",
        "Você acompanha cliques, pedidos e comissões no painel.",
      ],
    },
    {
      heading: "Envio para vários grupos de uma vez",
      body: [
        "Com o envio em massa, uma única oferta pode ser distribuída para todos os seus grupos simultaneamente — ou apenas para os segmentos que você escolher. É o fim do copiar e colar grupo por grupo.",
      ],
    },
    {
      heading: "Programação de horários",
      body: [
        "Programe os envios para os horários de maior engajamento do seu público. Seus grupos continuam recebendo ofertas mesmo quando você está dormindo ou offline — sua divulgação fica ativa 24 horas por dia.",
      ],
    },
  ],
  faq: [
    {
      q: "Automatizar grupo de WhatsApp é permitido?",
      a: "A Vupia foi desenhada para divulgação legítima de ofertas nos seus próprios grupos, respeitando as regras de cada plataforma. Recomendamos sempre seguir os termos de uso do WhatsApp e dos programas de afiliados.",
    },
    {
      q: "Posso escolher horários diferentes para cada grupo?",
      a: "Sim. Você programa horários e regras por grupo ou por segmento de público, adaptando a frequência ao perfil de cada comunidade.",
    },
    {
      q: "A automação envia com meu link de afiliado?",
      a: "Sim. Todos os envios já saem com a sua identificação de afiliado, garantindo que as comissões sejam atribuídas a você.",
    },
  ],
  related: [
    { label: "WhatsApp para afiliados", href: "/funcionalidades/whatsapp-para-afiliados" },
    { label: "Grupos de ofertas", href: "/funcionalidades/grupos-de-ofertas" },
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    { label: "Achadinhos", href: "/achadinhos" },
  ],
};

export const Route = createFileRoute("/funcionalidades/automacao-de-grupos")({
  head: () => ({
    meta: [
      { title: "Automação de Grupos de WhatsApp para Afiliados | Vupia" },
      { name: "description", content: "Automatize grupos de ofertas e achadinhos no WhatsApp com a Vupia. Organize produtos, programe envios e acompanhe seus resultados em um só lugar." },
      { property: "og:title", content: "Automação de Grupos de WhatsApp para Afiliados | Vupia" },
      { property: "og:description", content: "Organize produtos, programe envios e acompanhe resultados em um só lugar." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/funcionalidades/automacao-de-grupos")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Funcionalidades" }, { label: "Automação de grupos" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: "/funcionalidades/automacao-de-grupos", title: config.h1, description: config.quickAnswer })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
