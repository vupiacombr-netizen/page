import { createFileRoute, notFound } from "@tanstack/react-router";
import { SeoPage } from "@/components/SeoPage";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";
import { getGuia, guiaConfig } from "@/lib/guias";

export const Route = createFileRoute("/guias/$slug")({
  loader: ({ params }) => {
    if (!getGuia(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  head: ({ loaderData }) => {
    const g = loaderData && getGuia(loaderData.slug);
    if (!g) return { meta: [{ title: "Guia não encontrado | Vupia" }] };
    const c = guiaConfig(g);
    return {
      meta: [
        { title: `${g.title} | Vupia` },
        { name: "description", content: g.quick.slice(0, 158) },
        { property: "og:title", content: g.title },
        { property: "og:description", content: g.quick.slice(0, 158) },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [canonical(c.path)],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Guias", path: "/guias" }, { label: g.title }])) },
        { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: c.path, title: c.h1, description: c.quickAnswer })) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(c.faq)) },
      ],
    };
  },
  notFoundComponent: () => <p className="p-10 text-center">Guia não encontrado.</p>,
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  return <SeoPage config={guiaConfig(getGuia(slug)!)} />;
}
