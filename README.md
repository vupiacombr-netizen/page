# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Regras atuais do site
- Vídeo da seção "Como funciona": player HostVSL (id vid-09999797-a7ca-4058-99bc-5ea26b163861), carregado só após o clique no play. Os domínios do site precisam estar liberados no painel HostVSL.

- **WhatsApp (todos os botões do site):** número +55 71 98463-1170, definido em `src/lib/vupia-config.ts`. Mensagem pré-preenchida diz que o contato veio pelo site; nas páginas dedicadas, a mensagem cita o contexto (afiliados ou embaixadores).

- **Preço do plano:** R$ 245 à vista ou 12x de R$ 24,60 (usado na oferta, no FAQ e no simulador de comissões).
- **Faixa de promoção no card de preço:** "Promoção válida até hoje, {data}" — a data é sempre o dia da visita, calculada no fuso America/Sao_Paulo; não há data fixa nem persistência de primeiro acesso.
- **Navegação do header:** o item "Indique e ganhe" (antes "Vale Bônus") leva à seção "Programa de parceiros" (`#reconhecimento`), no desktop e no menu móvel.
- **Login da plataforma:** o botão "Entrar" (header desktop e menu móvel) abre `https://app.vupia.com.br/` em nova guia. A URL fica em `loginUrl` em `src/lib/vupia-config.ts`.
- **Imagem das placas (`#reconhecimento`):** usa `src/assets/vupia-placas-3d.png.asset.json` (placas 100K/1M/500K em 3D, fundo transparente, servida via CDN Lovable Assets). Para trocar, substitua o asset e mantenha o fundo transparente.
- **Instagram:** link oficial `https://www.instagram.com/vupia.br/`, definido em `instagramUrl` em `src/lib/vupia-config.ts` e usado no rodapé da home e nas páginas de afiliados e embaixadores.
