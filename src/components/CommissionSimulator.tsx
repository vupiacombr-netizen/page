import { useMemo, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { Calculator, Crown, User, Users } from "lucide-react";

const PRICE = 245;

// Formatação determinística (igual no servidor e em qualquer navegador).
const int = (value: number) =>
  Math.round(value)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const brl = (value: number) => `R$ ${int(value)}`;

type SimulatorMode = "afiliado" | "embaixador";

function SalesField({
  label,
  hint,
  value,
  onChange,
  disabled,
}: {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  disabled?: boolean;
}) {
  return (
    <label className="block rounded-2xl border border-border bg-background p-4">
      <span className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] font-bold">{label}</span>
        <span className="text-[15px] font-extrabold text-offer-rose">{int(value)}</span>
      </span>
      {hint && <span className="mt-0.5 block text-[12px] text-muted-foreground">{hint}</span>}
      <input
        type="range"
        min={0}
        max={5000}
        step={10}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Number(e.currentTarget.value))}
        onInput={(e) => onChange(Number(e.currentTarget.value))}
        className="mt-3 w-full accent-[#D91D63]"
        aria-label={label}
      />
      <input
        type="number"
        min={0}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(Math.max(0, Number(e.currentTarget.value) || 0))}
        className="mt-2 w-full rounded-lg border border-border bg-card px-3 py-2 text-[14px] font-semibold outline-none focus:border-offer-rose/50"
        aria-label={`${label} (digite o valor)`}
      />
    </label>
  );
}

export function CommissionSimulator({ mode }: { mode: SimulatorMode }) {
  // O simulador interativo monta só no navegador, evitando que diferenças
  // entre servidor e navegador deixem a barra "solta" sem atualizar os números.
  return (
    <ClientOnly fallback={<SimulatorView mode={mode} static />}>
      <SimulatorView mode={mode} />
    </ClientOnly>
  );
}

function SimulatorView({ mode, static: isStatic }: { mode: SimulatorMode; static?: boolean }) {
  const [sales, setSales] = useState(1000);
  const [friendSales, setFriendSales] = useState(1000);
  const [networkSales, setNetworkSales] = useState(1000);

  const result = useMemo(() => {
    const own = sales * PRICE * (mode === "embaixador" ? 0.5 : 0.4);
    const friend = mode === "embaixador" ? friendSales * PRICE * 0.1 : 0;
    const network = mode === "embaixador" ? networkSales * PRICE * 0.01 : 0;
    return { own, friend, network, total: own + friend + network };
  }, [mode, sales, friendSales, networkSales]);

  const isEmbaixador = mode === "embaixador";

  return (
    <section className="rounded-[32px] border border-border bg-card p-7 shadow-sm sm:p-12">
      <div className="text-center">
        <p className="inline-flex items-center gap-2 rounded-full bg-offer-band-bg px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-offer-rose">
          <Calculator className="h-3.5 w-3.5" aria-hidden /> Simulador
        </p>
        <h2 className="mt-3 text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-tight">Simule suas comissões</h2>
        <p className="mt-2 text-[14px] font-medium text-muted-foreground">
          Arraste ou digite a quantidade de vendas &nbsp;|&nbsp; Produto: {brl(PRICE)}
        </p>
      </div>

      <div className={`mt-8 grid gap-4 ${isEmbaixador ? "lg:grid-cols-3" : "mx-auto max-w-[420px]"}`}>
        <SalesField
          label="Suas vendas"
          hint={isEmbaixador ? "Comissão de 50% por venda" : "Comissão de 40% por venda"}
          value={sales}
          onChange={setSales}
          disabled={Boolean(isStatic)}
        />
        {isEmbaixador && (
          <>
            <SalesField
              label="Vendas do seu amigo"
              hint="Você recebe 10% sobre essas vendas"
              value={friendSales}
              onChange={setFriendSales}
              disabled={Boolean(isStatic)}
            />
            <SalesField
              label="Vendas do amigo do amigo"
              hint="Você recebe 1% sobre essas vendas"
              value={networkSales}
              onChange={setNetworkSales}
              disabled={Boolean(isStatic)}
            />
          </>
        )}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background p-6">
          <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <User className="h-4 w-4 text-offer-rose" aria-hidden /> Detalhamento
          </p>
          <div className="mt-4 grid gap-2.5">
            <p className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] text-foreground">
                <strong className="text-offer-rose">{isEmbaixador ? "50%" : "40%"}</strong> das suas vendas
              </span>
              <span className="text-[14px] font-bold">{brl(result.own)}</span>
            </p>
            {isEmbaixador && (
              <>
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] text-foreground">
                    <strong className="text-offer-rose">10%</strong> das vendas do seu amigo
                  </span>
                  <span className="text-[14px] font-bold">{brl(result.friend)}</span>
                </p>
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-[13px] text-foreground">
                    <strong className="text-offer-rose">1%</strong> das vendas da rede
                  </span>
                  <span className="text-[14px] font-bold">{brl(result.network)}</span>
                </p>
              </>
            )}
          </div>
          {isEmbaixador && (
            <p className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-[13px] text-muted-foreground">
              <Users className="h-4 w-4 shrink-0 text-offer-rose" aria-hidden />
              Como afiliado comum, o mesmo volume renderia {brl(sales * PRICE * 0.4)}.
            </p>
          )}
        </div>

        <div className="rounded-2xl bg-offer-rose p-6 text-white shadow-xl shadow-offer-rose/25">
          <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.14em] text-white/70">
            <Crown className="h-4 w-4" aria-hidden /> {isEmbaixador ? "Você recebe como Embaixador" : "Você recebe como Afiliado"}
          </p>
          <p className="mt-2 text-[clamp(2rem,4vw,2.75rem)] font-extrabold leading-none">{brl(result.total)}</p>
          <p className="mt-2 text-[13px] text-white/80">
            {isEmbaixador
              ? "Soma de 50% das suas vendas + 10% das vendas do seu amigo + 1% da rede."
              : "40% de comissão sobre cada venda feita pelo seu link."}
          </p>
        </div>
      </div>

      <p className="mt-6 text-center text-[12px] leading-relaxed text-muted-foreground">
        Simulação ilustrativa com valores de exemplo. Os ganhos reais dependem do volume de vendas de cada parceiro.
      </p>
    </section>
  );
}
