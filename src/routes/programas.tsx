import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowLeft,
  BarChart3,
  Check,
  Crown,
  HeartHandshake,
  Megaphone,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDarkSrc from "@/assets/vupia-logo-dark.webp";
const logoDark = { url: logoDarkSrc };

export const Route = createFileRoute("/programas")({
  head: () => ({
    meta: [
      { title: "Afiliados e Embaixadores — Vupia" },
      {
        name: "description",
        content: "Conheça os programas de Afiliados e Embaixadores da Vupia e escolha como participar do crescimento da comunidade.",
      },
      { property: "og:title", content: "Afiliados e Embaixadores — Vupia" },
      {
        property: "og:description",
        content: "Escolha como indicar, representar e crescer junto com a Vupia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProgramsPage,
});

const programs = [
  {
    icon: BarChart3,
    title: "Programa de Afiliados",
    eyebrow: "Para quem quer indicar",
    description:
      "Compartilhe a Vupia com sua audiência e receba comissão pelas vendas realizadas através do seu link.",
    benefits: [
      "Link exclusivo para suas indicações",
      "Comissão por cada venda aprovada",
      "Materiais prontos para divulgação",
      "Acompanhamento dos resultados",
    ],
    cta: "Quero ser afiliado",
  },
  {
    icon: Crown,
    title: "Programa de Embaixadores",
    eyebrow: "Para quem quer representar",
    description:
      "Faça parte da comunidade mais de perto, represente a Vupia e tenha acesso a benefícios exclusivos.",
    benefits: [
      "Condições e benefícios especiais",
      "Novidades em primeira mão",
      "Mais visibilidade e reconhecimento",
      "Participação ativa na comunidade",
    ],
    cta: "Quero ser embaixador",
  },
];

function ProgramsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-growth-bg text-growth-title">
      <header className="border-b border-growth-border bg-growth-card/90">
        <div className="mx-auto flex h-20 w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Voltar para a Vupia">
            <img src={logoDark.url} alt="Vupia" width={360} height={153} className="block h-8 w-auto" />
          </Link>
          <Button asChild variant="outline" className="rounded-full border-growth-border bg-growth-card px-5 text-growth-title">
            <Link to="/">
              <ArrowLeft aria-hidden /> Voltar ao site
            </Link>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden px-5 pb-20 pt-16 sm:px-8 md:pb-24 md:pt-24">
        <div className="growth-lines" aria-hidden />
        <div className="relative z-10 mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-growth-border bg-growth-card px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-growth-rose shadow-growth">
              <HeartHandshake className="h-4 w-4" aria-hidden />
              Cresça com a Vupia
            </div>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.06] sm:text-5xl md:text-6xl">
              Escolha como você quer <span className="text-growth-rose">crescer com a Vupia</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[650px] text-base leading-relaxed text-growth-muted md:text-lg">
              Indique a plataforma, fortaleça a comunidade e transforme sua influência em novas oportunidades.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {programs.map((program, index) => (
              <article key={program.title} className="flex flex-col border border-growth-border bg-growth-card p-7 shadow-growth sm:p-9">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-growth-icon text-growth-rose shadow-growth-icon">
                    <program.icon className="h-7 w-7" strokeWidth={2.1} aria-hidden />
                  </span>
                  <span className="text-sm font-bold text-growth-rose">0{index + 1}</span>
                </div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-growth-rose">{program.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">{program.title}</h2>
                <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-growth-muted">{program.description}</p>
                <ul className="mt-7 space-y-4 border-t border-growth-border pt-7">
                  {program.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-[15px] font-semibold">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-growth-check-bg text-growth-rose">
                        <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Button className="mt-9 h-12 w-full rounded-full bg-growth-rose text-sm font-bold text-primary-foreground hover:bg-growth-rose/90">
                  {program.cta}
                </Button>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 border border-growth-border bg-growth-card p-6 shadow-growth sm:grid-cols-3 sm:p-8">
            {[
              { icon: Megaphone, label: "Divulgue do seu jeito" },
              { icon: Users, label: "Faça parte da comunidade" },
              { icon: Sparkles, label: "Cresça junto com a Vupia" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-center gap-3 text-center text-sm font-bold">
                <item.icon className="h-5 w-5 text-growth-rose" aria-hidden />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}