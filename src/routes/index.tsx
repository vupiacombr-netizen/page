import { Fragment, useEffect, useRef, useState, type ComponentType } from "react";
import proofRafaela from "@/assets/proof-rafaela.jpg";
import proofTatiane from "@/assets/proof-tatiane.jpg";
import proofFelipe from "@/assets/proof-felipe.jpg";
import proofJuliana from "@/assets/proof-juliana.jpg";
import proofGroupAmanda from "@/assets/proof-group-amanda.webp";
import proofGroupRicardo from "@/assets/proof-group-ricardo.webp";
import proofGroupJacqueline from "@/assets/proof-group-jacqueline.webp";
import proofGroupLucas from "@/assets/proof-group-lucas.webp";
import proofGroupMarcos from "@/assets/proof-group-marcos.webp";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  Check, ShieldCheck, ChevronRight, Search, Megaphone, Lock,
  Send, Menu,
  Play, Users, BarChart3, Home, Settings, Link2, Volume2, Maximize2,
  Ticket, Star,
  Instagram, Zap, Clock, CalendarClock, FlipHorizontal2,
  MessageSquareText, MousePointerClick, Store, Minus,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import heroMockupSrc from "@/assets/vupia-hero-interface-v3.webp";
const heroMockup = { url: heroMockupSrc };
import logoLightSrc from "@/assets/vupia-logo-light.webp";
const logoLight = { url: logoLightSrc };
import logoDarkSrc from "@/assets/vupia-logo-dark.webp";
const logoDark = { url: logoDarkSrc };
import mercadoLivreLogo from "@/assets/mercado-livre-transparent.png";
import shopeeLogo from "@/assets/lojas/shopee.png";
import sheinLogo from "@/assets/lojas/shein.png";
import aliexpressLogo from "@/assets/lojas/aliexpress.png";
import temuLogo from "@/assets/lojas/temu.png";
import magaluLogo from "@/assets/lojas/magalu.png";
import amazonLogo from "@/assets/lojas/amazon.png";
import netshoesLogo from "@/assets/lojas/netshoes.png";
import casasBahiaLogo from "@/assets/lojas/casas-bahia.png";
import pontoFrioLogo from "@/assets/lojas/ponto-frio.png";
import americanasLogo from "@/assets/lojas/americanas.png";
import kabumLogo from "@/assets/lojas/kabum.png";
import centauroLogo from "@/assets/lojas/centauro.png";
import rennerLogo from "@/assets/lojas/renner.png";
import riachueloLogo from "@/assets/lojas/riachuelo.png";
import dafitiLogo from "@/assets/lojas/dafiti.png";
import boticarioLogo from "@/assets/lojas/boticario.png";
import tiktokLogo from "@/assets/lojas/tiktok.png";
import awinLogo from "@/assets/lojas/awin.svg";
import valeBonusPhoneSrc from "@/assets/vupia-valebonus-phone-2.webp";
const valeBonusPhone = { url: valeBonusPhoneSrc };
import placasReconhecimentoAsset from "@/assets/vupia-placas-3d.png.asset.json";
const placasReconhecimento = { url: placasReconhecimentoAsset.url };
import { vupiaConfig } from "@/lib/vupia-config";
import { canonical, organizationSchema, websiteSchema, softwareAppSchema } from "@/lib/seo";
import cover from "@/assets/video-cover.jpg";
import vslAirfryer from "@/assets/vsl-airfryer.png";
import vslHeadphone from "@/assets/vsl-headphone.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vupia — Mais ofertas nos seus grupos, mais tempo para você" },
      { name: "description", content: "Encontre ofertas das suas lojas favoritas, organize e programe os envios para seus grupos de WhatsApp com a Vupia." },
      { property: "og:title", content: "Vupia — Oferta boa a gente compartilha" },
      { property: "og:description", content: "Encontre, organize e programe ofertas para seus grupos de WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [canonical("/"), { rel: "preload", as: "image", href: heroMockupSrc, fetchpriority: "high" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(organizationSchema()) },
      { type: "application/ld+json", children: JSON.stringify(websiteSchema()) },
      { type: "application/ld+json", children: JSON.stringify(softwareAppSchema()) },
    ],
  }),
  component: Index,
});

const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110 shadow-glow";
const btnGhost =
  "inline-flex items-center justify-center gap-2 rounded-full border border-ink-border px-6 py-3 text-sm font-semibold text-ink-foreground transition hover:bg-ink-surface";
const eyebrow = "text-xs font-bold uppercase tracking-[0.18em] text-primary";


function Logo({ variant = "dark", className = "h-8 w-auto" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <img
      src={variant === "light" ? logoLight.url : logoDark.url}
      alt="Vupia"
      width={360}
      height={variant === "light" ? 120 : 153}
      className={`block h-8 w-auto ${className}`}
    />
  );
}

function Header() {
  return (
    <header className="relative z-30 px-3 pt-[22px] sm:px-5">
      <div className="mx-auto flex h-[62px] w-full max-w-[1108px] items-center justify-between gap-4 rounded-full border border-border bg-card px-4 shadow-soft sm:px-9 md:h-[72px]">
        <a href="#topo" className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4" aria-label="Vupia — início"><Logo /></a>
        <nav className="hidden items-center gap-7 whitespace-nowrap text-[15px] font-medium xl:gap-8 lg:flex" aria-label="Navegação principal">
          <a href="#como-funciona" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Como funciona</a>
          <a href="#beneficios" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Recursos</a>
          <a href="/achadinhos" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Achadinhos</a>
          <a href="#por-dentro" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Lojas Integradas</a>
          <a href="#reconhecimento" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Indique e ganhe</a>
          <a href="#oferta" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Planos</a>
        </nav>
        <nav className="hidden items-center gap-5 whitespace-nowrap text-[15px] font-medium md:flex lg:hidden" aria-label="Navegação principal (tablet)">
          <a href="#como-funciona" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Como funciona</a>
          <a href="/achadinhos" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Achadinhos</a>
          <a href="#oferta" className="transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4">Planos</a>
        </nav>
        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <Button asChild variant="ghost" className="h-10 rounded-full px-4 hover:bg-muted">
            <a href={vupiaConfig.loginUrl} target="_blank" rel="noopener noreferrer">Entrar</a>
          </Button>
          <Button asChild className="h-12 rounded-full px-7 font-semibold shadow-none">
            <a href="#oferta">Começar agora</a>
          </Button>
        </div>
        <details className="group relative sm:hidden">
          <summary className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full border border-border text-foreground focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="Abrir menu"><Menu className="h-5 w-5" /></summary>
          <nav className="absolute right-0 top-12 grid w-56 gap-1 rounded-2xl border border-border bg-card p-3 shadow-soft" aria-label="Navegação móvel">
            <a href="#como-funciona" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Como funciona</a>
            <a href="#beneficios" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Recursos</a>
            <a href="/achadinhos" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Achadinhos</a>
            <a href="#por-dentro" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Lojas Integradas</a>
            <a href="#reconhecimento" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Indique e ganhe</a>
            <a href="#oferta" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Planos</a>
            <a href={vupiaConfig.loginUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-muted">Entrar</a>
            <a href="#oferta" className="mt-1 rounded-lg bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground">Começar agora</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-warm text-foreground">
      <div className="relative isolate overflow-hidden bg-warm">
        <Header />
        <div className="container-v relative z-10 flex flex-col items-center px-[18px] pb-0 pt-8 text-center md:pt-11">
          <p className="mb-4 inline-flex items-center rounded-full bg-[color-mix(in_oklab,var(--primary)_10%,transparent)] px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-primary md:px-4 md:py-1.5 md:text-xs">
            A Plataforma dos Top Afiliados
          </p>
          <h1 className="max-w-[1000px] text-balance text-[clamp(2rem,8.8vw,2.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[clamp(2rem,4.4vw,3.5rem)] md:font-bold md:leading-[1.08] md:tracking-[-0.035em]">
            Transforme os melhores{" "}
            <span className="text-primary text-[0.92em]">achadinhos em vendas todos os dias</span>
          </h1>
          <p className="mt-[18px] max-w-[90%] text-pretty text-[17px] leading-[1.5] text-muted-foreground md:mt-3 md:max-w-[680px] md:text-[17px] md:leading-[1.55]">
            A Vupia monitora as melhores ofertas 24h por dia e envia tudo automático para seus grupos, já com o seu link de afiliado.
          </p>
          <div className="mt-5 flex w-full max-w-xl flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-6 md:mt-4">
            <Button asChild className="h-[56px] w-[90%] self-center rounded-full px-[30px] text-base font-semibold shadow-soft sm:w-auto md:h-[54px]">
              <a href="#oferta">Quero começar com a Vupia</a>
            </Button>
          </div>
          <div className="hero-mockup-window relative z-10 overflow-hidden">
            <img
              src={heroMockup.url}
              alt="Celular com a Vupia, ofertas selecionadas e envios programados para o WhatsApp."
              width="1920"
              height="640"
              fetchPriority="high"
              className="hero-mockup-image relative z-10 block h-auto w-full object-contain"
            />
          </div>
        </div>
        <div className="hero-dots hero-dots-left" aria-hidden />
        <div className="hero-dots hero-dots-right" aria-hidden />
        <div className="hero-strokes hero-strokes-left" aria-hidden><span /><span /></div>
        <div className="hero-strokes hero-strokes-right" aria-hidden><span /><span /></div>
        <svg className="hero-landscape" viewBox="0 0 1400 560" preserveAspectRatio="none" aria-hidden>
          <path className="hero-landscape-one" d="M0 95C160 60 250 86 385 166C530 252 700 260 840 186C1015 93 1173 7 1400 47V560H0Z" />
          <path className="hero-landscape-two" d="M0 340C170 210 308 174 470 276C634 379 745 402 908 321C1087 232 1228 151 1400 206V560H0Z" />
          <path className="hero-landscape-three" d="M0 448C174 318 311 293 480 390C638 481 763 488 933 398C1112 303 1252 278 1400 345V560H0Z" />
          <path className="hero-landscape-four" d="M0 560V502C170 440 318 371 484 459C649 547 787 536 950 447C1110 360 1261 370 1400 427V560Z" />
        </svg>
      </div>
    </section>
  );
}

function Pain() {
  const cards = [
    { t: <>Encontrar o que<br className="hidden xl:block" /> vale a pena divulgar</>, d: "Abrir várias lojas, procurar produtos, comparar preços e descobrir quais ofertas realmente estão boas.", consequence: "Você perde tempo antes mesmo de começar a divulgar." },
    { t: <>Preparar tudo<br className="hidden xl:block" /> para enviar</>, d: "Gerar seu link de afiliado, organizar a oferta, conferir preço e comissão e deixar a mensagem pronta para compartilhar.", consequence: "Uma tarefa simples acaba virando vários passos." },
    { t: <>Repetir isso<br className="hidden xl:block" /> todos os dias</>, d: "Enviar ofertas nos grupos, acompanhar novas oportunidades e manter uma frequência mesmo nos dias mais corridos.", consequence: "Quando você para, seus grupos também param." },
  ];
  return (
    <section className="relative overflow-hidden bg-background py-12 text-foreground md:py-20">
      <div className="container-v max-w-[1280px] text-center">
        <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[1.5px] text-primary sm:text-xs sm:tracking-[2px]">Divulgue mais em menos tempo</p>
        <h2 className="mx-auto mt-5 max-w-[1040px] text-[clamp(1.75rem,7.4vw,2.75rem)] font-extrabold leading-[1.05] tracking-[-0.04em] md:text-[clamp(2rem,4.2vw,3.25rem)] md:font-bold md:leading-[1.12] md:tracking-normal">
          Vender como afiliado <span className="block text-primary text-[0.8em] md:text-[0.92em]">não deveria dar tanto trabalho</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[800px] text-[15px] font-normal leading-[1.5] text-routine-description md:text-[17px] md:leading-[1.5]">
          Encontrar uma boa oferta é só o começo. Ainda tem preço, comissão, link, mensagem e grupos para cuidar todos os dias.
        </p>
        {/* Mini benefícios — somente mobile */}
        <div className="mx-auto mt-7 grid max-w-md grid-cols-3 gap-2 md:hidden">
          <span className="flex flex-col items-center gap-1.5 rounded-[14px] bg-[color-mix(in_oklab,var(--primary)_7%,var(--card))] px-2 py-3 text-[12px] font-semibold leading-tight text-foreground">
            <Clock className="h-4 w-4 text-primary" /> Economize tempo
          </span>
          <span className="flex flex-col items-center gap-1.5 rounded-[14px] bg-[color-mix(in_oklab,var(--primary)_7%,var(--card))] px-2 py-3 text-[12px] font-semibold leading-tight text-foreground">
            <BarChart3 className="h-4 w-4 text-primary" /> Tenha mais vendas
          </span>
          <span className="flex flex-col items-center gap-1.5 rounded-[14px] bg-[color-mix(in_oklab,var(--primary)_7%,var(--card))] px-2 py-3 text-[12px] font-semibold leading-tight text-foreground">
            <Zap className="h-4 w-4 text-primary" /> Tudo no automático
          </span>
        </div>
        <div className="mt-10 grid items-stretch gap-4 text-left md:grid-cols-3 md:gap-5">
          {cards.map(({ t, d, consequence }, i) => (
            <article key={i} className={`rounded-[22px] border p-6 shadow-routine lg:p-7 ${i === 1 ? "border-routine-featured bg-routine-featured" : "border-routine-border bg-routine-card"}`}>
              <span className="inline-flex h-8 w-10 items-center justify-center rounded-[10px] bg-routine-number text-sm font-semibold text-routine-featured-title">0{i + 1}</span>
              <h3 className={`mt-[18px] text-xl font-bold leading-[1.25] lg:text-2xl ${i === 1 ? "text-routine-featured-title" : "text-routine-title"}`}>{t}</h3>
              <p className={`mt-[18px] text-[15px] font-normal leading-6 lg:text-base ${i === 1 ? "text-routine-featured-description" : "text-routine-description"}`}>{d}</p>
              <div className={`mb-4 mt-2 h-px w-full ${i === 1 ? "bg-routine-featured-divider" : "bg-routine-divider"}`} aria-hidden />
              <p className={`text-[15px] font-semibold leading-[1.4] lg:text-base ${i === 1 ? "text-routine-featured-title" : "text-routine-title"}`}>{consequence}</p>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-9 text-center text-lg font-normal leading-relaxed text-foreground md:text-[21px]">
          Agora imagine tudo isso acontecendo <span className="font-medium text-primary">sem você precisar repetir o mesmo trabalho todos os dias.</span>
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild className="h-[54px] rounded-full px-[30px] text-base font-semibold shadow-soft">
            <a href="#oferta">Quero simplificar minha rotina</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}


const vslRows = [
  { img: vslAirfryer, name: "Air Fryer Digital 4L", store: "Shopee · WhatsApp", when: "09:15" },
  { img: vslHeadphone, name: "Fone Bluetooth sem fio", store: "Amazon · WhatsApp", when: "16:30" },
  { img: vslAirfryer, name: "Tênis esportivo casual", store: "Mercado Livre · WhatsApp", when: "19:00" },
];
const vslTabs = ["Visão geral", "Envios", "Lojas", "WhatsApp"];
const vslNav = [[Home, "Início"], [Search, "Explorar ofertas"], [Settings, "Automações"], [Users, "Meus grupos"], [Link2, "Integrações"]];

function HostVslPlayer() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const player = document.createElement("hostvsl-player");
    player.setAttribute("id", "vid-09999797-a7ca-4058-99bc-5ea26b163861");
    player.setAttribute(
      "data-video",
      "https://prod-hostvsl.b-cdn.net/bf740540-7398-4153-9db7-a41a6866c02d/09999797-a7ca-4058-99bc-5ea26b163861/videoInformations.js?VIDEO_ORIGIN=ORIGINAL",
    );
    el.appendChild(player);
    if (!document.querySelector('script[src="https://script-prod.b-cdn.net/V0.700/hostvsl-player.js"]')) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://script-prod.b-cdn.net/V0.700/hostvsl-player.js";
      document.body.appendChild(script);
    }
    return () => {
      player.remove();
    };
  }, []);
  return <div ref={ref} className="aspect-video w-full" />;
}

function Steps() {
  return (
    <section id="como-funciona" className="scroll-mt-24 bg-steps-background py-14 text-steps-foreground lg:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-4 text-center sm:px-8">
        <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-steps-rose">Como funciona</p>
        <h2 className="mt-6 text-[clamp(2rem,8.8vw,2.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] lg:text-[56px] lg:leading-[1.05] lg:tracking-[-0.035em]">
          <span className="block text-steps-foreground">Veja a Vupia</span>
          <span className="block text-[0.92em] text-steps-rose">funcionando na prática</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[720px] text-base leading-[1.5] text-vsl-subtitle lg:text-lg">
          Conheça por dentro como encontrar boas ofertas, programar seus envios e acompanhar tudo em um só lugar.
        </p>

        <div className="relative mx-auto mt-10 w-full max-w-[980px] overflow-hidden rounded-[24px] border border-vsl-frame-border bg-vsl-sidebar text-left shadow-[0_40px_120px_-24px_rgb(0_0_0/65%)] lg:rounded-[28px]">
          <HostVslPlayer />
        </div>

        <a href="#oferta" className="mt-6 inline-flex h-[54px] items-center justify-center gap-2 rounded-full bg-primary px-[30px] text-base font-semibold text-primary-foreground shadow-soft transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4">
          Começar com a Vupia
        </a>
      </div>
    </section>
  );
}


const featureCards: { icon: ComponentType<{ className?: string; strokeWidth?: number }>; title: string; desc: string[] }[] = [
  { icon: WhatsAppIcon, title: "Oferta pelo WhatsApp", desc: ["Envie um link pelo WhatsApp", "A Vupia monta a oferta com seu link", "e envia para os seus grupos"] },
  { icon: Send, title: "Automações de ofertas", desc: ["Configure suas regras de envio", "A Vupia publica ofertas nos grupos", "sem você enviar uma por uma"] },
  { icon: FlipHorizontal2, title: "Oferta Espelho", desc: ["Monitore ofertas de outros grupos", "Replique nos seus automaticamente", "com o seu link de afiliado"] },
  { icon: Megaphone, title: "Disparo em massa", desc: ["Envie uma oferta para vários grupos", "sem copiar e colar em cada um", "Use @all para chamar a atenção"] },
  { icon: Link2, title: "Divulgador Inteligente", desc: ["Converta os links dos produtos", "em links com seu código de afiliado", "prontos para compartilhar"] },
  { icon: Search, title: "Explorar ofertas", desc: ["Encontre ofertas das lojas conectadas", "Escolha o que combina com seu público", "e salve para divulgar quando quiser"] },
  { icon: CalendarClock, title: "Agendamento de envios", desc: ["Prepare suas ofertas com antecedência", "Escolha o dia e o horário de envio", "A Vupia publica no momento definido"] },
  { icon: Users, title: "Segmentação por público", desc: ["Separe seus grupos por interesse", "Escolha as ofertas para cada público", "e organize quem recebe cada envio"] },
  { icon: Ticket, title: "Ofertas e cupons", desc: ["Consulte ofertas e cupons das lojas", "Escolha as oportunidades para divulgar", "e compartilhe com seus grupos"] },
  { icon: MessageSquareText, title: "Mensagens personalizadas", desc: ["Personalize os textos das ofertas", "Mantenha seu jeito de se comunicar", "nas mensagens enviadas aos grupos"] },
  { icon: MousePointerClick, title: "Envio manual", desc: ["Escolha a oferta que quer divulgar", "Selecione os grupos que vão receber", "e faça o envio quando desejar"] },
  { icon: Store, title: "Vitrine de ofertas", desc: ["Reúna seus achadinhos em uma vitrine", "Compartilhe com seu público", "e facilite o acesso aos produtos"] },
];

function Features() {
  return (
    <section id="beneficios" className="bg-features-bg px-5 py-12 text-foreground md:px-6 md:py-[72px] lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <p className="text-center text-xs font-bold uppercase tracking-[0.12em] text-primary">Conheça os recursos da Vupia</p>
        <h2 className="mx-auto mt-4 max-w-[820px] text-balance text-center text-[clamp(1.75rem,7.4vw,2rem)] font-extrabold leading-[1.06] tracking-[-0.03em] md:text-4xl md:font-bold md:leading-[1.12] md:tracking-[-0.025em] lg:text-[44px]">
          <span className="text-foreground">Os melhores recursos para</span>{" "}
          <span className="text-primary">aumentar suas vendas</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[780px] text-center text-base leading-[1.55] text-features-desc lg:text-lg">
          Encontre ofertas, gere links de afiliado e automatize seus envios com recursos para organizar seus grupos e acompanhar seus resultados
        </p>
        <div className="mt-7 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-6">
          {featureCards.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="flex h-full min-w-0 flex-col rounded-[16px] border border-features-card-border bg-card p-6 shadow-features transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_10px_30px_-12px_rgb(0_0_0/12%)]"
            >
              <div className="flex min-w-0 items-center gap-3.5 lg:min-h-[48px]">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-[14px] bg-features-icon-bg">
                  <Icon className="h-[23px] w-[23px] text-primary" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="min-w-0 text-lg font-bold leading-[1.3] text-features-title">{title}</h3>
              </div>
              <p className="mt-4 text-[15px] leading-[24px] text-features-desc lg:text-base">
                {desc.map((line, i) => (
                  <Fragment key={i}>
                    {i > 0 && <span className="lg:hidden" aria-hidden="true"> </span>}
                    <span className="lg:block">{line}</span>
                  </Fragment>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type StoreEntry =
  | { name: string; src: string; alt?: string; caption?: string }
  | { name: string; text: string }
  | { name: string; tiktok: true };

const priorityStores: StoreEntry[] = [
  { name: "Shopee", src: shopeeLogo },
  { name: "SHEIN", src: sheinLogo },
  { name: "TikTok Shop", tiktok: true },
  { name: "AliExpress", src: aliexpressLogo },
  { name: "Temu", src: temuLogo },
  { name: "Mercado Livre", src: mercadoLivreLogo },
  { name: "Magalu", src: magaluLogo },
  { name: "Amazon", src: amazonLogo },
];

const otherStores: StoreEntry[] = [
  { name: "Netshoes", src: netshoesLogo },
  { name: "Casas Bahia", src: casasBahiaLogo },
  { name: "Ponto Frio", src: pontoFrioLogo },
  { name: "Americanas", src: americanasLogo },
  { name: "KaBuM!", src: kabumLogo },
  { name: "Centauro", src: centauroLogo },
  { name: "Renner", src: rennerLogo },
  { name: "Riachuelo", src: riachueloLogo },
  { name: "Dafiti", src: dafitiLogo },
  { name: "Zattini", text: "ZATTINI" },
  { name: "O Boticário", src: boticarioLogo },
  {
    name: "Rede Awin",
    src: awinLogo,
    alt: "Awin — rede de afiliados",
    caption: "Rede de afiliados",
  },
];

// Área interna padrão: todas as logos preenchem a mesma caixa, escalando
// proporcionalmente (object-contain) em vez de terem alturas fixas diferentes.
function StoreLogoContent({ store }: { store: StoreEntry }) {
  if ("tiktok" in store) {
    return (
      <span
        className="flex h-[42%] max-h-[46px] w-[74%] items-center justify-center gap-1 md:h-[44%] md:max-h-[50px] md:w-[66%] md:gap-1.5"
        aria-label="TikTok Shop"
        role="img"
      >
        <img src={tiktokLogo} alt="" loading="lazy" decoding="async" className="h-full min-w-0 w-auto flex-1 object-contain" />
        <span className="shrink-0 text-[clamp(1rem,3.6vw,1.35rem)] font-extrabold leading-none tracking-tight text-foreground">Shop</span>
      </span>
    );
  }
  if ("text" in store) {
    return <span className="text-[1.35rem] font-extrabold tracking-[0.18em] text-foreground md:text-[1.55rem]">{store.text}</span>;
  }
  const logo = (
    <img
      src={store.src}
      alt={store.alt ?? store.name}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-contain"
    />
  );

  if (store.caption) {
    return (
      <span className="flex h-[70%] w-[70%] flex-col items-center justify-center gap-1">
        <span className="flex h-[70%] w-full items-center justify-center">{logo}</span>
        <span className="text-xs font-medium leading-none text-stores-desc md:text-[13px]">{store.caption}</span>
      </span>
    );
  }

  return <span className="flex h-[52%] w-[74%] items-center justify-center md:h-[56%] md:w-[66%]">{logo}</span>;
}

function Stores() {
  return (
    <section id="por-dentro" className="relative scroll-mt-24 overflow-hidden bg-stores-bg py-14 text-foreground md:py-[72px]">
      <div className="stores-glow pointer-events-none absolute inset-0 opacity-70 md:opacity-100" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 md:px-8">
        <p className="mx-auto inline-flex rounded-full border border-stores-pill-border bg-stores-pill px-4 py-1.5 text-[13px] font-semibold text-stores-pink md:text-sm">
          Integrações Disponíveis
        </p>
        <h2 className="mx-auto mt-5 max-w-[360px] text-balance text-[clamp(1.5rem,6.6vw,1.75rem)] font-extrabold leading-[1.15] tracking-[-0.03em] md:max-w-none md:text-[clamp(1.75rem,4.2vw,3.5rem)] md:leading-[1.12]">
          <span className="text-stores-title md:block">As lojas que seu público ama</span>{" "}
          <span className="text-stores-pink md:block">reunidas para você vender mais</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-balance text-[15px] leading-[1.55] text-stores-desc md:max-w-none md:whitespace-nowrap md:text-lg">
          Encontre ofertas das lojas que seu público já conhece e divulgue com seu link de afiliado.
        </p>
        <ul className="mx-auto mt-10 flex w-full flex-wrap justify-center gap-3 lg:gap-4">
          {priorityStores.map((store) => (
            <li
              key={store.name}
              className="flex h-[92px] w-[calc(50%-6px)] items-center justify-center rounded-[16px] border border-stores-border-priority bg-card px-4 shadow-soft sm:h-[100px] sm:w-[calc(33.333%-8px)] lg:h-[110px] lg:w-[calc(25%-12px)] lg:px-6"
            >
              <StoreLogoContent store={store} />
            </li>
          ))}
        </ul>
        <ul className="mx-auto mt-6 flex w-full flex-wrap justify-center gap-3 lg:mt-7 lg:gap-4">
          {otherStores.map((store) => (
            <li
              key={store.name}
              className="flex h-[92px] w-[calc(50%-6px)] items-center justify-center rounded-[16px] border border-stores-border bg-card px-3 sm:h-[100px] sm:w-[calc(33.333%-8px)] lg:h-[110px] lg:w-[calc(25%-12px)] lg:px-5"
            >
              <StoreLogoContent store={store} />
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 flex items-center justify-center gap-2 text-[15px] font-semibold text-stores-title md:text-sm md:font-medium md:text-stores-desc">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-stores-pink" aria-hidden="true" />
          Novas lojas e oportunidades chegando à Vupia
        </p>
      </div>
    </section>
  );
}

const comparisonPairs: [string, string][] = [
  ["Procurar ofertas em vários sites", "Ofertas reunidas em um só lugar"],
  ["Converter cada link manualmente", "Links de afiliado prontos"],
  ["Copiar e colar em cada grupo", "Envio para vários grupos de uma vez"],
  ["Voltar ao celular para publicar", "Envios agendados e automáticos"],
  ["Trocar links de outros grupos", "Oferta Espelho com seu link"],
];

function Comparison() {
  return (
    <section className="bg-[#FAF7F5] py-14 text-foreground md:py-[72px]">
      <div className="mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6 md:px-8">
        <p className="text-[11px] font-semibold uppercase tracking-[2px] text-primary sm:text-xs">
          Veja a diferença
        </p>
        <h2 className="mx-auto mt-4 max-w-[340px] text-balance text-[clamp(1.5rem,6.6vw,1.75rem)] font-extrabold leading-[1.15] tracking-[-0.03em] md:max-w-none md:text-[clamp(1.75rem,4.2vw,3.5rem)] md:leading-[1.12]">
          <span className="text-stores-title md:block">Divulgue mais ofertas</span>{" "}
          <span className="text-stores-pink md:block">sem multiplicar seu trabalho</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-balance text-[15px] leading-[1.55] text-stores-desc md:text-lg">
          Veja como a Vupia simplifica as tarefas que você repetiria todos os dias
        </p>

        {/* Desktop: dois cards lado a lado */}
        <div className="mx-auto mt-10 hidden gap-6 md:grid md:grid-cols-2">
          <div className="rounded-[20px] border border-stores-border bg-muted/40 p-7 text-left lg:p-8">
            <h3 className="text-lg font-bold text-stores-title">Fazendo manualmente</h3>
            <ul className="mt-5 divide-y divide-stores-border/70">
              {comparisonPairs.map(([manual]) => (
                <li key={manual} className="flex min-h-[52px] items-center gap-3 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-base text-stores-desc lg:whitespace-nowrap">{manual}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[20px] border border-primary/60 bg-card p-7 text-left shadow-soft lg:p-8">
            <h3 className="inline-flex rounded-full bg-stores-bg px-4 py-1.5 text-lg font-bold text-primary">Com a Vupia</h3>
            <ul className="mt-5 divide-y divide-stores-border/70">
              {comparisonPairs.map(([, vupia]) => (
                <li key={vupia} className="flex min-h-[52px] items-center gap-3 py-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-base font-medium text-stores-title lg:whitespace-nowrap">{vupia}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile/tablet: comparação por pares */}
        <div className="mx-auto mt-8 space-y-4 md:hidden">
          {comparisonPairs.map(([manual, vupia]) => (
            <div key={manual} className="overflow-hidden rounded-[20px] border border-stores-border bg-card text-left">
              <div className="flex items-start gap-3 border-b border-stores-border/70 bg-muted/40 px-5 py-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <Minus className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">Fazendo manualmente</p>
                  <p className="mt-1 text-[15px] leading-snug text-stores-desc">{manual}</p>
                </div>
              </div>
              <div className="flex items-start gap-3 px-5 py-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-primary">Com a Vupia</p>
                  <p className="mt-1 text-[15px] font-medium leading-snug text-stores-title">{vupia}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button asChild className="mt-9 h-[54px] w-full rounded-full px-[30px] text-base font-semibold shadow-soft sm:w-auto">
          <a href="#oferta">Quero começar com a Vupia</a>
        </Button>
      </div>
    </section>
  );
}

function Cashback() {
  const steps = [
    ["01", "Assine a Vupia", "Faça sua assinatura normalmente."],
    ["02", "Receba seu Vale Bônus", "Após a confirmação da compra, o benefício é liberado para o CPF cadastrado."],
    ["03", "Resgate e use", "Acesse o Vale Bônus e escolha entre diversas marcas parceiras."],
  ];

  return (
    <section id="vale-bonus" className="relative scroll-mt-24 overflow-hidden bg-cashback-bg pt-14 text-cashback-foreground md:pt-20">
      <div className="cashback-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-v relative z-10 grid items-end gap-4 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
        <div className="text-center pb-2 md:pb-20 lg:pb-16 lg:text-left">
          <p className="inline-flex rounded-full bg-cashback-pill px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-cashback-rose">
            Sua compra rende mais
          </p>
          <h2 className="mt-6 text-[clamp(1.85rem,8vw,2.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] md:text-[clamp(2.25rem,5vw,4rem)] md:leading-[1.08] md:tracking-[-0.035em]">
            Assine a Vupia e receba{" "}
            <span className="text-[0.92em] text-cashback-rose">100% do valor de volta em Vale Bônus</span>
          </h2>
          <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-cashback-pill px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-cashback-desc md:text-xs">
            100% do valor da assinatura em créditos
          </p>
          <p className="mx-auto mt-5 max-w-[650px] text-lg leading-[1.5] text-cashback-desc lg:mx-0 lg:text-xl">
            O valor da sua assinatura volta para você em créditos Vale Bônus, que podem ser usados em marcas parceiras.
          </p>
          <p className="mx-auto mt-3 flex max-w-[650px] items-center justify-center gap-1.5 text-[13px] leading-[1.4] text-cashback-desc/75 lg:mx-0 lg:justify-start">
            <ShieldCheck className="h-4 w-4 shrink-0 text-cashback-rose" aria-hidden="true" />
            Resgate liberado após a confirmação da compra e vinculado ao CPF informado no pagamento.
          </p>

          <ol className="mt-9 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-0 lg:justify-start">
            {steps.map(([number, label, description], index) => (
              <Fragment key={number}>
                {index > 0 && (
                  <span className="hidden shrink-0 items-center gap-1 px-2 pt-3.5 sm:flex md:px-3 lg:px-4" aria-hidden="true">
                    <ChevronRight className="arrow-fade h-4 w-4 text-cashback-rose" />
                    <ChevronRight className="arrow-nudge h-6 w-6 text-cashback-rose drop-shadow-[0_6px_18px_rgb(201_44_98/55%)]" />
                  </span>
                )}
                <li className="flex w-full max-w-[300px] flex-col items-center text-center sm:w-auto sm:max-w-[190px] sm:items-start sm:text-left lg:flex-1">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-cashback-rose text-lg font-extrabold text-cashback-foreground shadow-[0_10px_30px_-8px_rgb(201_44_98/55%)]">{number}</span>
                  <span className="mt-3 text-[15px] font-bold leading-[1.3] text-cashback-title">{label}</span>
                  <span className="mt-1.5 text-[13px] leading-[1.45] text-cashback-desc">{description}</span>
                </li>
              </Fragment>
            ))}
          </ol>
          <p className="mt-6 text-[12px] uppercase tracking-[0.14em] text-cashback-desc/70">
            Resgate em <span className="font-semibold text-cashback-title/90">valebonus.com.br</span>
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-[520px] items-end justify-center lg:max-w-[640px] lg:justify-end">
          <img
            src={valeBonusPhone.url}
            alt="Aplicativo Vale Bônus aberto em um celular"
            width="576"
            height="508"
            loading="lazy"
            decoding="async"
            className="relative z-10 block h-auto w-[118%] max-w-none -mx-[9%] object-contain object-bottom [filter:drop-shadow(0_24px_48px_rgb(0_0_0/35%))] sm:w-full sm:max-w-[460px] sm:mx-0 lg:max-w-[600px]"
          />
        </div>

      </div>
    </section>
  );
}

function Offer() {
  const divulgacao = [
    "Grupos ilimitados",
    "Envios ilimitados",
    "Agendamento de ofertas",
    "Envio automático nos grupos",
  ];
  const acessoCompleto = [
    "Todas as funções",
    "Shopee, Amazon e + lojas",
    "Suporte via WhatsApp",
    "Acesso por 12 meses",
  ];
  const checkoutCtaRef = useRef<HTMLAnchorElement | null>(null);
  const [accessDateLabel, setAccessDateLabel] = useState("");
  useEffect(() => {
    // A promoção vale "até hoje": exibir sempre o dia atual da visita
    // no fuso America/Sao_Paulo, recalculado a cada visita.
    const formatter = new Intl.DateTimeFormat("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setAccessDateLabel(formatter.format(new Date()));
  }, []);

  // Duas pulsações no CTA quando o card de preço entra na tela (uma vez só).
  useEffect(() => {
    const el = checkoutCtaRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("cta-pulse-run");
            observer.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="oferta"
      className="relative scroll-mt-16 overflow-hidden bg-[linear-gradient(180deg,var(--offer-bg)_0%,var(--offer-bg-deep)_100%)] pb-20 pt-10 text-foreground md:pb-24 md:pt-14"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-56 top-24 h-[620px] w-[620px] rounded-full bg-offer-band-bg/30 blur-3xl md:bg-offer-band-bg/60" />
        <div className="absolute -right-64 -top-24 h-[680px] w-[680px] rounded-full bg-offer-band-bg/30 blur-3xl md:bg-offer-band-bg/70" />
        <svg className="absolute -left-20 bottom-0 hidden h-[420px] w-[420px] md:block" viewBox="0 0 200 200" fill="none">
          <path d="M10 195 C 45 125, 135 155, 192 55" stroke="var(--offer-card-border)" strokeWidth="1.5" />
          <path d="M-5 150 C 60 108, 118 142, 198 18" stroke="rgb(201 44 98 / 16%)" strokeWidth="1.5" />
        </svg>
        <svg className="absolute -right-20 top-4 hidden h-[420px] w-[420px] md:block" viewBox="0 0 200 200" fill="none">
          <path d="M195 8 C 158 82, 62 48, 8 145" stroke="var(--offer-card-border)" strokeWidth="1.5" />
          <path d="M205 60 C 150 118, 70 96, -5 190" stroke="rgb(201 44 98 / 16%)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="container-v relative">
        <div className="mx-auto max-w-[820px] text-center">
          <img
            src={logoDark.url}
            alt="Vupia"
            width={360}
            height={120}
            className="mx-auto block h-auto w-[120px] md:w-[136px]"
          />
          <h2 className="mt-4 font-display text-[clamp(1.55rem,6.6vw,2rem)] font-extrabold leading-[1.08] tracking-[-0.03em] text-offer-headline md:text-[clamp(2.25rem,3.4vw,3.25rem)] md:leading-[1.06]">
            Automatize suas ofertas
          </h2>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-[560px] md:mt-12">
          <div className="relative overflow-hidden rounded-[24px] border border-offer-card-border bg-[color:var(--offer-card-surface)] bg-[image:var(--offer-card-image)] px-6 pb-8 pt-9 shadow-[0_20px_60px_rgb(36_27_35/8%),0_6px_20px_rgb(201_44_98/6%)] sm:px-10 sm:pb-10 sm:pt-11">
            <div className="-mx-6 -mt-9 mb-6 flex flex-col items-center justify-center gap-1 bg-[#241B23] px-4 py-3 text-center sm:-mx-10 sm:-mt-11">
              <p className="text-[15px] font-semibold leading-tight text-white sm:text-[16px]">
                Comprando hoje, ganhe R$ 300 de desconto
              </p>
              {accessDateLabel && (
                <p className="text-[11px] font-medium text-white/70 sm:text-[12px]">
                  Promoção válida até hoje, {accessDateLabel}
                </p>
              )}
            </div>

            <div className="mt-5 text-center">
              <div className="mb-3 flex items-center justify-center gap-3">
<span className="text-[15px] font-semibold text-offer-card-sub sm:text-base">De <span className="line-through">R$ 545</span> por</span>
                <span className="rounded-full bg-offer-card-pill-bg px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-offer-card-pill-ink">55% de desconto</span>
              </div>
              <p className="whitespace-nowrap font-display text-[42px] font-extrabold leading-none tracking-[-0.03em] text-offer-card-price [text-shadow:0_2px_18px_rgb(0_0_0/22%)] sm:text-[58px]">
                12x de R$ 24,60
              </p>
              <p className="mt-3 text-[16px] font-semibold text-offer-card-sub sm:text-lg">
                ou R$ 245 à vista
              </p>
            </div>

            <a
              href={vupiaConfig.checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              ref={checkoutCtaRef}
              onAnimationEnd={() => checkoutCtaRef.current?.classList.remove("cta-pulse-run")}
              className="mx-auto mt-7 flex h-[54px] w-full items-center justify-center whitespace-nowrap rounded-full bg-[#15803D] px-8 text-[17px] font-bold text-white shadow-[0_6px_16px_rgb(21_128_61/28%)] transition-colors duration-[180ms] hover:bg-[#116632] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15803D] sm:w-auto sm:px-[44px] sm:text-lg"
            >
              Quero garantir meu acesso
            </a>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-[11px] text-offer-card-guarantee sm:text-xs">
              <ShieldCheck className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> 7 dias de garantia <span className="text-offer-card-accent font-semibold">•</span>{" "}
              <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Acesso imediato <span className="text-offer-card-accent font-semibold">•</span>{" "}
              <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5" /> Pagamento seguro
            </p>

            <div className="my-6 h-px bg-offer-card-divider" />

            <div className="grid gap-8 sm:grid-cols-2 sm:gap-0">
              <div>
                <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-offer-card-ink">
                  <Megaphone className="h-4 w-4 text-offer-card-accent" /> Divulgação
                </p>
                <ul className="mt-4 space-y-3">
                  {divulgacao.map((item) => (
                    <li key={item} className="flex items-center gap-3 whitespace-nowrap text-[13px] font-medium text-offer-card-feature sm:text-[14px]">
                      <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-offer-card-check-bg">
                        <Check className="h-3 w-3 text-offer-card-check-ink" strokeWidth={3.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="sm:border-l sm:border-offer-divider sm:pl-8">
                <p className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.18em] text-offer-card-ink">
                  <Star className="h-4 w-4 text-offer-card-accent" /> Acesso completo
                </p>
                <ul className="mt-4 space-y-3">
                  {acessoCompleto.map((item) => (
                    <li key={item} className="flex items-center gap-3 whitespace-nowrap text-[13px] font-medium text-offer-card-feature sm:text-[14px]">
                      <span className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-offer-card-check-bg">
                        <Check className="h-3 w-3 text-offer-card-check-ink" strokeWidth={3.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


function PartnerRecognition() {
  return (
    <section
      id="reconhecimento"
      className="relative scroll-mt-16 overflow-hidden bg-partner-bg py-16 text-partner-foreground md:py-24"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(217_29_99/22%),transparent)] blur-2xl" />
        <div className="absolute bottom-[-140px] left-1/2 h-[300px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(217_29_99/10%),transparent)] blur-3xl" />
      </div>

      <div className="container-v relative text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-primary">
          Programa de parceiros
        </p>
        <h2 className="mx-auto mt-4 max-w-[760px] font-display text-[clamp(2rem,7.5vw,3.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] md:mt-5 md:text-[clamp(2.25rem,4vw,3.75rem)]">
          Transforme suas indicações em{" "}
          <span className="bg-[linear-gradient(90deg,var(--offer-rose)_0%,var(--offer-rose-deep)_100%)] bg-clip-text text-transparent">
            conquistas
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-base leading-[1.5] text-partner-sub md:mt-5 md:text-lg">
          Indique a Vupia, gere resultados e desbloqueie placas exclusivas ao alcançar novos
          marcos.
        </p>
        <div className="relative mx-auto mt-10 max-w-[760px] md:mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(217_29_99/18%),transparent)] blur-2xl"
          />
          <img
            src={placasReconhecimento.url}
            alt="Placas de reconhecimento Vupia: 100K em bronze, 1M em ouro e 500K em prata"
            className="relative mx-auto -mt-6 -mb-4 h-auto w-full max-w-[760px] [filter:drop-shadow(0_24px_60px_rgb(0_0_0/45%))] md:-mt-10 md:-mb-6"
            width={1536}
            height={1024}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="mt-8 md:mt-10">
          <a
            href={vupiaConfig.whatsappPartnerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-[15px] font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)] transition-transform duration-200 hover:-translate-y-0.5 md:px-8 md:py-3.5 md:text-base"
          >
            Conhecer o programa de parceiros
          </a>
        </div>
      </div>
    </section>
  );
}

type ProofCard = { name: string; initials: string; time: string; quote: string; photo?: string };

const proofReviews: ProofCard[] = [
  { name: "Rafaela Almeida", initials: "RA", photo: proofRafaela, time: "há 3 dias", quote: "A Vupia mudou minha rotina! Consigo organizar todas as ofertas em um só lugar e compartilhar com minha família. Muito prática e fácil de usar!" },
  { name: "Achadinhos da Amanda", initials: "AA", photo: proofGroupAmanda, time: "há 5 dias", quote: "A automação dos grupos é o que mais nos ajuda. Antes perdíamos horas enviando ofertas, agora a Vupia faz isso por nós. Ganhamos tempo para focar em outras coisas." },
  { name: "Tatiane Pereira", initials: "TP", photo: proofTatiane, time: "há 4 dias", quote: "Muito fácil de usar, mesmo pra quem não tem muita afinidade com tecnologia. A Vupia deixa tudo organizado e ainda me ajuda a economizar tempo todos os dias." },
  { name: "Ofertas do Ricardo", initials: "OR", photo: proofGroupRicardo, time: "há 1 semana", quote: "Ferramenta completa e confiável. Automatizei os grupos e hoje economizo muito tempo. Recomendo para quem trabalha com ofertas!" },
  { name: "Felipe Nascimento", initials: "FN", photo: proofFelipe, time: "há 1 semana", quote: "Suporte excelente! Tive uma dúvida e fui atendido super rápido. A equipe realmente se importa com o cliente." },
  { name: "Achadinhos da Família", initials: "AF", photo: proofGroupJacqueline, time: "há 1 semana", quote: "Estamos gostando muito! Conseguimos salvar as ofertas favoritas e compartilhar com os grupos da família. Tudo em um só lugar, de forma simples." },
  { name: "Juliana Martins", initials: "JM", photo: proofJuliana, time: "há 3 semanas", quote: "Interface simples e intuitiva. Em poucos minutos já estava organizando minhas ofertas. Parabéns pelo trabalho!" },
  { name: "Promoções do Lucas", initials: "PL", photo: proofGroupLucas, time: "há 2 semanas", quote: "Uso a Vupia para organizar as promoções da minha loja e tem sido incrível. Tudo fica mais organizado e visual, e meus clientes amam!" },
  { name: "Cupons do Marcos", initials: "CM", photo: proofGroupMarcos, time: "há 3 semanas", quote: "A Vupia realmente facilita. Uso no meu celular o tempo todo e funciona super bem. Já indiquei para vários amigos!" },
];

function ProofStars({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <span className="flex gap-0.5" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${className} fill-proof-star text-proof-star`} />
      ))}
    </span>
  );
}

function ProofCardItem({ card }: { card: ProofCard }) {
  return (
    <article className="rounded-[20px] border border-proof-border bg-proof-card p-[22px] shadow-[0_10px_35px_rgb(36_27_35/4%)] transition-shadow hover:shadow-[0_14px_40px_rgb(36_27_35/9%)]">
      <div className="flex items-start gap-5">
        {card.photo ? (
          <img src={card.photo} alt={card.name} width={60} height={60} loading="lazy" className="h-[60px] w-[60px] shrink-0 rounded-full object-cover" />
        ) : (
          <span className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-full bg-proof-avatar-bg text-lg font-semibold text-proof-rose">
            {card.initials}
          </span>
        )}
        <div className="min-w-0 pb-4">
          <p className="truncate text-[15px] font-bold text-proof-title">{card.name}</p>
          <div className="mt-1 flex items-center gap-2">
            <ProofStars className="h-[18px] w-[18px]" />
            <span className="ml-4 text-sm text-proof-desc">{card.time}</span>
          </div>
        </div>
      </div>
      <p className="-mt-2 pl-[80px] text-base leading-[1.5] text-proof-title/90">“{card.quote}”</p>
    </article>
  );
}

function ProofColumn({ cards, variant, className = "" }: { cards: ProofCard[]; variant: "up" | "down"; className?: string }) {
  return (
    <div className={`h-full overflow-hidden ${className}`}>
      <div className={`${variant === "up" ? "proof-col" : "proof-col-reverse"} flex flex-col gap-4 pb-4`}>
        {[...cards, ...cards].map((c, i) => <ProofCardItem key={`${c.name}-${i}`} card={c} />)}
      </div>
    </div>
  );
}

function SocialProof() {
  const colA = proofReviews.filter((_, i) => i % 3 === 0);
  const colB = proofReviews.filter((_, i) => i % 3 === 1);
  const colC = proofReviews.filter((_, i) => i % 3 === 2);
  return (
    <section className="overflow-hidden bg-proof-bg" aria-label="Prova social">
      <div className="mx-auto w-full max-w-[1180px] px-6 py-16 md:py-[90px]">
          <div className="mx-auto text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <p className="text-[64px] font-semibold leading-none md:text-[76px]" aria-label="Google">
                <span className="text-google-blue">G</span><span className="text-google-red">o</span><span className="text-google-yellow">o</span><span className="text-google-blue">g</span><span className="text-google-green">l</span><span className="text-google-red">e</span>
              </p>
              <p className="text-[72px] font-extrabold leading-none tracking-tight text-proof-title md:text-[86px]">4,9</p>
            </div>
            <div className="mt-4 flex items-center justify-center gap-3">
              <p className="text-[26px] font-bold leading-none text-proof-title">Reviews</p>
              <ProofStars className="h-7 w-7" />
            </div>
          </div>

        <div className="proof-fade-bottom mx-auto mt-[50px] grid h-[600px] max-w-[1060px] gap-[16px] sm:grid-cols-2 lg:h-[560px] lg:grid-cols-3">
          <ProofColumn cards={[...colA, ...colC]} variant="up" className="sm:hidden" />
          <ProofColumn cards={colA} variant="up" className="hidden sm:block" />
          <ProofColumn cards={colB} variant="down" className="hidden sm:block" />
          <ProofColumn cards={colC} variant="up" className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const faqs = [
{ question: "Quantos números de WhatsApp posso conectar?", answer: "O plano de R$ 245 inclui 1 número de WhatsApp por 12 meses. Se precisar, você pode adicionar números extras por R$ 9,90/mês cada." },
    { question: "O acesso de R$ 245 vale por quanto tempo?", answer: "O acesso é válido por 12 meses, com todos os recursos contratados e atualizações liberadas durante esse período." },
    { question: "Existe garantia?", answer: "Sim. Você tem 7 dias de garantia após a compra. Se dentro desse período você achar que a Vupia não é para você, basta entrar em contato com o nosso suporte via WhatsApp para solicitar o reembolso." },
    { question: "Todos os recursos estão incluídos?", answer: "Sim. Você terá acesso aos recursos disponíveis no plano, além das atualizações e melhorias lançadas durante os 12 meses de acesso." },
    { question: "A Vupia funciona no celular?", answer: "Sim. A plataforma foi pensada para funcionar bem em celular, tablet e computador, para você organizar e acompanhar sua operação de onde estiver." },
    { question: "Como funciona o suporte?", answer: "Você terá suporte via WhatsApp para dúvidas e orientações relacionadas ao uso da plataforma." },
    { question: "Posso ganhar indicando a Vupia?", answer: "Sim. A Vupia terá Programa de Afiliados e também Programa de Embaixadores, com condições e regras próprias para quem quiser indicar a plataforma e participar da expansão da marca." },
  ];
  return (
    <section id="faq" className="relative isolate overflow-hidden border-t border-faq-border bg-faq-bg py-16 md:py-24">
      <div className="faq-wash" aria-hidden />
      <div className="container-v relative z-10">
        <div className="mx-auto max-w-[720px] text-center">
          <div className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
            <span className="h-px w-10 bg-primary/50" aria-hidden />
            Ajuda & Suporte
            <span className="h-px w-10 bg-primary/50" aria-hidden />
          </div>
          <h2 className="mt-4 text-[clamp(2.2rem,3.4vw,3rem)] font-extrabold leading-[1.05] text-faq-title">
            Dúvidas frequentes.
          </h2>
        </div>

        <div className="mx-auto mt-10 w-full max-w-[760px] lg:mt-14">
          <Accordion type="single" collapsible className="grid w-full gap-2.5">
            {faqs.map(({ question, answer }, index) => (
              <AccordionItem key={question} value={`faq-${index}`} className="overflow-hidden rounded-[12px] border border-faq-border bg-faq-card px-5 shadow-faq-item transition-colors hover:border-faq-hover data-[state=open]:border-primary/60">
                <AccordionTrigger className="min-h-[66px] gap-4 py-3 text-left text-[15px] font-semibold leading-[1.35] text-faq-title hover:no-underline sm:text-[16px] [&>svg]:text-faq-title data-[state=open]:[&>svg]:text-primary">
                  <span>{question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 text-[15px] leading-[1.55] text-faq-muted">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-footer-bg text-footer-foreground">
      <div className="footer-glow" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-6 pb-7 pt-10 sm:px-8 md:pb-10 md:pt-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <div>
              <Logo variant="light" className="h-10 w-auto" />
              <p className="mt-3 text-[14px] text-footer-muted">Oferta boa a gente compartilha.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={vupiaConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Vupia"
                className="inline-flex items-center gap-2 rounded-full border border-footer-border bg-white/5 py-2.5 pl-3 pr-4 text-[13px] font-semibold text-footer-foreground transition hover:border-primary/50 hover:bg-primary/10"
              >
                <Instagram className="h-[18px] w-[18px] text-primary" aria-hidden />
                Instagram
              </a>
              <a
                href={vupiaConfig.whatsappTeamUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Vupia"
                className="inline-flex items-center gap-2 rounded-full border border-footer-border bg-white/5 py-2.5 pl-3 pr-4 text-[13px] font-semibold text-footer-foreground transition hover:border-faq-whatsapp/50 hover:bg-faq-whatsapp/10"
              >
                <WhatsAppIcon className="h-[18px] w-[18px] text-faq-whatsapp" aria-hidden />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            <FooterLinks title="Produto" links={[['Como funciona', '/como-funciona'], ['Funcionalidades', '#beneficios'], ['Integrações', '#por-dentro'], ['Vale Bônus', '#vale-bonus']]} />
            <FooterLinks title="Conteúdos" newTab links={[['Achadinhos', '/achadinhos'], ['Guias', '/guias'], ['Vupia x envio manual', '/comparativos/vupia-vs-envio-manual'], ['Sobre a Vupia', '/sobre']]} />
            <FooterLinks title="Ferramentas" newTab links={[['Gerador de mensagem grátis', '/ferramentas/gerador-de-mensagem'], ['Ferramenta para achadinhos', '/ferramenta-para-achadinhos'], ['Automação de grupos', '/funcionalidades/automacao-de-grupos']]} />
            <FooterCommunity newTab />
            <FooterLinks title="Legal" newTab links={[['Termos de uso', vupiaConfig.termsUrl], ['Política de privacidade', vupiaConfig.privacyUrl], ['Cookies', '#']]} />
          </div>
        </div>
        <div className="mt-9 flex flex-col gap-3 border-t border-footer-border pt-6 text-[11px] text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Vupia. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links, newTab = false }: { title: string; links: Array<[string, string]>; newTab?: boolean }) {
  return (
    <div>
      <h3 className="text-[13px] font-bold text-footer-foreground">{title}</h3>
      <ul className="mt-3 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            {newTab ? (
              <a href={href} target="_blank" rel="noopener noreferrer" className="text-[12px] text-footer-muted transition hover:text-footer-foreground">{label}</a>
            ) : (
              <a href={href} className="text-[12px] text-footer-muted transition hover:text-footer-foreground">{label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterCommunity({ newTab = false }: { newTab?: boolean }) {
  return (
    <div>
      <h3 className="text-[13px] font-bold text-footer-foreground">Comunidade</h3>
      <ul className="mt-3 space-y-2.5">
        <li>
          {newTab ? (
            <a href="/programa-de-afiliados" target="_blank" rel="noopener noreferrer" className="text-[12px] text-footer-muted transition hover:text-footer-foreground">Programa de Afiliados</a>
          ) : (
            <Link to="/programa-de-afiliados" className="text-[12px] text-footer-muted transition hover:text-footer-foreground">Programa de Afiliados</Link>
          )}
        </li>
        <li>
          {newTab ? (
            <a href="/programa-de-afiliados/embaixadores" target="_blank" rel="noopener noreferrer" className="text-[12px] text-footer-muted transition hover:text-footer-foreground">Embaixadores</a>
          ) : (
            <Link to="/programa-de-afiliados/embaixadores" className="text-[12px] text-footer-muted transition hover:text-footer-foreground">Embaixadores</Link>
          )}
        </li>
      </ul>
    </div>
  );
}

function Index() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Pain />
      <Steps />
      <Features />
      <Stores />
      <Comparison />
      <Cashback />
      <Offer />
      <PartnerRecognition />
      <SocialProof />
      <Faq />

      <Footer />
    </main>
  );
}
