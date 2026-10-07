import { createFileRoute } from "@tanstack/react-router";
import { Instagram } from "lucide-react";
import { SeoPage, type SeoPageConfig } from "@/components/SeoPage";
import { CommissionSimulator } from "@/components/CommissionSimulator";
import { vupiaConfig } from "@/lib/vupia-config";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const config: SeoPageConfig = {
  path: "/programa-de-afiliados",
  eyebrow: "Programa de Afiliados Vupia",
  h1: "Ganhe indicando a Vupia",
  quickAnswer:
    "O Programa de Afiliados Vupia paga 40% de comissão sobre cada venda feita através da sua indicação: você divulga com materiais prontos, acompanha os resultados e recebe 40% por cada venda.",
  breadcrumb: [{ label: "Home", href: "/" }, { label: "Programa de Afiliados" }],
  sections: [
    {
      heading: "O que é o Programa de Afiliados Vupia",
      body: [
        "É o programa de parceria da Vupia para quem quer ganhar indicando uma ferramenta que já usa e confia. Você recebe um link exclusivo, divulga para a sua audiência e ganha 40% de comissão por cada venda realizada através dele.",
      ],
    },
    {
      heading: "Como funciona",
      body: ["O fluxo é simples:"],
      list: [
        "Você se cadastra no programa e recebe seu link de indicação.",
        "Divulga para sua audiência com materiais prontos para divulgação.",
        "Cada venda feita pelo seu link gera 40% de comissão para você.",
        "Você acompanha cliques, conversões e resultados no painel.",
      ],
    },
    {
      heading: "Por que indicar a Vupia",
      body: [
        "Você indica um produto que resolve um problema real do seu público: automatizar a divulgação de ofertas e achadinhos. É uma recomendação natural para quem já vive de afiliação — e uma fonte de receita recorrente para você.",
      ],
    },
    {
      heading: "Para quem é",
      body: [
        "Afiliados, criadores de conteúdo, donos de grupos de achadinhos e qualquer pessoa com audiência interessada em ganhar dinheiro com ofertas e marketplaces.",
      ],
    },
  ],
  faq: [
    {
      q: "Preciso ser assinante da Vupia para ser afiliado?",
      a: "Recomendamos que você conheça a plataforma para indicar com propriedade, mas o cadastro no programa é aberto a criadores e divulgadores em geral.",
    },
    {
      q: "Como acompanho minhas vendas?",
      a: "O programa oferece acompanhamento de resultados: você vê cliques, conversões e comissões geradas pelas suas indicações.",
    },
    {
      q: "Qual a diferença entre afiliado e embaixador?",
      a: "O afiliado ganha comissão por venda indicada. O embaixador é um parceiro mais próximo da marca, com condições especiais, acesso a novidades em primeira mão e mais visibilidade. Conheça o Programa de Embaixadores na página dedicada.",
    },
  ],
  related: [
    { label: "Programa de Embaixadores", href: "/programa-de-afiliados/embaixadores" },
    { label: "Como funciona a Vupia", href: "/como-funciona" },
    { label: "Ferramenta para achadinhos", href: "/ferramenta-para-achadinhos" },
    { label: "Sobre a Vupia", href: "/sobre" },
  ],
  extra: (
    <>
      <CommissionSimulator mode="afiliado" />
      <section className="mt-10 rounded-[24px] border border-primary/25 bg-primary/5 p-7 text-center sm:p-9">
        <h2 className="text-[clamp(1.3rem,2.6vw,1.75rem)] font-bold leading-[1.2] tracking-tight">
          Fale com a equipe Vupia
        </h2>
        <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-[1.6] text-muted-foreground">
          Tire dúvidas sobre o programa e receba os próximos passos direto com o nosso time.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={vupiaConfig.whatsappAfiliadosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Falar com a equipe no WhatsApp
          </a>
          <a
            href={vupiaConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
          >
            <Instagram className="h-4 w-4" aria-hidden />
            Instagram da Vupia
          </a>
        </div>
      </section>
    </>
  ),
};

export const Route = createFileRoute("/programa-de-afiliados/")({
  head: () => ({
    meta: [
      { title: "Programa de Afiliados Vupia | Ganhe Indicando a Vupia" },
      { name: "description", content: "Ganhe comissões indicando a Vupia: materiais prontos para divulgação, link exclusivo e acompanhamento de resultados. Conheça o Programa de Afiliados Vupia." },
      { property: "og:title", content: "Programa de Afiliados Vupia | Ganhe Indicando a Vupia" },
      { property: "og:description", content: "Ganhe comissões indicando a plataforma que automatiza a divulgação de ofertas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/programa-de-afiliados")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Programa de Afiliados" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: "/programa-de-afiliados", title: config.h1, description: config.quickAnswer })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(config.faq)) },
    ],
  }),
  component: () => <SeoPage config={config} />,
});
