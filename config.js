const CONFIG = {
  WA_NUMBER: "6289526977840",
  BRAND_NAME: "SPX Express Indonesia",
  BASE_URL: "https://spxexpressid.vercel.app",
  WA_DEFAULT_MESSAGE: "Halo saya butuh bantuan SPX Express",
  ONLINE_BASE: 1347
};

function waLink(message) {
  const msg = encodeURIComponent(message || CONFIG.WA_DEFAULT_MESSAGE);
  return `https://wa.me/${CONFIG.WA_NUMBER}?text=${msg}`;
}

window.CONFIG = CONFIG;
window.waLink = waLink;