import type { SeoPageConfig } from "@/components/SeoPage";

type Guia = { slug: string; title: string; h1: string; quick: string; sections: SeoPageConfig["sections"]; faq: SeoPageConfig["faq"] };

export const GUIAS: Guia[] = [
  {
    slug: "como-criar-grupo-de-achadinhos",
    title: "Como Criar um Grupo de Achadinhos no WhatsApp",
    h1: "Como criar um grupo de achadinhos no WhatsApp do zero",
    quick: "Para criar um grupo de achadinhos, defina um nicho, crie o grupo ou comunidade no WhatsApp com regras claras, convide as primeiras pessoas e mantenha uma rotina de envios de ofertas com seus links de afiliado.",
    sections: [
      { heading: "Passo a passo", body: ["O básico para começar com o pé direito:"], list: ["Escolha um nicho (casa, moda, tecnologia, maternidade).", "Crie o grupo com nome, foto e descrição claros.", "Defina regras: só administradores enviam ofertas.", "Convide amigos, família e divulgue o link nas redes.", "Envie ofertas em horários fixos, todos os dias."] },
      { heading: "Erros comuns", body: ["Mandar ofertas demais, ofertas ruins ou sumir por dias. Consistência e curadoria retêm membros."] },
    ],
    faq: [{ q: "Quantas ofertas enviar por dia?", a: "Entre 10 e 30 ofertas bem distribuídas costuma funcionar bem; teste e acompanhe a saída de membros." }],
  },
  {
    slug: "como-ganhar-dinheiro-com-achadinhos",
    title: "Como Ganhar Dinheiro com Achadinhos em 2026",
    h1: "Como ganhar dinheiro com achadinhos: guia completo",
    quick: "Você ganha dinheiro com achadinhos divulgando ofertas de marketplaces com seus links de afiliado. A cada compra feita pelo link, a loja paga uma comissão.",
    sections: [
      { heading: "O modelo de comissão", body: ["Cada marketplace tem seu programa de afiliados, com comissões por categoria. Quanto mais vendas pelos seus links, maior o ganho."] },
      { heading: "Como escalar", body: ["Os divulgadores que mais ganham têm:"], list: ["Vários grupos ativos.", "Curadoria de boas ofertas.", "Envios automatizados 24 horas por dia.", "Acompanhamento de cliques e vendas."] },
    ],
    faq: [{ q: "Precisa investir para começar?", a: "Não é obrigatório. O cadastro nos programas de afiliados é gratuito; ferramentas como a Vupia ajudam a escalar." }],
  },
  {
    slug: "como-gerar-link-de-afiliado",
    title: "Como Gerar Link de Afiliado na Shopee, Amazon e Mais",
    h1: "Como gerar link de afiliado nos principais marketplaces",
    quick: "Para gerar um link de afiliado, entre no painel do programa de afiliados da loja, cole o link do produto e copie o link gerado com seu código. A Vupia faz essa conversão automaticamente.",
    sections: [
      { heading: "Na mão", body: ["Em cada loja o processo é parecido: acessar o painel de afiliado, buscar ou colar o produto e copiar o link curto gerado."] },
      { heading: "Automaticamente", body: ["Na Vupia, as ofertas já chegam com seu link de afiliado, prontas para enviar aos grupos."] },
    ],
    faq: [{ q: "O link de afiliado expira?", a: "Depende da loja; em geral o link continua válido, mas a comissão só conta dentro da janela de atribuição do programa." }],
  },
];

export const getGuia = (slug: string) => GUIAS.find((g) => g.slug === slug);

export function guiaConfig(g: Guia): SeoPageConfig {
  return {
    path: `/guias/${g.slug}`,
    eyebrow: "Guia",
    h1: g.h1,
    quickAnswer: g.quick,
    breadcrumb: [{ label: "Home", href: "/" }, { label: "Guias", href: "/guias" }, { label: g.title }],
    sections: g.sections,
    faq: g.faq,
    related: [
      ...GUIAS.filter((o) => o.slug !== g.slug).map((o) => ({ label: o.title, href: `/guias/${o.slug}` })),
      { label: "Tudo sobre achadinhos", href: "/achadinhos" },
    ],
  };
}
