import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoDarkSrc from "@/assets/vupia-logo-dark.webp";
const logoDark = { url: logoDarkSrc };
import { canonical, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/ferramentas/gerador-de-mensagem")({
  head: () => ({
    meta: [
      { title: "Gerador de Mensagem de Achadinho Grátis | Vupia" },
      { name: "description", content: "Ferramenta gratuita para montar mensagens de ofertas de achadinhos prontas para WhatsApp e Telegram, com preço, desconto e link de afiliado." },
      { property: "og:title", content: "Gerador de mensagem de achadinho grátis" },
      { property: "og:description", content: "Monte mensagens de oferta prontas para seus grupos." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/ferramentas/gerador-de-mensagem")],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Gerador de mensagem" }])) }],
  }),
  component: Tool,
});

function Tool() {
  const [f, setF] = useState({ produto: "", de: "", por: "", link: "", cupom: "" });
  const de = parseFloat(f.de.replace(",", ".")), por = parseFloat(f.por.replace(",", "."));
  const off = de > por && por > 0 ? Math.round((1 - por / de) * 100) : 0;
  const msg = [
    `🔥 ${f.produto || "Nome do produto"}`,
    f.de ? `De ~R$ ${f.de}~` : "",
    `💰 Por *R$ ${f.por || "0,00"}*${off ? ` (${off}% OFF)` : ""}`,
    f.cupom ? `🎟️ Cupom: ${f.cupom}` : "",
    `👉 ${f.link || "seu link de afiliado"}`,
  ].filter(Boolean).join("\n");
  const fields: Array<[keyof typeof f, string]> = [["produto", "Produto"], ["de", "Preço original (R$)"], ["por", "Preço da oferta (R$)"], ["cupom", "Cupom (opcional)"], ["link", "Link de afiliado"]];
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-[1080px] items-center justify-between px-5">
          <Link to="/"><img src={logoDark.url} alt="Vupia" className="h-8 w-auto" /></Link>
          <a href="/#oferta" className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Conhecer a Vupia</a>
        </div>
      </header>
      <section className="mx-auto max-w-[1080px] px-5 py-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">Ferramenta gratuita</p>
        <h1 className="mt-2 text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-tight">Gerador de mensagem de achadinho</h1>
        <p className="mt-3 max-w-[680px] text-muted-foreground">Preencha os dados da oferta e copie a mensagem pronta para seus grupos de WhatsApp ou Telegram.</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {fields.map(([k, l]) => (
              <label key={k} className="block text-sm font-medium">{l}
                <input value={f[k]} onChange={(e) => setF({ ...f, [k]: e.target.value })} className="mt-1 w-full rounded-xl border border-border bg-card px-4 py-3" />
              </label>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <pre className="whitespace-pre-wrap font-sans text-[15px]">{msg}</pre>
            <button onClick={() => navigator.clipboard.writeText(msg)} className="mt-6 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Copiar mensagem</button>
            <p className="mt-4 text-sm text-muted-foreground">Quer isso automático, para centenas de ofertas por dia? A Vupia faz por você.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
