import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";
import { getMarketplace, achadinhosConfig } from "@/lib/marketplaces";

export const Route = createFileRoute("/achadinhos/$loja")({
  loader: ({ params }) => {
    const m = getMarketplace(params.loja);
    if (!m) throw notFound();
    return { slug: m.slug };
  },
  head: ({ loaderData }) => {
    const m = loaderData && getMarketplace(loaderData.slug);
    if (!m) return { meta: [{ title: "Loja não encontrada | Vupia" }] };
    const c = achadinhosConfig(m);
    return {
      meta: [
        { title: `Achadinhos ${m.name}: Melhores Ofertas e Como Divulgar | Vupia` },
        { name: "description", content: c.quickAnswer.slice(0, 158) },
        { property: "og:title", content: `Achadinhos ${m.name}` },
        { property: "og:description", content: `Como encontrar, divulgar e automatizar achadinhos da ${m.name}.` },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [canonical(c.path)],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Achadinhos", path: "/achadinhos" }, { label: m.name }])) },
        { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: c.path, title: c.h1, description: c.quickAnswer })) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(c.faq)) },
      ],
    };
  },
  notFoundComponent: () => <p className="p-10 text-center">Loja não encontrada.</p>,
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  return <SeoPage config={achadinhosConfig(getMarketplace(slug)!)} />;
}
