/* =========================================================preventScroll
   Formosa By Clara — Fashion Store Logic
   Edite CONFIG e PRODUCTS para personalizar a loja.
   ========================================================= */

const CONFIG = {
  storeName: "Formosa By Clara",
  slogan: "Seu estilo, sua essência.",
  // IMPORTANTE: coloque apenas números no formato internacional.
  // Exemplo de formato (não use como número real): 5511999999999
  // Deixe vazio até configurar o WhatsApp da loja.
  whatsappNumber: "5585986427804",
  instagramUrl: "https://www.instagram.com/formosa.byclara/", // ex: "https://instagram.com/seu.perfil"
  currency: "BRL",
  locale: "pt-BR"
};

/* ---------- Catálogo editável (produtos de demonstração) ---------- */
const PRODUCTS = [
  {
    id: "vestido-rosa-seda",
    name: "Vestido Rosa Seda",
    category: "vestidos",
    group: "roupas",
    price: 289.9,
    oldPrice: null,
    badge: "novo",
    description: "Vestido fluido com caimento elegante, ideal para ocasiões especiais e jantares. Tecido leve e modelagem feminina.",
    image: "https://images.pexels.com/photos/32060709/pexels-photo-32060709.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    colors: [
      { name: "Rosa", hex: "#E891B0" },
      { name: "Nude", hex: "#E8D5C4" }
    ],
    sizes: ["P", "M", "G"],
    createdAt: "2026-03-01"
  },
  {
    id: "vestido-rosa-laco",
    name: "Vestido Rosa com Laço",
    category: "vestidos",
    group: "roupas",
    price: 259.9,
    oldPrice: 299.9,
    badge: "promocao",
    description: "Peça marcante com detalhe de laço e silhueta sofisticada. Perfeita para compor looks de destaque.",
    image: "https://images.pexels.com/photos/8762424/pexels-photo-8762424.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    colors: [
      { name: "Rosa vivo", hex: "#F52D83" },
      { name: "Fúcsia", hex: "#C41860" }
    ],
    sizes: ["P", "M", "G", "GG"],
    createdAt: "2026-02-20"
  },
  {
    id: "vestido-rosa-claro",
    name: "Vestido Rosa Claro Midi",
    category: "vestidos",
    group: "roupas",
    price: 279.9,
    oldPrice: null,
    badge: "novo",
    description: "Midi delicado em tom pastel, com caimento solto e presença romântica para o dia ou a noite.",
    image: "https://images.pexels.com/photos/15283766/pexels-photo-15283766.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    colors: [
      { name: "Rosa claro", hex: "#F7C4D3" },
      { name: "Branco", hex: "#FFFFFF" }
    ],
    sizes: ["P", "M", "G"],
    createdAt: "2026-03-05"
  },

  {
    id: "conjunto-denim",
    name: "Conjunto Denim Moderno",
    category: "conjuntos",
    group: "roupas",
    price: 249.9,
    oldPrice: null,
    badge: "novo",
    description: "Dois peças em jeans com modelagem contemporânea. Combine junto ou separe as peças no dia a dia.",
    image: "https://images.pexels.com/photos/32809973/pexels-photo-32809973.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    colors: [
      { name: "Jeans", hex: "#6B7C93" },
      { name: "Azul claro", hex: "#A7BDD4" }
    ],
    sizes: ["P", "M", "G"],
    createdAt: "2026-03-02"
  },
 
  {
    id: "blusa-branca-cropped",
    name: "Blusa Branca Cropped",
    category: "blusas",
    group: "roupas",
    price: 99.9,
    oldPrice: null,
    badge: null,
    description: "Básica sofisticada para compor looks casuais ou de trabalho. Caimento limpo e atemporal.",
    image: "https://images.pexels.com/photos/16779886/pexels-photo-16779886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    colors: [
      { name: "Branco", hex: "#FFFFFF" },
      { name: "Off-white", hex: "#F5F0EB" }
    ],
    sizes: ["P", "M", "G", "GG"],
    createdAt: "2026-01-30"
  },
  {
    id: "calca-rosa",
    name: "Calça Rosa Alfaiatada",
    category: "calcas",
    group: "roupas",
    price: 189.9,
    oldPrice: null,
    badge: null,
    description: "Calça de alfaiataria em tom rosa, cintura confortável e perna fluida para um visual moderno.",
    image: "https://images.pexels.com/photos/19397140/pexels-photo-19397140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=900",
    colors: [
      { name: "Rosa", hex: "#E891B0" },
      { name: "Preto", hex: "#171419" }
    ],
    sizes: ["36", "38", "40", "42"],
    createdAt: "2026-02-10"
  },
  {
    id: "sandalia-preta-salto",
    name: "Sandália Preta Salto Bloco",
    category: "saltos",
    group: "calcados",
    price: 179.9,
    oldPrice: null,
    badge: "novo",
    description: "Sandália de salto bloco em preto, com tiras modernas e conforto para o dia e a noite.",
    image: "https://images.pexels.com/photos/27046152/pexels-photo-27046152.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Preto", hex: "#171419" },
      { name: "Nude", hex: "#D4B5A0" }
    ],
    sizes: ["34", "35", "36", "37", "38", "39"],
    createdAt: "2026-03-04"
  },
  {
    id: "sandalia-branca",
    name: "Sandália Branca Minimal",
    category: "sandalias",
    group: "calcados",
    price: 159.9,
    oldPrice: null,
    badge: null,
    description: "Design clean em branco, ideal para looks de verão e combinações leves.",
    image: "https://images.pexels.com/photos/27046150/pexels-photo-27046150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Branco", hex: "#FFFFFF" },
      { name: "Off-white", hex: "#F2EDE8" }
    ],
    sizes: ["34", "35", "36", "37", "38", "39"],
    createdAt: "2026-02-25"
  },
  {
    id: "sandalia-marrom",
    name: "Sandália Marrom Textura",
    category: "sandalias",
    group: "calcados",
    price: 169.9,
    oldPrice: 199.9,
    badge: "promocao",
    description: "Sandália com textura sofisticada e salto médio. Um coringa para looks casuais e sociais.",
    image: "https://images.pexels.com/photos/26925262/pexels-photo-26925262.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Marrom", hex: "#8B5A3C" },
      { name: "Caramelo", hex: "#C68642" }
    ],
    sizes: ["35", "36", "37", "38", "39"],
    createdAt: "2026-02-12"
  },
  {
    id: "rasteira-preta-branca",
    name: "Rasteira Bicolor",
    category: "rasteiras",
    group: "calcados",
    price: 119.9,
    oldPrice: null,
    badge: null,
    description: "Rasteira leve em preto e branco, confortável para o dia a dia e viagens.",
    image: "https://images.pexels.com/photos/27046154/pexels-photo-27046154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Preto/Branco", hex: "#171419" },
      { name: "Nude", hex: "#E8D5C4" }
    ],
    sizes: ["34", "35", "36", "37", "38", "39"],
    createdAt: "2026-01-22"
  },
  {
    id: "salto-plataforma",
    name: "Salto Plataforma Studio",
    category: "saltos",
    group: "calcados",
    price: 199.9,
    oldPrice: null,
    badge: "novo",
    description: "Salto com plataforma para alongar a silhueta com estabilidade. Acabamento editorial.",
    image: "https://images.pexels.com/photos/27063075/pexels-photo-27063075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Nude", hex: "#E6C8B0" },
      { name: "Preto", hex: "#171419" }
    ],
    sizes: ["35", "36", "37", "38", "39"],
    createdAt: "2026-03-06"
  },
  {
    id: "rasteira-anel",
    name: "Rasteira com Anel",
    category: "rasteiras",
    group: "calcados",
    price: 109.9,
    oldPrice: 129.9,
    badge: "promocao",
    description: "Modelo delicado com detalhe de anel no dedo. Leveza e charme para o verão.",
    image: "https://images.pexels.com/photos/26925260/pexels-photo-26925260.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Marrom", hex: "#6B3E26" },
      { name: "Preto", hex: "#171419" }
    ],
    sizes: ["34", "35", "36", "37", "38"],
    createdAt: "2026-02-05"
  },
  {
    id: "bolsa-azul",
    name: "Bolsa Clutch Azul",
    category: "acessorios",
    group: "acessorios",
    price: 149.9,
    oldPrice: null,
    badge: null,
    description: "Clutch compacta para eventos e noites especiais. Detalhes dourados e acabamento premium.",
    image: "https://images.pexels.com/photos/8125854/pexels-photo-8125854.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Azul", hex: "#3A5A8C" },
      { name: "Preto", hex: "#171419" }
    ],
    sizes: ["Único"],
    createdAt: "2026-02-18"
  },
  {
    id: "bolsa-estampada",
    name: "Bolsa Estampada Noite",
    category: "acessorios",
    group: "acessorios",
    price: 169.9,
    oldPrice: null,
    badge: "novo",
    description: "Acessório de impacto com estampa sofisticada. Completa vestidos e looks monochromáticos.",
    image: "https://images.pexels.com/photos/8125851/pexels-photo-8125851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=900",
    colors: [
      { name: "Azul estampado", hex: "#2F4A7A" }
    ],
    sizes: ["Único"],
    createdAt: "2026-03-03"
  }
];

const CATEGORIES = [
  {
    id: "vestidos",
    name: "Vestidos",
    image: "https://images.pexels.com/photos/31153433/pexels-photo-31153433.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
  },
  {
    id: "conjuntos",
    name: "Conjuntos",
    image: "assets/Imgs/conjunto com estampa de borboleta.png"
  },
  {
    id: "blusas",
    name: "Blusas",
    image: "assets/Imgs/insta_img5.png"
  },
  {
    id: "calcas",
    name: "Calças e Saias",
    image: "https://images.pexels.com/photos/19397140/pexels-photo-19397140.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
  },
  {
    id: "sandalias",
    name: "Sandálias",
    image: "https://images.pexels.com/photos/27046150/pexels-photo-27046150.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
  },
  {
    id: "rasteiras",
    name: "Rasteiras",
    image: "https://images.pexels.com/photos/27046154/pexels-photo-27046154.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
  },
  {
    id: "saltos",
    name: "Saltos",
    image: "https://images.pexels.com/photos/27063075/pexels-photo-27063075.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
  },
  {
    id: "acessorios",
    name: "Bolsas e Acessórios",
    image: "https://images.pexels.com/photos/8125855/pexels-photo-8125855.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=700"
  }
];

const IG_MEDIA = [
  // --- OS 3 VÍDEOS ---
  {
    type: "video",
    src: "assets/Imgs/inspiraçao1.mp4",
    poster: "assets/Imgs/inspiraçao1.png"
  },
  {
    type: "video",
    src: "assets/Imgs/inspiração2.mp4",
    poster: "assets/Imgs/inspiraçao2.png"
  },
  {
    type: "video",
    src: "assets/Imgs/inspiração3.mp4",
    poster: "assets/Imgs/inspiraçao3.png"
  },
  
  // --- AS IMAGENS RESTANTES ---
  { type: "image", src: "assets/Imgs/insta_img1.png" },
  { type: "image", src: "assets/Imgs/insta_img2.png" },
  { type: "image", src: "assets/Imgs/insta_img3.png" },
  { type: "image", src: "assets/Imgs/insta_img4.png" },
  { type: "image", src: "assets/Imgs/insta_img5.png" }
];
/* ---------- State ---------- */
const state = {
  filter: "all",
  sort: "default",
  query: "",
  cart: loadCart(),
  modalProductId: null,
  modalColor: null,
  modalSize: null,
  modalQty: 1,
  lastFocus: null
};

/* ---------- Utils ---------- */
function formatPrice(value) {
  return value.toLocaleString(CONFIG.locale, {
    style: "currency",
    currency: CONFIG.currency
  });
}

function isWhatsAppConfigured() {
  return Boolean(CONFIG.whatsappNumber && /^\d{10,15}$/.test(String(CONFIG.whatsappNumber).trim()));
}

function buildWhatsAppUrl(message) {
  if (!isWhatsAppConfigured()) return null;
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONFIG.whatsappNumber.trim()}?text=${text}`;
}

function openWhatsApp(message) {
  const url = buildWhatsAppUrl(message);
  if (!url) {
    showToast("Configure o número do WhatsApp em script.js para enviar pedidos.");
    showConfigBanner();
    return false;
  }
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
}

function generalWhatsAppMessage() {
  return `Olá! Gostaria de conhecer as peças da ${CONFIG.storeName} e receber atendimento.`;
}

function productWhatsAppMessage(product, opts = {}) {
  const lines = [
    "Olá! Tenho interesse neste produto:",
    "",
    `Produto: ${product.name}`,
    `Preço anunciado: ${formatPrice(product.price)}`
  ];
  if (opts.size) lines.push(`Tamanho: ${opts.size}`);
  if (opts.color) lines.push(`Cor: ${opts.color}`);
  if (opts.qty) lines.push(`Quantidade: ${opts.qty}`);
  lines.push("", "Gostaria de confirmar a disponibilidade e as opções de entrega.");
  return lines.join("\n");
}

function cartWhatsAppMessage() {
  const lines = [
    `Olá! Gostaria de fazer um pedido na ${CONFIG.storeName}.`,
    "",
    "MEU PEDIDO:",
    ""
  ];

  state.cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    lines.push(`${item.name}`);
    lines.push(`   Quantidade: ${item.qty}`);
    if (item.size) lines.push(`   Tamanho: ${item.size}`);
    if (item.color) lines.push(`   Cor: ${item.color}`);
    lines.push(`   Preço unitário: ${formatPrice(item.price)}`);
    lines.push("");
  });

  lines.push(`Total estimado dos produtos: ${formatPrice(cartTotal())}`);
  lines.push("");
  lines.push("Gostaria de confirmar a disponibilidade, o frete, as formas de pagamento e como concluir a compra.");
  lines.push("");
  lines.push("Aguardo o atendimento!");
  return lines.join("\n");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => {
    toast.hidden = true;
  }, 2800);
}

function showConfigBanner() {
  const banner = document.getElementById("configBanner"); // nunca existe
  if (banner) banner.hidden = false;
}

function lockBody(lock) {
  document.body.classList.toggle("is-locked", lock);
}

function categoryLabel(id) {
  const map = {
    vestidos: "Vestidos",
    conjuntos: "Conjuntos",
    blusas: "Blusas e Croppeds",
    calcas: "Calças e Saias",
    sandalias: "Sandálias",
    rasteiras: "Rasteiras",
    saltos: "Saltos",
    acessorios: "Bolsas e Acessórios",
    roupas: "Roupas",
    calcados: "Calçados"
  };
  return map[id] || id;
}

/* ---------- Cart persistence ---------- */
function loadCart() {
  try {
    const raw = localStorage.getItem("sua_marca_cart_v1");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("sua_marca_cart_v1", JSON.stringify(state.cart));
  } catch {
    /* ignore quota errors */
  }
}

function cartCount() {
  return state.cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cartCount");
  const count = cartCount();
  if (!badge) return;
  if (count > 0) {
    badge.hidden = false;
    badge.textContent = String(count);
  } else {
    badge.hidden = true;
  }
}

function cartKey(productId, size, color) {
  return `${productId}__${size || ""}__${color || ""}`;
}

function addToCart(product, { size, color, qty }) {
  const key = cartKey(product.id, size, color);
  const existing = state.cart.find((item) => item.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: size || null,
      color: color || null,
      qty
    });
  }
  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Produto adicionado à sacola");
}

function updateCartQty(key, delta) {
  const item = state.cart.find((i) => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter((i) => i.key !== key);
  }
  saveCart();
  updateCartBadge();
  renderCart();
}

function removeFromCart(key) {
  state.cart = state.cart.filter((i) => i.key !== key);
  saveCart();
  updateCartBadge();
  renderCart();
}

function clearCart() {
  state.cart = [];
  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Sacola esvaziada");
}

/* ---------- Filtering ---------- */
function matchesFilter(product, filter) {
  if (!filter || filter === "all") return true;
  if (filter === "promocao") return product.badge === "promocao";
  if (filter === "roupas") return product.group === "roupas";
  if (filter === "calcados") return product.group === "calcados";
  if (filter === "acessorios") return product.category === "acessorios" || product.group === "acessorios";
  return product.category === filter;
}

function matchesQuery(product, query) {
  if (!query) return true;
  const q = query.trim().toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    categoryLabel(product.category).toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q)
  );
}

function sortProducts(list, sort) {
  const items = [...list];
  switch (sort) {
    case "price-asc":
      return items.sort((a, b) => a.price - b.price);
    case "price-desc":
      return items.sort((a, b) => b.price - a.price);
    case "recent":
      return items.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    default:
      return items;
  }
}

function getVisibleProducts() {
  const filtered = PRODUCTS.filter(
    (p) => matchesFilter(p, state.filter) && matchesQuery(p, state.query)
  );
  return sortProducts(filtered, state.sort);
}

/* ---------- Render: categories ---------- */
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(
    (cat) => `
    <button type="button" class="cat-card" data-filter-jump="${cat.id}" aria-label="Explorar categoria ${cat.name}">
      <img src="${cat.image}" alt="${cat.name}" loading="lazy" width="700" height="800" />
      <div class="cat-card__body">
        <h3>${cat.name}</h3>
        <span>Explorar categoria →</span>
      </div>
    </button>
  `
  ).join("");
}

/* ---------- Render: products ---------- */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  const empty = document.getElementById("emptyState");
  if (!grid || !empty) return;

const items = getVisibleProducts();

const status = document.getElementById("resultsStatus");
if (status) {
  status.textContent = items.length === 0
    ? "Nenhum produto encontrado"
    : `${items.length} ${items.length === 1 ? "produto encontrado" : "produtos encontrados"}`;
}

  empty.hidden = true;
  grid.innerHTML = items
    .map((product, index) => {
      const badge =
        product.badge === "novo"
          ? `<span class="product-card__badge product-card__badge--novo">Novo</span>`
          : product.badge === "promocao"
            ? `<span class="product-card__badge product-card__badge--promo">Promoção</span>`
            : "";
      const old = product.oldPrice
        ? `<s>${formatPrice(product.oldPrice)}</s>`
        : "";
      return `
      <article class="product-card" style="animation-delay:${(index % 8) * 0.04}s">
        <button type="button" class="product-card__media" data-open-product="${product.id}" aria-label="Ver detalhes de ${product.name}">
          ${badge}
          <img src="${product.image}" alt="${product.name}" loading="lazy" width="600" height="800" />
        </button>
        <div class="product-card__body">
          <span class="product-card__cat">${categoryLabel(product.category)}</span>
          <button type="button" class="product-card__name" data-open-product="${product.id}">${product.name}</button>
          <div class="product-card__price">
            <strong>${formatPrice(product.price)}</strong>
            ${old}
          </div>
          <div class="product-card__actions">
            <button type="button" class="btn btn--pink" data-open-product="${product.id}">Adicionar à sacola</button>
            <button type="button" class="btn btn--outline" data-wa-product="${product.id}">Consultar no WhatsApp</button>
          </div>
        </div>
      </article>
    `;
    })
    .join("");
}

/* ---------- Render: Instagram ---------- */
function renderInstagram() {
  const grid = document.getElementById("igGrid");
  if (grid) {
    grid.innerHTML = IG_MEDIA.map((item, i) => {
      // Se for vídeo, renderiza a tag <video>. Se for imagem, renderiza <img>.
      const mediaElement = item.type === "video" 
        ? `<video src="${item.src}" poster="${item.poster}" autoplay loop muted playsinline></video>`
        : `<img src="${item.src}" alt="Inspiração de moda ${i + 1}" loading="lazy" width="700" height="700" />`;

      return `
        <div class="ig-item">
          ${mediaElement}
        </div>
      `;
    }).join("");
  }

  const igBtn = document.getElementById("igBtn");
  const footerIg = document.getElementById("footerIg");
  if (CONFIG.instagramUrl) {
    if (igBtn) {
      igBtn.href = CONFIG.instagramUrl;
      igBtn.hidden = false;
    }
    if (footerIg) footerIg.href = CONFIG.instagramUrl;
  } else {
    if (igBtn) {
      igBtn.href = "#";
      igBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Configure o Instagram em script.js (instagramUrl).");
      });
    }
    if (footerIg) {
      footerIg.addEventListener("click", (e) => {
        e.preventDefault();
        showToast("Configure o Instagram em script.js (instagramUrl).");
      });
    }
  }
}

/* ---------- Cart UI ---------- */
function renderCart() {
  const body = document.getElementById("cartBody");
  const foot = document.getElementById("cartFoot");
  const totalEl = document.getElementById("cartTotal");
  const headCount = document.getElementById("cartHeadCount");
  if (!body || !foot || !totalEl) return;
  const count = cartCount();
  if (headCount) {
    headCount.textContent = count > 0 ? `${count} ${count === 1 ? 'item' : 'itens'}` : 'vazia';
  }
  if (!state.cart.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty__icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6h15l-1.5 9h-12z"/><path d="M6 6L5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>
        </div>
        <h3>Sua sacola está vazia</h3>
        <p>Explore a vitrine e adicione suas peças favoritas. Você vai escolher tamanho e cor antes de adicionar.</p>
        <button type="button" class="btn btn--pink" data-close-cart>Explorar coleção</button>
        <p style="font-size:0.75rem;color:#B8B2BA;margin-top:0.25rem">Os itens ficam salvos por um tempo neste navegador.</p>
      </div>
    `;
    foot.hidden = true;
    return;
  }
  foot.hidden = false;
  totalEl.textContent = formatPrice(cartTotal());
  body.innerHTML = `<div class="cart-list">` + state.cart
    .map((item) => {
      const meta = [item.size && `Tam. ${item.size}`, item.color && item.color]
        .filter(Boolean)
        .join(" · ");
      return `
      <div class="cart-item" data-key="${item.key}">
        <img src="${item.image}" alt="${item.name}" width="72" height="90" loading="lazy" />
        <div>
          <h3>${item.name}</h3>
          <div class="meta">${meta || "—"}</div>
          <div class="cart-item__qty">
            <button type="button" data-qty="-1" aria-label="Diminuir quantidade">−</button>
            <span>${item.qty}</span>
            <button type="button" data-qty="1" aria-label="Aumentar quantidade">+</button>
          </div>
        </div>
        <div class="cart-item__side">
          <div class="cart-item__price">${formatPrice(item.price * item.qty)}</div>
          <button type="button" class="cart-item__remove" data-remove>Remover</button>
        </div>
      </div>
    `;
    })
    .join("") + `</div>`;
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  state.lastFocus = document.activeElement;
  drawer.hidden = false;
  // force reflow to guarantee animation
  void drawer.offsetWidth;
  lockBody(true);
  renderCart();
  const panel = drawer.querySelector(".drawer__panel");
  if (panel) panel.focus();
  // bind close on newly injected button inside empty state
  drawer.querySelectorAll("[data-close-cart]").forEach(el=>{
    if(!el._bound){ el._bound=true; el.addEventListener("click", closeCart); }
  });
}
function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  if (!drawer) return;
  drawer.hidden = true;
  lockBody(false);
  if (state.lastFocus && typeof state.lastFocus.focus === "function") {
    try { state.lastFocus.focus({preventScroll:true}); } catch { state.lastFocus.focus(); }
  }
  if (state.lastFocus && typeof state.lastFocus.focus === "function") {
  try { state.lastFocus.focus({ preventScroll: true }); }
  catch { state.lastFocus.focus(); }
}
}

/* ---------- Product modal ---------- */
function openProductModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  state.modalProductId = productId;
  state.modalColor = product.colors[0]?.name || null;
  state.modalSize = product.sizes.length === 1 ? product.sizes[0] : null;
  state.modalQty = 1;
  state.lastFocus = document.activeElement;

  const modal = document.getElementById("productModal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;

  const old = product.oldPrice ? `<s>${formatPrice(product.oldPrice)}</s>` : "";
  const colors = product.colors
    .map(
      (c, i) => `
    <button type="button" class="swatch${i === 0 ? " is-selected" : ""}" style="background:${c.hex}" data-color="${c.name}" role="radio" aria-checked="${i === 0 ? "true" : "false"}" aria-label="${c.name}" title="${c.name}"></button>
  `
    )
    .join("");

  const sizes = product.sizes
    .map((s) => {
      const selected = state.modalSize === s;
      return `<button type="button" class="size-btn${selected ? " is-selected" : ""}" data-size="${s}" role="radio" aria-checked="${selected ? "true" : "false"}">${s}</button>`;
    })
    .join("");

  content.innerHTML = `
    <div class="modal__media">
      <img src="${product.image}" alt="${product.name}" width="800" height="1000" />
    </div>
    <div class="modal__info">
      <p class="eyebrow">${categoryLabel(product.category)}</p>
      <h2 id="modalTitle">${product.name}</h2>
      <div class="modal__price">
        <strong>${formatPrice(product.price)}</strong>
        ${old}
      </div>
      <p class="modal__desc">${product.description}</p>

      <div class="option-group">
        <span>Cor</span>
        <div class="swatches" role="radiogroup" aria-label="Cor">${colors}</div>
      </div>

      <div class="option-group">
        <span>Tamanho</span>
        <div class="sizes" role="radiogroup" aria-label="Tamanho">${sizes}</div>
      </div>
      <p class="field-error" id="modalError" hidden></p>

      <div class="option-group">
        <span>Quantidade</span>
        <div class="qty-row">
          <button type="button" data-modal-qty="-1" aria-label="Diminuir">−</button>
          <span id="modalQtyValue">1</span>
          <button type="button" data-modal-qty="1" aria-label="Aumentar">+</button>
        </div>
      </div>

      <div class="modal__actions">
        <button type="button" class="btn btn--pink" id="modalAddBtn">Adicionar à sacola</button>
        <button type="button" class="btn btn--outline" id="modalWaBtn">Consultar pelo WhatsApp</button>
      </div>
    </div>
  `;

  modal.hidden = false;
  lockBody(true);
  const dialog = modal.querySelector(".modal__dialog");
  if (dialog) dialog.focus();
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (!modal) return;
  modal.hidden = true;
  lockBody(false);
  state.modalProductId = null;
  if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus();
}

function getModalProduct() {
  return PRODUCTS.find((p) => p.id === state.modalProductId);
}

function validateModalSelection() {
  const product = getModalProduct();
  const error = document.getElementById("modalError");
  if (!product) return false;

  const needsSize = product.sizes && product.sizes.length > 0;
  const needsColor = product.colors && product.colors.length > 0;

  if (needsSize && !state.modalSize) {
    if (error) {
      error.hidden = false;
      error.textContent = "Selecione um tamanho para continuar.";
    }
    return false;
  }
  if (needsColor && !state.modalColor) {
    if (error) {
      error.hidden = false;
      error.textContent = "Selecione uma cor para continuar.";
    }
    return false;
  }
  if (error) error.hidden = true;
  return true;
}

/* ---------- Filters UI helpers ---------- */
function setFilter(filter, { scroll = false } = {}) {
  state.filter = filter || "all";
  document.querySelectorAll(".chip[data-filter]").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.filter === state.filter);
  });
  renderProducts();
  if (scroll) {
    const section = document.getElementById("produtos");
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function clearFilters() {
  state.filter = "all";
  state.query = "";
  state.sort = "default";
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  if (searchInput) searchInput.value = "";
  if (sortSelect) sortSelect.value = "default";
  setFilter("all");
  showToast("Filtros limpos");
}

/* ---------- Mobile menu / search ---------- */
function openMenu() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("menuBtn");
  if (!nav) return;
  nav.hidden = false;
  if (btn) btn.setAttribute("aria-expanded", "true");
  lockBody(true);
}

  document.querySelectorAll("[data-legal]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // Impede de pular para o topo
      openLegalModal(link.dataset.legal);
    });
  });

  document.querySelectorAll("[data-close-legal]").forEach((el) => {
    el.addEventListener("click", closeLegalModal);
  });

function closeMenu() {
  const nav = document.getElementById("mobileNav");
  const btn = document.getElementById("menuBtn");
  if (!nav) return;
  nav.hidden = true;
  if (btn) btn.setAttribute("aria-expanded", "false");
  lockBody(false);
}

function toggleSearch() {
  const bar = document.getElementById("searchBar");
  const btn = document.getElementById("searchToggle");
  if (!bar) return;
  
  const open = bar.hidden;
  bar.hidden = !open;
  if (btn) btn.setAttribute("aria-expanded", open ? "true" : "false");
  
  if (open) {
    const input = document.getElementById("searchInput");
    if (input) input.focus();
    
    // Quando a busca abre, rola imediatamente para a vitrine
    setTimeout(() => {
      const vitrine = document.getElementById("produtos");
      if (vitrine) {
        vitrine.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  }
  setTimeout(() => {
  const vitrine = document.getElementById("produtos");
  if (vitrine) {
    vitrine.scrollIntoView({ behavior: "smooth", block: "start" });
    vitrine.classList.add("search-active");
    setTimeout(() => vitrine.classList.remove("search-active"), 800);
  }
}, 50);
}

/* ---------- Events ---------- */
function bindEvents() {
  // Header scroll
  const header = document.getElementById("header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu
  document.getElementById("menuBtn")?.addEventListener("click", openMenu);
  document.querySelectorAll("[data-close-menu]").forEach((el) => {
    el.addEventListener("click", closeMenu);
  });

    // Search
  document.getElementById("searchToggle")?.addEventListener("click", toggleSearch);
  
  document.getElementById("searchInput")?.addEventListener("input", (e) => {
    state.query = e.target.value;
    
    // Busca em todas as categorias para não esconder resultados
    if (state.filter !== "all") {
      setFilter("all");
    } else {
      renderProducts();
    }

    // Mantém a vitrine visível enquanto digita (sem delay)
    if (state.query.trim() !== "") {
      const vitrine = document.getElementById("produtos");
      if (vitrine) {
        vitrine.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
      document.addEventListener("click", (e) => {
    const legalBtn = e.target.closest("[data-legal]");
    if (legalBtn) {
      e.preventDefault();
      openLegalModal(legalBtn.dataset.legal);
    }
    
    if (e.target.closest("[data-close-legal]")) {
      closeLegalModal();
    }
  });

  // Fechar modal legal com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const legalModal = document.getElementById("legalModal");
      if (legalModal && !legalModal.hidden) closeLegalModal();
    }
  });
  });

   document.getElementById("searchClear")?.addEventListener("click", () => {
    const input = document.getElementById("searchInput");
    const bar = document.getElementById("searchBar");
    const btn = document.getElementById("searchToggle");

    if (input && input.value.trim() !== "") {
      // Se tem texto, limpa o texto e volta os produtos
      input.value = "";
      state.query = "";
      setFilter("all"); 
      input.focus(); // Mantém o cursor piscando na busca
    } else {
      // Se já estiver vazio, fecha a caixinha de pesquisa
      if (bar) bar.hidden = true;
      if (btn) btn.setAttribute("aria-expanded", "false");
    }
  });
  
  document.getElementById("searchInput")?.addEventListener("input", (e) => {
    state.query = e.target.value;
    // Se o usuário digitou algo, muda o filtro para "roupas"
    if (state.query.trim() !== "") {
      if (state.filter !== "roupas") {
        setFilter("roupas");
      } else {
        renderProducts();
      }
    } else {
      // Se a busca está vazia, volta para "Todas"
      if (state.filter !== "all") {
        setFilter("all");
      } else {
        renderProducts();
      }
    }
  });

  document.getElementById("searchClear")?.addEventListener("click", () => {
    const input = document.getElementById("searchInput");
    if (input) input.value = "";
    state.query = "";
    setFilter("all"); // Limpa o filtro e volta para "Todas"
    input?.focus();
  });

  // Sort
  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderProducts();
  });

  // Filter chips
  document.querySelectorAll(".chip[data-filter]").forEach((chip) => {
    chip.addEventListener("click", () => setFilter(chip.dataset.filter));
  });

  document.getElementById("clearFiltersBtn")?.addEventListener("click", clearFilters);

  // Filter jumps (nav, categories, collection, footer)
  document.addEventListener("click", (e) => {
    const jump = e.target.closest("[data-filter-jump], [data-filter]");
    if (!jump) return;
    // Avoid double-handling chips already bound
    if (jump.classList.contains("chip")) return;
    const filter = jump.dataset.filterJump || jump.dataset.filter;
    if (!filter) return;
    if (jump.tagName === "A") {
      // allow hash navigation then filter
      setTimeout(() => setFilter(filter, { scroll: true }), 0);
    } else {
      e.preventDefault();
      setFilter(filter, { scroll: true });
    }
    closeMenu();
  });

  // Cart open/close
  document.getElementById("cartBtn")?.addEventListener("click", openCart);
 document.getElementById("cartDrawer")?.addEventListener("click", (e) => {
  if (e.target.closest("[data-close-cart]")) closeCart();
});
  document.getElementById("clearCartBtn")?.addEventListener("click", clearCart);
  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    if (!state.cart.length) {
      showToast("Sua sacola está vazia.");
      return;
    }
    openWhatsApp(cartWhatsAppMessage());
  });

  // Cart item actions (delegation)
  document.getElementById("cartBody")?.addEventListener("click", (e) => {
    const row = e.target.closest(".cart-item");
    if (!row) return;
    const key = row.dataset.key;
    if (e.target.matches("[data-remove]")) {
      removeFromCart(key);
      return;
    }
    const qtyBtn = e.target.closest("[data-qty]");
    if (qtyBtn) {
      updateCartQty(key, Number(qtyBtn.dataset.qty));
    }
  });

  // Product open / WA from grid
  document.getElementById("productGrid")?.addEventListener("click", (e) => {
    const openBtn = e.target.closest("[data-open-product]");
    if (openBtn) {
      openProductModal(openBtn.dataset.openProduct);
      return;
    }
    const waBtn = e.target.closest("[data-wa-product]");
    if (waBtn) {
      const product = PRODUCTS.find((p) => p.id === waBtn.dataset.waProduct);
      if (product) openWhatsApp(productWhatsAppMessage(product));
    }
  });

  // Modal close
  document.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeProductModal);
  });

  // Modal interactions (delegation on stable parent)
  document.getElementById("productModal")?.addEventListener("click", (e) => {
    if (!state.modalProductId) return;

    const colorBtn = e.target.closest("[data-color]");
    if (colorBtn) {
      state.modalColor = colorBtn.dataset.color;
      document.querySelectorAll("#modalContent .swatch").forEach((s) => {
        const on = s === colorBtn;
        s.classList.toggle("is-selected", on);
        s.setAttribute("aria-checked", on ? "true" : "false");
      });
      return;
    }

    const sizeBtn = e.target.closest("[data-size]");
    if (sizeBtn) {
      state.modalSize = sizeBtn.dataset.size;
      document.querySelectorAll("#modalContent .size-btn").forEach((s) => {
        const on = s === sizeBtn;
        s.classList.toggle("is-selected", on);
        s.setAttribute("aria-checked", on ? "true" : "false");
      });
      const error = document.getElementById("modalError");
      if (error) error.hidden = true;
      return;
    }

    const qtyBtn = e.target.closest("[data-modal-qty]");
    if (qtyBtn) {
      const delta = Number(qtyBtn.dataset.modalQty);
      state.modalQty = Math.max(1, state.modalQty + delta);
      const label = document.getElementById("modalQtyValue");
      if (label) label.textContent = String(state.modalQty);
      return;
    }

    if (e.target.closest("#modalAddBtn")) {
      const product = getModalProduct();
      if (!product) return;
      if (!validateModalSelection()) return;
      addToCart(product, {
        size: state.modalSize,
        color: state.modalColor,
        qty: state.modalQty
      });
      closeProductModal();
      openCart();
      return;
    }

    if (e.target.closest("#modalWaBtn")) {
      const product = getModalProduct();
      if (!product) return;
      openWhatsApp(
        productWhatsAppMessage(product, {
          size: state.modalSize,
          color: state.modalColor,
          qty: state.modalQty
        })
      );
    }
  });

  // General WhatsApp buttons
  const waHandler = () => openWhatsApp(generalWhatsAppMessage());
  document.querySelectorAll("[data-wa-general]").forEach((btn) => {
    btn.addEventListener("click", waHandler);
  });
  document.getElementById("headerWaBtn")?.addEventListener("click", waHandler);
  document.getElementById("mobileWaBtn")?.addEventListener("click", () => {
    closeMenu();
    waHandler();
  });
  document.getElementById("waFloat")?.addEventListener("click", waHandler);

  // Escape key
document.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const modal = document.getElementById("productModal");
  if (!modal || modal.hidden) return;
  const dialog = modal.querySelector(".modal__dialog");
  const focusables = dialog.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault(); last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault(); first.focus();
  }
});

  // Config banner dismiss
  document.getElementById("dismissConfig")?.addEventListener("click", () => {
    const banner = document.getElementById("configBanner");
    if (banner) banner.hidden = true;
  });

  // Year
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

/* ---------- Reveal on scroll ---------- */
function initReveals() {
  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  nodes.forEach((n) => io.observe(n));
}

/* ---------- Init ---------- */
function init() {
  renderCategories();
  renderProducts();
  renderInstagram();
  renderCart();
  updateCartBadge();
  bindEvents();
  initReveals();

  if (!isWhatsAppConfigured()) {
    // Soft notice for demo environment — not blocking
    const banner = document.getElementById("configBanner");
    if (banner) banner.hidden = false;
  }

  // Apply store name in visible spots if customized later
  document.title = `${CONFIG.storeName} — Moda Feminina e Calçados`;
}

/* ---------- Textos Legais ---------- */
const LEGAL_TEXTS = {
   privacidade: {
    title: "Política de Privacidade e LGPD",
    content: `
      <p>A <strong>Formosa By Clara</strong> valoriza a sua privacidade. Esta política explica como tratamos os seus dados em conformidade com a LGPD (Lei 13.709/18).</p>
      
      <h3>1. Consentimento e Finalidade Clara</h3>
      <p>Ao utilizar nosso site e enviar mensagens via WhatsApp, você concorda com o tratamento dos seus dados (nome, endereço, CPF) exclusivamente para processar seu pedido e realizar entregas. Não utilizamos seus dados para envio de spam.</p>
      
      <h3>2. Direito de Exclusão</h3>
      <p>Você tem o direito de solicitar a exclusão dos seus dados dos nossos registros a qualquer momento. Para isso, basta enviar uma mensagem para o nosso WhatsApp solicitando a remoção.</p>
      
      <h3>3. Encarregado de Dados (DPO)</h3>
      <p>Para exercer seus direitos ou tirar dúvidas sobre a LGPD, você pode entrar em contato diretamente com nossa encarregada de dados pelo e-mail: <strong>dpo@formosabyclara.com.br</strong>.</p>
      
      <h3>4. Cookies</h3>
      <p>Utilizamos apenas cookies essenciais para manter sua sacola de compras salva. Não rastreamos seus dados para anúncios de terceiros.</p>
    `
  },
  termos: {
    title: "Termos de Serviço",
    content: `
      <p>Ao navegar e comprar na <strong>Formosa By Clara</strong>, você concorda com os termos abaixo:</p>
      <h3>1. Produtos e Disponibilidade</h3>
      <p>As cores e modelos das peças podem variar levemente de acordo com o monitor do seu dispositivo. A disponibilidade de estoque é confirmada no momento do atendimento via WhatsApp.</p>
      <h3>2. Preços e Pagamentos</h3>
      <p>Os preços exibidos no site são estimados e podem sofrer alterações sem aviso prévio. O valor final, formas de pagamento e cálculo de frete são combinados diretamente com a vendedora pelo WhatsApp.</p>
      <h3>3. Uso do Site</h3>
      <p>Todo o conteúdo (fotos, textos e logotipos) é de propriedade da Formosa By Clara e não pode ser copiado ou reproduzido sem autorização.</p>
    `
  },
  trocas: {
    title: "Trocas e Devoluções",
    content: `
      <p>Nosso objetivo é que você ame suas peças. Caso precise de ajuda, siga as diretrizes abaixo (baseadas no Código de Defesa do Consumidor):</p>
      <h3>1. Direito de Arrependimento (Compras Online)</h3>
      <p>Conforme o artigo 49 do CDC, você tem até <strong>7 dias corridos</strong> após o recebimento do produto para desistir da compra, por qualquer motivo. O produto deve ser devolvido sem sinais de uso e com a etiqueta anexada.</p>
      <h3>2. Trocas por Tamanho</h3>
      <p>Para trocas de tamanho, a peça deve estar sem uso, sem odores e com a etiqueta. O prazo e a disponibilidade do novo tamanho serão verificados pela nossa equipe no atendimento via WhatsApp.</p>
      <h3>3. Defeitos de Fabricação</h3>
      <p>Caso receba uma peça com defeito, nos avise imediatamente pelo WhatsApp com fotos do produto. Resolveremos a troca ou devolução do valor sem custo adicional para você.</p>
    `
  }
};

function openLegalModal(type) {
  const data = LEGAL_TEXTS[type];
  if (!data) return;

  const modal = document.getElementById("legalModal");
  const title = document.getElementById("legalTitle");
  const body = document.getElementById("legalBody");
  
  title.textContent = data.title;
  body.innerHTML = data.content;

  state.lastFocus = document.activeElement;
  modal.hidden = false;
  lockBody(true);
  
  modal.querySelector(".modal__dialog").focus();
}

function closeLegalModal() {
  const modal = document.getElementById("legalModal");
  if (!modal) return;
  modal.hidden = true;
  lockBody(false);
  if (state.lastFocus && state.lastFocus.focus) state.lastFocus.focus();
}

document.addEventListener("DOMContentLoaded", init);

// Verifica se o usuário já aceitou os cookies
if (!localStorage.getItem("cookiesAceitos")) {
  document.getElementById("cookieBanner").style.display = "flex";
}

function aceitarCookies() {
  localStorage.setItem("cookiesAceitos", "true");
  document.getElementById("cookieBanner").style.display = "none";
}