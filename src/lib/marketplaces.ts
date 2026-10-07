import type { SeoPageConfig } from "@/components/SeoPage";

export type Marketplace = {
  slug: string;
  name: string;
  strength: string;
  tips: string[];
  commission: string;
};

export const MARKETPLACES: Marketplace[] = [
  {
    slug: "shopee",
    name: "Shopee",
    strength: "cupons, frete grátis e ofertas relâmpago diárias",
    tips: [
      "Acompanhe as campanhas de dia duplo (9.9, 10.10, 11.11, 12.12).",
      "Divulgue cupons de frete grátis junto com o produto.",
      "Priorize itens de casa, beleza e acessórios abaixo de R$ 50.",
    ],
    commission: "O programa de afiliados da Shopee paga comissão por categoria e oferece campanhas com comissão extra em datas especiais.",
  },
  {
    slug: "amazon",
    name: "Amazon",
    strength: "promoções relâmpago, cupons e eletrônicos com entrega rápida",
    tips: [
      "Fique de olho nas ofertas do dia e no Prime Day.",
      "Livros, Kindle e eletrônicos convertem muito bem em grupos.",
      "Destaque o selo de entrega rápida na mensagem.",
    ],
    commission: "O Amazon Associados paga comissão variável por categoria sobre qualquer compra feita após o clique no seu link.",
  },
  {
    slug: "mercado-livre",
    name: "Mercado Livre",
    strength: "ofertas relâmpago, variedade enorme e confiança do comprador",
    tips: [
      "Use as ofertas do dia e os cupons da semana.",
      "Produtos com entrega Full convertem mais.",
      "Compare preço com outras lojas para reforçar o achadinho.",
    ],
    commission: "O programa de afiliados do Mercado Livre paga comissão por categoria em vendas geradas pelos seus links.",
  },
  {
    slug: "shein",
    name: "SHEIN",
    strength: "moda e acessórios com preços agressivos e lançamentos constantes",
    tips: [
      "Moda feminina e acessórios são os campeões de clique.",
      "Divulgue cupons progressivos de desconto.",
      "Use fotos do produto em uso para aumentar a conversão.",
    ],
    commission: "O programa de afiliados da SHEIN paga comissão sobre vendas, com bônus em campanhas sazonais.",
  },
  {
    slug: "magalu",
    name: "Magalu",
    strength: "eletrônicos, eletrodomésticos e parcelamento sem juros",
    tips: [
      "Destaque o parcelamento sem juros na mensagem.",
      "Aproveite eventos como a Liquidação Fantástica.",
      "Eletrodomésticos têm ticket alto e comissões maiores.",
    ],
    commission: "No Parceiro Magalu você monta sua loja virtual e recebe comissão pelas vendas feitas pelo seu link.",
  },
];

export const getMarketplace = (slug: string) => MARKETPLACES.find((m) => m.slug === slug);

export function achadinhosConfig(m: Marketplace): SeoPageConfig {
  const path = `/achadinhos/${m.slug}`;
  return {
    path,
    eyebrow: `Achadinhos ${m.name}`,
    h1: `Achadinhos da ${m.name}: como encontrar e divulgar as melhores ofertas`,
    quickAnswer: `Achadinhos da ${m.name} são ofertas, cupons e promoções da loja compartilhados por afiliados em grupos de WhatsApp, Telegram e redes sociais. A ${m.name} se destaca por ${m.strength}, e cada venda feita pelo seu link de afiliado gera comissão.`,
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Achadinhos", href: "/achadinhos" }, { label: m.name }],
    sections: [
      { heading: `O que torna a ${m.name} boa para achadinhos`, body: [`A ${m.name} é forte em ${m.strength}. Isso gera um fluxo constante de oportunidades para quem mantém grupos de ofertas ativos.`] },
      { heading: `Dicas para divulgar achadinhos da ${m.name}`, body: ["Algumas práticas que aumentam cliques e vendas:"], list: m.tips },
      { heading: "Como automatizar", body: [`A Vupia monitora as ofertas da ${m.name} em tempo real, converte os links em links de afiliado e envia automaticamente para seus grupos, 24 horas por dia.`] },
    ],
    faq: [
      { q: `Dá para ganhar dinheiro com achadinhos da ${m.name}?`, a: `Sim. ${m.commission}` },
      { q: `A Vupia funciona com a ${m.name}?`, a: `Sim. A ${m.name} é uma das lojas integradas à Vupia, e novas lojas são adicionadas constantemente.` },
    ],
    related: [
      { label: `Afiliado ${m.name}`, href: `/afiliados/${m.slug}` },
      { label: "Tudo sobre achadinhos", href: "/achadinhos" },
      { label: "Automação de grupos", href: "/funcionalidades/automacao-de-grupos" },
      { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    ],
  };
}

export function afiliadosConfig(m: Marketplace): SeoPageConfig {
  const path = `/afiliados/${m.slug}`;
  return {
    path,
    eyebrow: `Afiliado ${m.name}`,
    h1: `Como ser afiliado da ${m.name} e ganhar comissões divulgando ofertas`,
    quickAnswer: `Para ser afiliado da ${m.name}, cadastre-se no programa oficial de afiliados da loja, gere seus links e divulgue produtos em grupos e redes sociais. ${m.commission}`,
    breadcrumb: [{ label: "Home", href: "/" }, { label: `Afiliado ${m.name}` }],
    sections: [
      { heading: "Passo a passo", body: ["O caminho para começar:"], list: [
        `Cadastre-se no programa de afiliados da ${m.name}.`,
        "Monte seus canais: grupos de WhatsApp, Telegram ou Instagram.",
        "Gere links de afiliado para as ofertas escolhidas.",
        "Divulgue com consistência e acompanhe os resultados.",
      ] },
      { heading: "Como funciona a comissão", body: [m.commission] },
      { heading: "Escalando com a Vupia", body: [`A Vupia converte ofertas da ${m.name} em links de afiliado e distribui tudo nos seus grupos automaticamente, com métricas de cliques e vendas.`] },
    ],
    faq: [
      { q: `Ser afiliado da ${m.name} é gratuito?`, a: "Sim, o cadastro nos programas de afiliados dos marketplaces é gratuito." },
      { q: "Preciso ter site?", a: "Não. A maioria dos afiliados divulga em grupos de WhatsApp, Telegram e redes sociais." },
    ],
    related: [
      { label: `Achadinhos ${m.name}`, href: `/achadinhos/${m.slug}` },
      { label: "WhatsApp para afiliados", href: "/funcionalidades/whatsapp-para-afiliados" },
      { label: "Como funciona a Vupia", href: "/como-funciona" },
    ],
  };
}
