import { createFileRoute } from "@tanstack/react-router";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/achadinhos",
  eyebrow: "Achadinhos",
  h1: "Tudo sobre achadinhos: encontre, divulgue e automatize suas ofertas",
  quickAnswer:
    "Achadinhos são ofertas e promoções encontradas em marketplaces como Shopee, SHEIN, Temu, Mercado Livre e Magalu, compartilhadas por afiliados e criadores em grupos de WhatsApp, Telegram e redes sociais — geralmente com links de afiliado que geram comissão a cada venda.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Achadinhos" }],
  sections: [
    {
      heading: "O que são achadinhos",
      body: [
        "Achadinhos são produtos em promoção, cupons e oportunidades de preço encontrados em marketplaces e compartilhados com uma audiência. Quem compartilha — o divulgador — normalmente usa links de afiliado e ganha comissão por cada venda realizada.",
        "O formato cresceu no Brasil principalmente em grupos de WhatsApp e Telegram, onde curadoria e rapidez fazem toda a diferença.",
      ],
    },
    {
      heading: "Como funcionam os achadinhos",
      body: [
        "O divulgador encontra uma oferta, gera seu link de afiliado, formata uma mensagem atrativa e envia para seus grupos. Quando alguém compra pelo link, a loja paga uma comissão. O desafio é fazer isso em volume: dezenas de ofertas por dia, em vários grupos, sem perder qualidade.",
      ],
    },
    {
      heading: "Como ganhar dinheiro com achadinhos",
      body: ["O modelo de receita dos achadinhos é baseado em afiliação:"],
      list: [
        "Cadastre-se nos programas de afiliados dos marketplaces (Shopee, Amazon, Mercado Livre, SHEIN, Magalu).",
        "Monte e nutra seus canais: grupos de WhatsApp, Telegram ou perfis no Instagram.",
        "Compartilhe ofertas com seus links de afiliado de forma consistente.",
        "Acompanhe cliques e conversões para entender o que seu público mais compra.",
        "Automatize os envios para escalar sem aumentar o trabalho manual.",
      ],
    },
    {
      heading: "Onde encontrar achadinhos",
      body: [
        "As melhores fontes são os próprios marketplaces: páginas de ofertas relâmpago, cupons de vendedor, liquidações e eventos sazonais. A Vupia monitora essas fontes em tempo real e traz as oportunidades para dentro da plataforma, poupando horas de busca manual.",
      ],
    },
    {
      heading: "Achadinhos por marketplace",
      body: [
        "Cada marketplace tem um comportamento diferente: a Shopee é forte em cupons e frete grátis, a SHEIN em moda com preço agressivo, o Mercado Livre em ofertas relâmpago, a Magalu em eletrônicos e a Amazon em promoções relâmpago e cupons. Conhecer o ritmo de cada loja melhora a curadoria.",
      ],
    },
    {
      heading: "Como divulgar achadinhos",
      body: [
        "Os canais mais usados são grupos de WhatsApp, canais de Telegram e perfis de Instagram de achadinhos. A regra é clara: consistência vence volume. Grupos com envios regulares, mensagens bem formatadas e ofertas realmente boas retêm muito mais membros.",
      ],
    },
    {
      heading: "Automação para achadinhos",
      body: [
        "Automatizar significa programar e organizar o envio de ofertas, cupons e links de afiliado para seus grupos, reduzindo tarefas manuais como copiar, formatar e republicar cada promoção. É o que permite a um divulgador operar vários grupos ao mesmo tempo, 24 horas por dia.",
      ],
    },
    {
      heading: "Como a Vupia ajuda",
      body: [
        "A Vupia centraliza todo o fluxo: monitora ofertas das lojas conectadas, organiza sua curadoria, converte links em links de afiliado, programa os envios e distribui automaticamente nos seus grupos — com métricas de cliques, pedidos e comissões para você acompanhar o resultado.",
      ],
    },
  ],
  faq: [
    {
      q: "O que são achadinhos?",
      a: "São ofertas e promoções encontradas em marketplaces e compartilhadas por afiliados e criadores em grupos e redes sociais, geralmente com links de afiliado que geram comissão por venda.",
    },
    {
      q: "Dá para ganhar dinheiro com achadinhos?",
      a: "Sim. O modelo é baseado em afiliação: você divulga ofertas com seu link e recebe comissão pelas vendas. Consistência de envios e um público engajado são os principais fatores de resultado.",
    },
    {
      q: "Preciso automatizar meus grupos?",
      a: "Não é obrigatório, mas a automação é o que permite escalar: com ela você mantém vários grupos ativos, com envios programados, sem passar o dia copiando e colando ofertas.",
    },
  ],
  related: [
    { label: "Achadinhos Shopee", href: "/achadinhos/shopee" },
    { label: "Achadinhos Amazon", href: "/achadinhos/amazon" },
    { label: "Achadinhos Mercado Livre", href: "/achadinhos/mercado-livre" },
    { label: "Achadinhos SHEIN", href: "/achadinhos/shein" },
    { label: "Achadinhos Magalu", href: "/achadinhos/magalu" },
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
    { label: "Grupos de ofertas", href: "/funcionalidades/grupos-de-ofertas" },
    { label: "Como funciona a Vupia", href: "/como-funciona" },
  ],
};

export const Route = createFileRoute("/achadinhos/")({
  head: () => ({
    meta: [
      { title: "Achadinhos: Como Encontrar, Divulgar e Ganhar Dinheiro | Vupia" },
      { name: "description", content: "Tudo sobre achadinhos: o que são, onde encontrar, como divulgar em grupos de WhatsApp e como automatizar ofertas de Shopee, SHEIN, Temu, Mercado Livre e Magalu." },
      { property: "og:title", content: "Achadinhos: Como Encontrar, Divulgar e Ganhar Dinheiro" },
      { property: "og:description", content: "O hub completo sobre achadinhos: encontrar, divulgar e automatizar ofertas." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/achadinhos")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Achadinhos" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: "/achadinhos", title: config.h1, description: config.quickAnswer })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
