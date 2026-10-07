import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronRight, Check } from "lucide-react";
import logoDarkSrc from "@/assets/vupia-logo-dark.webp";
const logoDark = { url: logoDarkSrc };

export type SeoSection = {
  heading: string;
  body: string[];
  list?: string[];
};

export type SeoPageConfig = {
  path: string;
  eyebrow: string;
  h1: string;
  quickAnswer: string;
  sections: SeoSection[];
  faq: Array<{ q: string; a: string }>;
  related: Array<{ label: string; href: string }>;
  breadcrumb: Array<{ label: string; href?: string }>;
  extra?: ReactNode;
};

export function SeoPage({ config }: { config: SeoPageConfig }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Voltar para a home da Vupia">
            <img src={logoDark.url} alt="Vupia" width={360} height={153} className="block h-8 w-auto" />
          </Link>
          <a
            href="/#oferta"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Conhecer a Vupia
          </a>
        </div>
      </header>

      <article className="mx-auto w-full max-w-[1080px] px-5 pb-20 pt-10 sm:px-8 md:pt-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
          {config.breadcrumb.map((item, i) => (
            <span key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />}
              {item.href ? (
                <a href={item.href} className="transition hover:text-foreground">{item.label}</a>
              ) : (
                <span className="font-medium text-foreground">{item.label}</span>
              )}
            </span>
          ))}
        </nav>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-primary">{config.eyebrow}</p>
        <h1 className="mt-3 max-w-[820px] text-[clamp(1.9rem,4.6vw,3rem)] font-bold leading-[1.12] tracking-tight">
          {config.h1}
        </h1>

        <div className="mt-7 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
          <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-primary">Resposta rápida</p>
          <p className="mt-2 text-[15px] leading-[1.6] text-foreground sm:text-base">{config.quickAnswer}</p>
        </div>

        {config.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-[clamp(1.35rem,2.6vw,1.75rem)] font-bold leading-[1.2] tracking-tight">
              {section.heading}
            </h2>
            {section.body.map((p, i) => (
              <p key={i} className="mt-4 max-w-[760px] text-[15px] leading-[1.7] text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="mt-5 grid max-w-[760px] gap-2.5">
                {section.list.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] leading-[1.55] text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {config.extra && <div className="mt-14">{config.extra}</div>}

        <section className="mt-14">
          <h2 className="text-[clamp(1.35rem,2.6vw,1.75rem)] font-bold leading-[1.2] tracking-tight">
            Perguntas frequentes
          </h2>
          <div className="mt-5 grid gap-3">
            {config.faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-card px-5 py-4 transition open:border-primary/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold leading-[1.4] sm:text-base">
                  {item.q}
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-90" aria-hidden />
                </summary>
                <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground sm:text-[15px]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-[24px] border border-primary/25 bg-primary/5 p-7 text-center sm:p-10">
          <h2 className="text-[clamp(1.4rem,3vw,1.9rem)] font-bold leading-[1.15] tracking-tight">
            Pronto para automatizar suas ofertas?
          </h2>
          <p className="mx-auto mt-3 max-w-[520px] text-[15px] leading-[1.6] text-muted-foreground">
            A Vupia encontra, organiza e envia as melhores ofertas para os seus grupos, já com o seu link de afiliado.
          </p>
          <a
            href="/#oferta"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
          >
            Conhecer a Vupia
          </a>
        </section>

        <section className="mt-12">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">Conteúdos relacionados</h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {config.related.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
                >
                  {item.label} <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex w-full max-w-[1080px] flex-wrap items-center justify-between gap-4 px-5 text-[12px] text-muted-foreground sm:px-8">
          <span>© 2026 Vupia. Todos os direitos reservados.</span>
          <Link to="/" className="transition hover:text-foreground">Voltar para a home</Link>
        </div>
      </footer>
    </main>
  );
}
