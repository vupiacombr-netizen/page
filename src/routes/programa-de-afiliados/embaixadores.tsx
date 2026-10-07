import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Gift,
  Youtube,
  Instagram,
  Users,
  Store,
  Music2,
} from "lucide-react";
import logoDarkSrc from "@/assets/vupia-logo-dark.webp";
const logoDark = { url: logoDarkSrc };
import { CommissionSimulator } from "@/components/CommissionSimulator";
import { vupiaConfig } from "@/lib/vupia-config";
import { canonical, breadcrumbSchema, articleSchema, faqSchema } from "@/lib/seo";

const wa = vupiaConfig.whatsappEmbaixadoresUrl;

const faq = [
  {
    q: "Quem pode ser embaixador da Vupia?",
    a: "O programa é exclusivo para quem já tem audiência: criadores de conteúdo no YouTube, TikTok e Instagram, influenciadores, donos de grupos de ofertas e players digitais e de marketplaces. A equipe avalia alcance e alinhamento com a marca na candidatura.",
  },
  {
    q: "Qual a diferença entre afiliado e embaixador?",
    a: "O Programa de Afiliados paga 40% de comissão sobre cada venda feita com o seu link, e é aberto a qualquer pessoa. O Programa de Embaixadores é exclusivo para quem tem audiência: você ganha 50% nas suas próprias vendas e ainda recebe 10% das vendas de quem indicar e 1% das vendas da rede do seu indicado.",
  },
  {
    q: "Como funciona a comissão em rede?",
    a: "Como embaixador, você indica um amigo, que ganha 40% nas próprias vendas, e ele pode indicar um amigo do amigo, que também ganha 40%. Você continua ganhando em toda a cadeia: 10% das vendas do seu amigo e 1% das vendas do amigo do amigo. É o incentivo para continuar indicando.",
  },
  {
    q: "Como me candidatar?",
    a: "Pelo WhatsApp: clique em qualquer botão desta página para falar com a nossa equipe. Ela valida o seu perfil e sua audiência e envia os próximos passos para ativar sua conta de embaixador.",
  },
];

const channels = [
  { icon: Youtube, label: "YouTube", desc: "Vídeos de achadinhos e ofertas" },
  { icon: Music2, label: "TikTok", desc: "Conteúdo viral de promoções" },
  { icon: Instagram, label: "Instagram", desc: "Stories, reels e posts de achadinhos" },
  { icon: Users, label: "Grupos de ofertas", desc: "Comunidades no WhatsApp e Telegram" },
  { icon: Store, label: "Players digitais", desc: "Marketplaces e vendas online" },
];

export const Route = createFileRoute("/programa-de-afiliados/embaixadores")({
  head: () => ({
    meta: [
      { title: "Programa de Embaixadores Vupia | 50% de comissão e rede de ganhos" },
      { name: "description", content: "Programa exclusivo para quem tem audiência: 50% de comissão nas suas vendas, 10% das vendas de quem você indicar e 1% da rede. Fale com a nossa equipe no WhatsApp." },
      { property: "og:title", content: "Programa de Embaixadores Vupia" },
      { property: "og:description", content: "Exclusivo para quem tem audiência: 50% nas suas vendas e comissões em rede." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/programa-de-afiliados/embaixadores")],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ label: "Home", path: "/" }, { label: "Programa de Afiliados", path: "/programa-de-afiliados" }, { label: "Embaixadores" }])) },
      { type: "application/ld+json", children: JSON.stringify(articleSchema({ path: "/programa-de-afiliados/embaixadores", title: "Programa de Embaixadores Vupia", description: "Programa exclusivo para quem tem audiência: 50% nas suas vendas e comissões em rede." })) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faq)) },
    ],
  }),
  component: EmbaixadoresPage,
});

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function WhatsAppButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ||
        "inline-flex items-center justify-center gap-2.5 rounded-full bg-offer-rose px-8 py-4 text-base font-bold text-white shadow-lg shadow-offer-rose/25 transition hover:-translate-y-0.5 hover:bg-offer-rose-deep hover:shadow-xl"
      }
    >
      <WhatsAppIcon className="h-5 w-5" aria-hidden />
      {label}
    </a>
  );
}

function EmbaixadoresPage() {
  return (
    <main className="min-h-screen bg-offer-bg text-offer-headline">
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-[1080px] items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Voltar para a home da Vupia">
            <img src={logoDark.url} alt="Vupia" width={360} height={153} className="block h-8 w-auto" />
          </Link>
          <WhatsAppButton
            label="Falar com a equipe"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-offer-rose px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-offer-rose-deep"
          />
        </div>
      </header>

      <article className="mx-auto w-full max-w-[1080px] px-5 pb-20 pt-10 sm:px-8 md:pt-14">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted-foreground">
          <a href="/" className="transition hover:text-foreground">Home</a>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
          <a href="/programa-de-afiliados" className="transition hover:text-foreground">Programa de Afiliados</a>
          <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
          <span className="font-medium text-foreground">Embaixadores</span>
        </nav>

        {/* Hero */}
        <div className="mt-10 text-center md:mt-14">
          <span className="inline-block rounded-full bg-offer-band-bg px-4 py-1.5 text-[13px] font-bold uppercase tracking-wider text-offer-rose">
            Programa exclusivo para quem tem audiência
          </span>
          <h1 className="mx-auto mt-5 max-w-[860px] text-[clamp(2.1rem,5vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight">
            Multiplique sua influência com o <span className="text-offer-rose">Programa de Embaixadores</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.65] text-muted-foreground sm:text-lg">
            A estrutura de ganhos mais completa da Vupia para quem vive de audiência: mais comissão por venda
            do que o programa de afiliados e rendimento extra sobre toda a sua rede.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <WhatsAppButton label="Quero ser um Embaixador" />
            <p className="text-[13px] font-medium text-muted-foreground">Fale com a nossa equipe no WhatsApp</p>
          </div>
        </div>

        {/* Para quem tem audiência */}
        <section className="mt-16 md:mt-24">
          <div className="text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">Para quem tem audiência</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.6] text-muted-foreground">
              O programa é exclusivo para criadores e divulgadores que já movimentam uma audiência.
              Ainda não tem? O <a href="/programa-de-afiliados" className="font-semibold text-offer-rose underline-offset-2 hover:underline">Programa de Afiliados</a> é aberto a todos e paga 40% por venda.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
            {channels.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-5 text-center transition hover:-translate-y-0.5 hover:border-offer-rose/40 hover:shadow-lg hover:shadow-offer-rose/10">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-offer-band-bg">
                  <Icon className="h-5 w-5 text-offer-rose" aria-hidden />
                </span>
                <p className="mt-3 text-[14px] font-bold leading-tight">{label}</p>
                <p className="mt-1 text-[12px] leading-snug text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cadeia de comissões */}
        <section className="mt-16 md:mt-24">
          <div className="text-center">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">Como funcionam as comissões em cadeia</h2>
            <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.6] text-muted-foreground">
              Quem vende recebe. Quem indica também participa — e o embaixador ganha em toda a cadeia.
            </p>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-3 lg:gap-6">
            {/* Nível 1 */}
            <div className="relative">
              <div className="rounded-3xl bg-steps-card-dark p-8 text-white shadow-xl">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-offer-rose">Pessoa A</p>
                <h3 className="mt-2 text-xl font-bold">Embaixador (você)</h3>
                <p className="mt-4 text-5xl font-extrabold text-white">50%</p>
                <p className="mt-1 text-[14px] text-white/60">nas próprias vendas</p>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Quando você vende</p>
                <p className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-extrabold text-offer-rose">50%</span><span className="text-[14px] text-foreground">Embaixador (A)</span></p>
                <p className="mt-4 border-t border-border pt-3 text-[13px] font-semibold text-muted-foreground">Total de comissão: 50%</p>
              </div>
              <span className="absolute right-0 top-[88px] z-10 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background p-2.5 shadow-md lg:flex" aria-hidden>
                <ArrowRight className="h-4 w-4 text-offer-rose" />
              </span>
            </div>

            {/* Nível 2 */}
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-lg">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-offer-rose">Pessoa B</p>
                <h3 className="mt-2 text-xl font-bold">Amigo</h3>
                <p className="mt-4 text-5xl font-extrabold text-offer-rose">40%</p>
                <p className="mt-1 text-[14px] text-muted-foreground">nas próprias vendas</p>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Quando B vende</p>
                <p className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-extrabold text-offer-rose">40%</span><span className="text-[14px] text-foreground">Amigo (B)</span></p>
                <p className="mt-1.5 flex items-baseline gap-2"><span className="text-2xl font-extrabold text-offer-rose">10%</span><span className="text-[14px] text-foreground">você recebe (A)</span></p>
                <p className="mt-4 border-t border-border pt-3 text-[13px] font-semibold text-muted-foreground">Total de comissão: 50%</p>
              </div>
              <span className="absolute right-0 top-[88px] z-10 hidden -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background p-2.5 shadow-md lg:flex" aria-hidden>
                <ArrowRight className="h-4 w-4 text-offer-rose" />
              </span>
            </div>

            {/* Nível 3 */}
            <div className="relative">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-lg">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-offer-rose">Pessoa C</p>
                <h3 className="mt-2 text-xl font-bold">Amigo do amigo</h3>
                <p className="mt-4 text-5xl font-extrabold text-offer-rose">40%</p>
                <p className="mt-1 text-[14px] text-muted-foreground">nas próprias vendas</p>
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Quando C vende</p>
                <p className="mt-3 flex items-baseline gap-2"><span className="text-2xl font-extrabold text-offer-rose">40%</span><span className="text-[14px] text-foreground">Amigo do amigo (C)</span></p>
                <p className="mt-1.5 flex items-baseline gap-2"><span className="text-2xl font-extrabold text-offer-rose">10%</span><span className="text-[14px] text-foreground">Amigo (B)</span></p>
                <p className="mt-1.5 flex items-baseline gap-2"><span className="text-2xl font-extrabold text-offer-rose">1%</span><span className="text-[14px] text-foreground">você recebe (A)</span></p>
                <p className="mt-4 border-t border-border pt-3 text-[13px] font-semibold text-muted-foreground">Total de comissão: 51%</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 rounded-2xl bg-offer-band-bg p-6 text-center sm:flex-row sm:p-7">
            <Gift className="hidden h-8 w-8 shrink-0 text-offer-rose sm:block" aria-hidden />
            <div>
              <p className="text-[16px] font-bold">O incentivo para continuar indicando</p>
              <p className="mt-1 text-[14px] text-foreground/80">
                Você recebe <strong className="text-offer-rose">10%</strong> das vendas do seu amigo e <strong className="text-offer-rose">1%</strong> das vendas do amigo do amigo.
              </p>
            </div>
          </div>
        </section>

        {/* Simulação */}
        <div className="mt-16 md:mt-24">
          <CommissionSimulator mode="embaixador" />
        </div>

        {/* FAQ */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">Perguntas frequentes</h2>
          <div className="mx-auto mt-6 grid max-w-[760px] gap-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-border bg-card px-5 py-4 transition open:border-offer-rose/30">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold leading-[1.4] sm:text-base">
                  {item.q}
                  <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-open:rotate-90" aria-hidden />
                </summary>
                <p className="mt-3 text-[14px] leading-[1.65] text-muted-foreground sm:text-[15px]">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Benefícios rápidos */}
        <section className="mt-16 md:mt-20">
          <div className="mx-auto grid max-w-[860px] gap-2.5 rounded-2xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
            {[
              "Comissão de 50% nas suas próprias vendas.",
              "10% das vendas de quem você indicar.",
              "1% das vendas da rede do seu indicado.",
              "Contato direto com a equipe Vupia pelo WhatsApp.",
            ].map((item) => (
              <p key={item} className="flex items-start gap-2.5 text-[14px] leading-[1.55] sm:text-[15px]">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-offer-rose" aria-hidden />
                {item}
              </p>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="mt-14 rounded-[32px] bg-steps-card-dark p-9 text-center text-white sm:p-14">
          <h2 className="mx-auto max-w-[620px] text-[clamp(1.6rem,3.4vw,2.3rem)] font-extrabold leading-[1.15] tracking-tight">
            Pronto para levar a sua audiência ao próximo nível?
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.6] text-white/70">
            Nossa equipe valida o seu perfil, apresenta as condições atuais e ativa a sua conta de embaixador.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <WhatsAppButton label="Falar com a equipe no WhatsApp" />
            <p className="text-[13px] font-medium text-white/50">Resposta direta com o time Vupia</p>
            <a
              href={vupiaConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-white/70 underline decoration-white/30 underline-offset-4 transition hover:text-white"
            >
              <Instagram className="h-4 w-4" aria-hidden />
              Instagram da Vupia
            </a>
          </div>
        </section>

        {/* Conteúdos relacionados */}
        <section className="mt-14">
          <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-muted-foreground">Conteúdos relacionados</h2>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {[
              { label: "Programa de Afiliados", href: "/programa-de-afiliados" },
              { label: "Como funciona a Vupia", href: "/como-funciona" },
              { label: "Achadinhos", href: "/achadinhos" },
              { label: "Sobre a Vupia", href: "/sobre" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-[13px] font-medium text-foreground transition hover:border-offer-rose/40 hover:text-offer-rose"
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
