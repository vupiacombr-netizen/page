// ============= Full file contents =============

// Links e mídias configuráveis da página de vendas.

const whatsappNumber = "5571984631170"; // +55 71 98463-1170

// Mensagens pré-preenchidas no wa.me (por contexto).
const siteMessage = "Ola! Quero mais informacoes da Vupia. Vi no site da Vupia.";
const afiliadosMessage = "Ola! Quero mais informacoes do programa de afiliados da Vupia. Vi no site da Vupia.";
const embaixadoresMessage = "Ola! Quero mais informacoes do programa de embaixadores da Vupia. Vi no site da Vupia.";

const buildWaUrl = (message: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

export const vupiaConfig = {
  videoPoster: "", // URL opcional da capa; vazio usa a capa padrão.
  checkoutUrl: "https://go.vupia.store/PPU38CQGJPS", // Link do checkout.
  // checkoutUrl: "https://app.vupia.com.br/register", // Link do checkout.
  termsUrl: "/termos",
  privacyUrl: "/privacidade",
  campaignRulesUrl: "/regras-vale-bonus",
  instagramUrl: "https://www.instagram.com/vupia.br/",
  loginUrl: "https://app.vupia.com.br/", // Login/app da plataforma.
  whatsappTeamUrl: buildWaUrl(siteMessage),
  whatsappChatUrl: buildWaUrl(siteMessage),
  whatsappPartnerUrl: buildWaUrl(siteMessage),
  whatsappAfiliadosUrl: buildWaUrl(afiliadosMessage),
  whatsappEmbaixadoresUrl: buildWaUrl(embaixadoresMessage),
};
