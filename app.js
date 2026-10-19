/* ============================================================
   LUXE STORE — منطق المتجر (JavaScript)
   ============================================================ */

/* ---------------- بيانات المنتجات ---------------- */
const PRODUCTS = [
  { id: 1,  name: "ساعة كرونوغراف رويال",    cat: "ساعات",     price: 4200, old: 5000, emoji: "⌚", rating: 4.9, reviews: 312, badge: "الأكثر مبيعاً", grad: ["#2b2f4a", "#0e1020"], desc: "حركة سويسرية دقيقة مع هيكل تيتانيوم مطلي بالذهب عيار 18." },
  { id: 2,  name: "نظارة أفياتور الذهبية",   cat: "نظارات",    price: 980,  old: 1250, emoji: "🕶️", rating: 4.7, reviews: 154, badge: "-22%", sale: true, grad: ["#3a2d1a", "#14100a"], desc: "عدسات مستقطبة بإطار معدني كلاسيكي يحمي من 100% من الأشعة." },
  { id: 3,  name: "حقيبة جلد إكزوتيك",        cat: "حقائب",     price: 2650, old: null, emoji: "👜", rating: 4.8, reviews: 98,  badge: "جديد", grad: ["#4a1f2b", "#1a0a10"], desc: "جلد طبيعي مدبوغ يدوياً بخياطة حريرية وإغلاق ذهبي مصقول." },
  { id: 4,  name: "عطر أولمبيا نوار 100مل",   cat: "عطور",      price: 750,  old: 900,  emoji: "🧴", rating: 4.9, reviews: 521, badge: "-17%", sale: true, grad: ["#1f2f4a", "#0a1020"], desc: "مزيج فاخر من العود الكمبودي والمسك الأبيض مع لمسة فانيلا." },
  { id: 5,  name: "خاتم ألماس بيرليت",        cat: "مجوهرات",   price: 8900, old: null, emoji: "💍", rating: 5.0, reviews: 64,  badge: "حصري", grad: ["#3d3a1a", "#15130a"], desc: "ألماسة 1.2 قيراط نقاء VVS1 مرصّعة على قاعدة ذهب وردي." },
  { id: 6,  name: "سماعات استوديو بلاتينية",  cat: "إلكترونيات", price: 1450, old: 1700, emoji: "🎧", rating: 4.6, reviews: 289, badge: "-15%", sale: true, grad: ["#243a35", "#0c1512"], desc: "عزل ضوضاء هجين، محركات بيريوم 50مم، وبطارية تدوم 40 ساعة." },
  { id: 7,  name: "قلم حبر فيوجن المحدود",    cat: "إكسسوارات", price: 620,  old: null, emoji: "🖋️", rating: 4.8, reviews: 77,  badge: "إصدار محدود", grad: ["#2e2440", "#100c18"], desc: "سبائك روديوم مع سن قلم 18K وعلبة عرض مخملية." },
  { id: 8,  name: "سوار ذكي مونارك",          cat: "ساعات",     price: 1980, old: 2300, emoji: "⌚", rating: 4.5, reviews: 203, badge: "-14%", sale: true, grad: ["#1a2f3a", "#0a1318"], desc: "شاشة أموليد ياقوتية، تيتانيوم Grade-5، ومستشعر ECG طبي." },
  { id: 9,  name: "محفظة جلد سليِم غولد",     cat: "حقائب",     price: 480,  old: null, emoji: "💼", rating: 4.7, reviews: 141, badge: null, grad: ["#3a2a12", "#140e06"], desc: "تصميم رفيع مع حماية RFID وختم ذهبي بأحرفك المجانية." },
  { id: 10, name: "عطر ملكي أود سبيريت",      cat: "عطور",      price: 1150, old: 1400, emoji: "🌹", rating: 4.9, reviews: 356, badge: "الأكثر مبيعاً", grad: ["#401f2a", "#160a0e"], desc: "ورد طائفي وزعفران مع قاعدة عنبر دافئة تدوم 12 ساعة." },
  { id: 11, name: "قلادة زمرد فيرونا",        cat: "مجوهرات",   price: 5600, old: 6400, emoji: "📿", rating: 4.8, reviews: 45,  badge: "-13%", sale: true, grad: ["#16382c", "#07120e"], desc: "زمرد كولومبي مطفأ طبيعي محاط بألماس على سلسلة بيضاء." },
  { id: 12, name: "ساعة طاولة باروكية",       cat: "إكسسوارات", price: 2200, old: null, emoji: "🕰️", rating: 4.6, reviews: 38,  badge: "تحفة", grad: ["#38301a", "#12100a"], desc: "هيكل نحاسي مطلي ذهب 24 قيراط بحركة ميكانيكية منقوشة." },
  { id: 13, name: "كاميرا سينمائية LUX-M",    cat: "إلكترونيات", price: 7800, old: 8600, emoji: "📷", rating: 4.9, reviews: 112, badge: "-9%", sale: true, grad: ["#2a2a35", "#0d0d14"], desc: "استشعار Full-Frame 6K مع مثبت بصري خماسي المحاور." },
  { id: 14, name: "نظارة قراءة هرمن",         cat: "نظارات",    price: 540,  old: null, emoji: "👓", rating: 4.4, reviews: 86,  badge: null, grad: ["#33261a", "#110c08"], desc: "أسيتات إيطالي مصقول يدوياً مع عدسات زرقاء واقية." },
  { id: 15, name: "لوحة مفاتيح ميكانيكية Aurum", cat: "إلكترونيات", price: 1320, old: 1600, emoji: "⌨️", rating: 4.7, reviews: 231, badge: "-18%", sale: true, grad: ["#20263a", "#0a0d16"], desc: "مفاتيح PBT مدهونة ثنائية، هيكل ألمنيوم ذهبي، وصوت طقطقة فاخر." },
  { id: 16, name: "طقم أزرار أكمام مونوغرام", cat: "مجوهرات",   price: 890,  old: null, emoji: "🔷", rating: 4.8, reviews: 52,  badge: "هدية مثالية", grad: ["#1f2d40", "#0a1018"], desc: "ذهب أبيض 14K مع حجر أونيكس أسود وحروفك المنقوشة مجاناً." },
];

const CATS = ["الكل", ...new Set(PRODUCTS.map(p => p.cat))];

/* ---------------- حالة التطبيق ---------------- */
let cart = JSON.parse(localStorage.getItem("luxe_cart") || "[]");
let activeCat = "الكل";
let searchTerm = "";

const fmt = n => n.toLocaleString("ar-EG") + " ر.س";
const save = () => localStorage.setItem("luxe_cart", JSON.stringify(cart));

/* ---------------- عناصر DOM ---------------- */
const $ = s => document.querySelector(s);
const grid = $("#grid");
const noRes = $("#noResults");
const cartCountEl = $("#cartCount");

/* ================= عرض المنتجات ================= */
function starsHTML(rating) {
  const full = Math.round(rating);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function renderProducts() {
  const list = PRODUCTS.filter(p =>
    (activeCat === "الكل" || p.cat === activeCat) &&
    (p.name.includes(searchTerm) || p.desc.includes(searchTerm) || p.cat.includes(searchTerm))
  );

  grid.innerHTML = "";
  noRes.style.display = list.length ? "none" : "block";

  list.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.style.animationDelay = (i * 0.06) + "s";
    card.innerHTML = `
      <div class="glow"></div>
      ${p.badge ? `<span class="badge ${p.sale ? "sale" : ""}">${p.badge}</span>` : ""}
      <div class="p-img" style="background: radial-gradient(circle at 50% 30%, ${p.grad[0]}, ${p.grad[1]})">
        <span class="emoji">${p.emoji}</span>
      </div>
      <div class="p-body">
        <div class="p-cat">${p.cat}</div>
        <h3 class="p-name">${p.name}</h3>
        <p class="p-desc">${p.desc}</p>
        <div class="stars">${starsHTML(p.rating)} <small>(${p.reviews} تقييم)</small></div>
        <div class="p-foot">
          <div class="price">
            <span class="now">${fmt(p.price)}</span>
            ${p.old ? `<span class="old">${fmt(p.old)}</span>` : ""}
          </div>
          <button class="add-btn" data-id="${p.id}">🛒 أضف للسلة</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });

  // تأثير الميل ثلاثي الأبعاد + البريق الذي يتبع الماوس
  document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      card.style.setProperty("--mx", x + "px");
      card.style.setProperty("--my", y + "px");
      const rx = ((y / r.height) - 0.5) * -7;
      const ry = ((x / r.width) - 0.5) * 7;
      card.style.transform = `translateY(-12px) perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* أزرار الإضافة إلى السلة (تفويض أحداث) */
grid.addEventListener("click", e => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  addToCart(+btn.dataset.id);
  btn.classList.add("added");
  btn.innerHTML = "✓ تمت الإضافة";
  setTimeout(() => { btn.classList.remove("added"); btn.innerHTML = "🛒 أضف للسلة"; }, 1200);
});

/* ================= التصنيفات والبحث ================= */
function renderChips() {
  const wrap = $("#chips");
  wrap.innerHTML = CATS.map(c =>
    `<button class="chip ${c === activeCat ? "active" : ""}" data-cat="${c}">${c}</button>`
  ).join("");
}
$("#chips").addEventListener("click", e => {
  const chip = e.target.closest(".chip");
  if (!chip) return;
  activeCat = chip.dataset.cat;
  renderChips();
  renderProducts();
});
$("#search").addEventListener("input", e => {
  searchTerm = e.target.value.trim();
  renderProducts();
});

/* ================= السلة ================= */
function addToCart(id) {
  const item = cart.find(i => i.id === id);
  if (item) item.qty++;
  else { const p = PRODUCTS.find(x => x.id === id); cart.push({ id: p.id, qty: 1 }); }
  save(); updateCartUI();
  const p = PRODUCTS.find(x => x.id === id);
  toast(`🛒 تمت إضافة «${p.name}» إلى السلة`);
  bumpBadge();
}

function changeQty(id, d) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  save(); updateCartUI();
}

function removeItem(id) {
  const p = PRODUCTS.find(x => x.id === id);
  cart = cart.filter(i => i.id !== id);
  save(); updateCartUI();
  toast(`🗑️ تم حذف «${p.name}» من السلة`);
}

function cartTotal() {
  return cart.reduce((s, i) => s + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0);
}

function updateCartUI() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  cartCountEl.textContent = count;
  cartCountEl.classList.toggle("show", count > 0);

  const box = $("#cartItems");
  if (!cart.length) {
    box.innerHTML = `<div class="cart-empty"><span class="big">🛍️</span>سلتك فارغة حالياً...<br>اكتشف تحفنا الفاخرة وأضف ما يحلو لك.</div>`;
  } else {
    box.innerHTML = cart.map(i => {
      const p = PRODUCTS.find(x => x.id === i.id);
      return `
        <div class="cart-item">
          <div class="ci-thumb" style="background: radial-gradient(circle at 40% 30%, ${p.grad[0]}, ${p.grad[1]})">${p.emoji}</div>
          <div class="ci-info">
            <h4>${p.name}</h4>
            <div class="ci-price">${fmt(p.price)} × ${i.qty} = <b>${fmt(p.price * i.qty)}</b></div>
          </div>
          <div class="ci-controls">
            <div class="qty">
              <button onclick="changeQty(${p.id},1)">+</button>
              <span>${i.qty}</span>
              <button onclick="changeQty(${p.id},-1)">−</button>
            </div>
            <button class="remove-item" onclick="removeItem(${p.id})">✕ إزالة</button>
          </div>
        </div>`;
    }).join("");
  }

  const total = cartTotal();
  const ship = total > 3000 || total === 0 ? 0 : 50;
  $("#subTotal").textContent = fmt(total);
  $("#shipping").textContent = ship ? fmt(ship) : "مجانية ✨";
  $("#grandTotal").textContent = fmt(total + ship);
  $("#checkoutBtn").disabled = !cart.length;
  $("#checkoutBtn").style.opacity = cart.length ? 1 : .45;
}

function bumpBadge() {
  cartCountEl.classList.remove("bump");
  void cartCountEl.offsetWidth;
  cartCountEl.classList.add("bump");
}

/* فتح/إغلاق درج السلة */
function openDrawer() { $("#drawer").classList.add("open"); $("#overlay").classList.add("open"); }
function closeDrawer() { $("#drawer").classList.remove("open"); $("#overlay").classList.remove("open"); }
$("#cartBtn").addEventListener("click", openDrawer);
$("#closeCart").addEventListener("click", closeDrawer);
$("#overlay").addEventListener("click", () => { closeDrawer(); closeModal(); });

/* ================= الدفع ================= */
$("#checkoutBtn").addEventListener("click", () => {
  closeDrawer();
  $("#payTotal").textContent = fmt(cartTotal());
  $("#modal").classList.add("open");
});
$("#closeModal").addEventListener("click", closeModal);
function closeModal() { $("#modal").classList.remove("open"); }

// تنسيق رقم البطاقة أثناء الكتابة
$("#cardNum").addEventListener("input", e => {
  let v = e.target.value.replace(/\D/g, "").slice(0, 16);
  e.target.value = v.replace(/(\d{4})(?=\d)/g, "$1 ");
});
$("#cardExp").addEventListener("input", e => {
  let v = e.target.value.replace(/\D/g, "").slice(0, 4);
  if (v.length > 2) v = v.slice(0, 2) + "/" + v.slice(2);
  e.target.value = v;
});

$("#payForm").addEventListener("submit", e => {
  e.preventDefault();
  const fields = [$("#payerName"), $("#cardNum"), $("#cardExp"), $("#cardCvv")];
  let ok = true;
  fields.forEach(f => {
    f.classList.remove("invalid");
    const bad =
      f.id === "cardNum" && f.value.replace(/\s/g, "").length !== 16 ||
      f.id === "cardExp" && !/^\d{2}\/\d{2}$/.test(f.value) ||
      f.id === "cardCvv" && f.value.length < 3 ||
      f.value.trim() === "";
    if (bad) { f.classList.add("invalid"); ok = false; }
  });
  if (!ok) { toast("⚠️ يرجى التحقق من بيانات البطاقة", true); return; }

  const btn = $("#payBtn");
  btn.innerHTML = "جارٍ معالجة الدفع<span class='spinner'></span>";
  btn.disabled = true;

  setTimeout(() => {
    $("#payForm").style.display = "none";
    $("#successView").style.display = "block";
    confetti();
    cart = []; save(); updateCartUI();
    btn.innerHTML = "ادفع الآن"; btn.disabled = false;
  }, 1800);
});

$("#continueShop").addEventListener("click", () => {
  closeModal();
  $("#payForm").style.display = "block";
  $("#successView").style.display = "none";
  $("#payForm").reset();
});

/* ================= إشعارات Toast ================= */
function toast(msg, isWarn = false) {
  const t = document.createElement("div");
  t.className = "toast";
  if (isWarn) t.style.borderColor = "rgba(255,93,108,.6)";
  t.innerHTML = `<span>${msg}</span>`;
  $("#toasts").appendChild(t);
  setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 400); }, 2600);
}

/* ================= احتفال Confetti ================= */
function confetti() {
  const colors = ["#d4af37", "#f6e27a", "#ffffff", "#3ee6a0", "#ff5d6c"];
  for (let i = 0; i < 90; i++) {
    const c = document.createElement("div");
    const size = 6 + Math.random() * 8;
    c.style.cssText = `position:fixed;z-index:1500;top:-20px;left:${Math.random()*100}vw;
      width:${size}px;height:${size * (Math.random() > .5 ? 1 : .4)}px;pointer-events:none;
      background:${colors[i % colors.length]};border-radius:${Math.random() > .5 ? "50%" : "2px"};`;
    document.body.appendChild(c);
    const dur = 2200 + Math.random() * 2000;
    c.animate([
      { transform: `translateY(0) rotate(0)`, opacity: 1 },
      { transform: `translateY(105vh) rotate(${720 + Math.random() * 720}deg) translateX(${-100 + Math.random() * 200}px)`, opacity: .8 }
    ], { duration: dur, easing: "cubic-bezier(.2,.6,.4,1)" }).onfinish = () => c.remove();
  }
}

/* ================= جزيئات الخلفية (Canvas) ================= */
const cvs = $("#particles"), ctx = cvs.getContext("2d");
let dots = [];
function resizeCvs() {
  cvs.width = innerWidth; cvs.height = innerHeight;
  dots = Array.from({ length: Math.min(60, innerWidth / 22) }, () => ({
    x: Math.random() * cvs.width, y: Math.random() * cvs.height,
    r: .6 + Math.random() * 2, s: .15 + Math.random() * .45,
    o: .15 + Math.random() * .5, tw: Math.random() * Math.PI * 2
  }));
}
resizeCvs(); addEventListener("resize", resizeCvs);

function drawDots() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  dots.forEach(d => {
    d.y -= d.s; d.tw += .02;
    if (d.y < -5) { d.y = cvs.height + 5; d.x = Math.random() * cvs.width; }
    ctx.beginPath();
    ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(212,175,55,${d.o * (0.6 + 0.4 * Math.sin(d.tw))})`;
    ctx.shadowColor = "rgba(212,175,55,.8)"; ctx.shadowBlur = 6;
    ctx.fill(); ctx.shadowBlur = 0;
  });
  requestAnimationFrame(drawDots);
}
drawDots();

/* ================= Header & Scroll FX ================= */
addEventListener("scroll", () => {
  $("header").classList.toggle("scrolled", scrollY > 40);
  const h = document.documentElement;
  $("#progress").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  $("#toTop").classList.toggle("show", scrollY > 500);
});
$("#toTop").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

/* ظهور تدريجي بالعناصر عند التمرير */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* عدادات الهيرو المتحركة */
function animateCount(el, target, suffix = "") {
  let cur = 0;
  const step = target / 60;
  const tick = () => {
    cur += step;
    if (cur >= target) { el.textContent = target.toLocaleString("ar-EG") + suffix; return; }
    el.textContent = Math.floor(cur).toLocaleString("ar-EG") + suffix;
    requestAnimationFrame(tick);
  };
  tick();
}
const statsIO = new IntersectionObserver(es => {
  es.forEach(en => {
    if (!en.isIntersecting) return;
    document.querySelectorAll(".stat b").forEach(b => {
      const t = +b.dataset.count;
      animateCount(b, t, b.dataset.suffix || "");
    });
    statsIO.disconnect();
  });
}, { threshold: .4 });
statsIO.observe($(".hero-stats"));

/* قائمة الجوال */
$("#menuToggle").addEventListener("click", () => $("nav").classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a =>
  a.addEventListener("click", () => $("nav").classList.remove("open")));

/* النشرة البريدية */
$("#newsForm").addEventListener("submit", e => {
  e.preventDefault();
  const inp = e.target.querySelector("input");
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(inp.value)) { toast("⚠️ يرجى إدخال بريد إلكتروني صحيح", true); inp.classList.add("invalid"); return; }
  toast("✨ تم الاشتراك! سيصلك أقرب إصدار حصري.");
  confetti();
  inp.value = "";
});

/* إغلاق بمفتاح Escape */
addEventListener("keydown", e => {
  if (e.key === "Escape") { closeDrawer(); closeModal(); $("nav").classList.remove("open"); }
});

/* ================= تشغيل أولي ================= */
renderChips();
renderProducts();
updateCartUI();
