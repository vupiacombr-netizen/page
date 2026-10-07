import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/funcionalidades/whatsapp-para-afiliados",
  eyebrow: "Funcionalidades",
  h1: "WhatsApp para afiliados: organize e automatize suas ofertas",
  quickAnswer:
    "A Vupia conecta seus grupos de WhatsApp às principais lojas de afiliados e automatiza o envio de ofertas com seu link de afiliado — você encontra as ofertas, programa os horários e a plataforma distribui por você.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Funcionalidades" }, { label: "WhatsApp para afiliados" }],
  sections: [
    {
      heading: "Por que o WhatsApp é o canal principal dos afiliados no Brasil",
      body: [
        "Grupos de WhatsApp concentram a audiência mais engajada do mercado de achadinhos: pessoas que entraram porque querem receber ofertas. A taxa de visualização é muito superior à de redes sociais, e a compra acontece a poucos toques da mensagem.",
      ],
    },
    {
      heading: "O que a Vupia automatiza no seu WhatsApp",
      body: ["Com a Vupia, as tarefas mais repetitivas da divulgação no WhatsApp deixam de ser manuais:"],
      list: [
        "Envio de ofertas para vários grupos de uma vez.",
        "Links de afiliado gerados automaticamente a partir do link do produto.",
        "Mensagens formatadas no padrão que você definir.",
        "Programação de horários para manter os grupos ativos o dia todo.",
        "Segmentação: ofertas diferentes para públicos diferentes.",
      ],
    },
    {
      heading: "WhatsApp para afiliado Shopee, Amazon, Mercado Livre e mais",
      body: [
        "A Vupia é integrada às lojas mais usadas pelos afiliados brasileiros: Shopee, Amazon, Mercado Livre, SHEIN e Magalu. Você encontra as ofertas dessas lojas dentro da plataforma e envia para seus grupos já com a sua identificação de afiliado.",
      ],
    },
    {
      heading: "Boas práticas para grupos de ofertas no WhatsApp",
      body: [],
      list: [
        "Mantenha frequência consistente, sem floodar o grupo.",
        "Priorize ofertas realmente boas — curadoria retém membros.",
        "Use mensagens claras: produto, preço, desconto e link.",
        "Respeite os termos de uso do WhatsApp e dos programas de afiliados.",
      ],
    },
  ],
  faq: [
    {
      q: "Como enviar link de afiliado no WhatsApp automaticamente?",
      a: "Com a Vupia você cola o link do produto, a plataforma converte em link de afiliado e programa o envio para os grupos que você escolher — sem copiar e colar manualmente.",
    },
    {
      q: "Funciona para grupo de afiliado Shopee?",
      a: "Sim. A Vupia é integrada à Shopee e às demais lojas, e os envios já saem com sua identificação de afiliado Shopee.",
    },
    {
      q: "Preciso deixar o computador ligado?",
      a: "Não. Depois de configurados, os envios programados acontecem automaticamente, mesmo com você offline.",
    },
  ],
  related: [
    { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
    { label: "Grupos de ofertas", href: "/funcionalidades/grupos-de-ofertas" },
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    { label: "Como funciona", href: "/como-funciona" },
  ],
};

export const Route = createFileRoute("/funcionalidades/whatsapp-para-afiliados")({
  head: () => ({
    meta: [
      { title: "WhatsApp para Afiliados: Automatize suas Ofertas | Vupia" },
      { name: "description", content: "WhatsApp para afiliados: envie ofertas automaticamente para seus grupos com links de afiliado Shopee, Amazon, Mercado Livre, SHEIN e Magalu. Conheça a Vupia." },
      { property: "og:title", content: "WhatsApp para Afiliados | Vupia" },
      { property: "og:description", content: "Envie ofertas automaticamente para seus grupos com seus links de afiliado." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/funcionalidades/whatsapp-para-afiliados")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Funcionalidades" }, { label: "WhatsApp para afiliados" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: "/funcionalidades/whatsapp-para-afiliados", title: config.h1, description: config.quickAnswer })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
