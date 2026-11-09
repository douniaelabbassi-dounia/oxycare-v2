/* =========================================================
   OxyCare – version simple – script commun
   ========================================================= */

const CONFIG = {
  whatsapp: "212677447844",          // format international, sans + ni espaces
  email: "oxygeneexcellenceassistance@gmail.com",
  facebook: "https://www.facebook.com/OxygeneExcellenceAssistance",
};

/* ---------- Traductions arabes (le français est dans le HTML) ---------- */
const AR = {
  "nav.home": "الرئيسية", "nav.services": "خدماتنا", "nav.mre": "عرض مغاربة العالم", "nav.contact": "اتصل بنا", "cta.contact": "تواصلوا معنا",
  "hero.eyebrow": "أوكسجين إكسلانس للمساعدة · أكدال، الرباط",
  "hero.t1": "ثقتكم،", "hero.t2": "التزامنا.",
  "hero.lead": "خدمات المساعدة الإدارية (CNSS، AMO، المقاطعة) ومرافقة حسب الحاجة لكبار السن في الرباط. استقلالية وطمأنينة لأحبائكم.",
  "hero.cta1": "راسلونا على واتساب", "hero.cta2": "خدماتنا",
  "trust.2": "مرافقة كبار السن", "trust.3": "تقرير فوري",
  "badge.t": "مقرنا في أكدال، الرباط", "badge.s": "في خدمة العائلات ومغاربة العالم",
  "poles.eyebrow": "خدماتنا", "poles.title": "أربعة أقطاب، فريق واحد", "poles.lead": "نتكلف بإجراءاتكم ونعتني بأقاربكم، مع إطلاعكم على كل مرحلة.",
  "p.admin.t": "الإدارة", "p.admin.d": "ملفات CNSS وAMO والمقاطعة والوثائق الرسمية: إيداع وتتبع كامل.",
  "p.sante.t": "الصحة وكبار السن", "p.sante.d": "الاستشارات، الاستشفاء، متابعة طبية دقيقة وتقرير فوري.",
  "p.auto.t": "السيارات", "p.auto.d": "الفحص التقني، تغيير الزيت والصيانة، تجديد التأمين.",
  "p.conc.t": "الكونسيرج", "p.conc.d": "التسوق، السوق، وتوصيلات حسب احتياجات أسرتكم.",
  "more": "اكتشفوا المزيد ←",
  "band.t": "تعيشون في الخارج؟", "band.p": "عرض خاص لمغاربة العالم — مرحبا بكم! نتكلف بإجراءاتكم ونعتني بأقاربكم في المغرب.",
  "band.cta1": "اكتشفوا العرض", "band.cta2": "تواصلوا معنا",
  "footer.motto": "ثقتكم، التزامنا.",
  "sv.eyebrow": "خدماتنا", "sv.title": "كل ما نتكلف به عنكم", "sv.lead": "أربعة أقطاب لتبسيط حياتكم اليومية وحياة أقاربكم.",
  "s.admin.p": "نحضر ملفاتكم ونودعها ونتابعها حتى النهاية، دون انتظار.",
  "s.cnss.t": "ملفات الضمان الاجتماعي CNSS", "s.cnss.d": "تحضير وإيداع وتتبع ملفاتكم.",
  "s.amo.t": "التأمين الإجباري عن المرض AMO", "s.amo.d": "طلبات التحمل وملفات الاسترجاع.",
  "s.mouk.t": "المقاطعة والوثائق الرسمية", "s.mouk.d": "إيداع وتتبع كامل.",
  "s.pack.t": "الباقة الإدارية", "s.pack.d": "تكفل شامل مع تتبع واضح للملف.",
  "s.sante.p": "مرافقة حسب الحاجة تحافظ على استقلالية كبار السن وتطمئن العائلة.",
  "s.consult.t": "المرافقة إلى الاستشارات", "s.consult.d": "عند الطبيب، مع تقرير فوري.",
  "s.hospi.t": "الاستشفاء", "s.hospi.d": "حضور ومتابعة من الدخول إلى الخروج.",
  "s.suivi.t": "متابعة طبية", "s.suivi.d": "المواعيد والتحاليل والعلاجات.",
  "s.transport.t": "النقل مع المرافقة", "s.transport.d": "من باب المنزل حتى الموعد.",
  "s.auto.p": "نتكلف بسيارتكم من البداية إلى تسليم المفاتيح.",
  "s.visite.t": "الفحص التقني", "s.visite.d": "نجريه نيابة عنكم.",
  "s.vidange.t": "تغيير الزيت والصيانة الميكانيكية", "s.vidange.d": "لدى ميكانيكي موثوق.",
  "s.assur.t": "تجديد التأمين", "s.assur.d": "دون أي عناء.",
  "s.conc.p": "حياة يومية أسهل لكم ولأقاربكم.",
  "s.courses.t": "التسوق والسوق", "s.courses.d": "بعناية وحسب عاداتكم.",
  "s.livr.t": "توصيل حسب الطلب", "s.livr.d": "إلى المنزل، حسب احتياجات أسرتكم.",
  "s.ask": "اطلبوا هذه الخدمة",
  "m.eyebrow": "عرض خاص لمغاربة العالم", "m.title": "مرحبا بكم!",
  "m.lead": "تعيشون في الخارج؟ نتكلف بإجراءاتكم في المغرب ونعتني بأقاربكم كأنهم أهلنا، مع تقرير فوري في كل مرحلة.",
  "m.p1": "الإدارة والصحة — طمأنينة تامة", "m.p2": "السيارة والكونسيرج — لوجستيك سهل",
  "m.p1a": "مرافقة أقاربكم", "m.p1ad": "الاستشارات، الاستشفاء، متابعة طبية دقيقة، تقرير فوري.",
  "m.p1b": "الباقة الإدارية", "m.p1bd": "المقاطعة، الوثائق الرسمية، الإيداع والتتبع الكامل.",
  "m.p2a": "لوجستيك السيارات", "m.p2ad": "الفحص التقني، الصيانة الميكانيكية، تجديد التأمين دون عناء.",
  "m.p2b": "كونسيرج يومي", "m.p2bd": "التسوق، السوق، توصيلات حسب احتياجات أسرتكم.",
  "m.cta": "أستفيد من العرض", "m.note": "اضغطوا على الملصق لتكبيره",
  "c.eyebrow": "اتصل بنا", "c.title": "لنتحدث عن حاجتكم", "c.lead": "سؤال، ملف، أو قريب يحتاج مرافقة؟ راسلونا ونرد عليكم بسرعة.",
  "c.wa": "واتساب مباشر", "c.phone": "الهاتف", "c.address": "العنوان", "c.city": "أكدال، الرباط، المغرب",
  "f.title": "أرسلوا طلبكم", "f.service": "الخدمة", "f.choose": "اختاروا خدمة",
  "f.o.admin": "الإدارة (CNSS، AMO، المقاطعة)", "f.o.sante": "الصحة وكبار السن", "f.o.auto": "السيارات", "f.o.conc": "الكونسيرج", "f.o.other": "خدمة أخرى",
  "f.name": "الاسم الكامل", "f.phone": "الهاتف / واتساب", "f.city": "المدينة", "f.msg": "رسالتكم (اختياري)",
  "f.mre": "أعيش في الخارج (عرض مغاربة العالم)",
  "f.err": "المرجو اختيار خدمة وإدخال الاسم ورقم هاتف صحيح.",
  "f.submit": "إرسال عبر واتساب", "f.ok": "تم فتح واتساب مع طلبكم، لم يبق سوى إرساله.",
};

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const storage = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
};

/* ---------- Langue ---------- */
const FR = {};
$$("[data-i18n]").forEach(el => { FR[el.dataset.i18n] ??= el.textContent.trim(); });
let lang = storage.get("oxycare-lang") === "ar" ? "ar" : "fr";

function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => { el.textContent = (lang === "ar" ? AR : FR)[el.dataset.i18n] ?? FR[el.dataset.i18n]; });
  $("#langToggle").textContent = lang === "ar" ? "Français" : "العربية";
}
$("#langToggle").addEventListener("click", () => {
  lang = lang === "ar" ? "fr" : "ar";
  storage.set("oxycare-lang", lang);
  applyLang();
});

/* ---------- Liens de contact ---------- */
const LINKS = {
  whatsapp: `https://wa.me/${CONFIG.whatsapp}`,
  phone: `tel:+${CONFIG.whatsapp}`,
  email: `mailto:${CONFIG.email}`,
  facebook: CONFIG.facebook,
};
$$("[data-link]").forEach(a => { a.href = LINKS[a.dataset.link]; });

/* ---------- Menu mobile ---------- */
const burger = $("#burger"), nav = $("#nav");
function toggleMenu(open = !nav.classList.contains("is-open")) {
  nav.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
}
burger.addEventListener("click", () => toggleMenu());
window.addEventListener("keydown", e => { if (e.key === "Escape") toggleMenu(false); });

/* ---------- Apparition douce au scroll ---------- */
const io = new IntersectionObserver(entries => entries.forEach(en => {
  if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
}), { threshold: 0.12 });
$$(".fade").forEach(el => io.observe(el));

/* ---------- Formulaire de contact → WhatsApp ---------- */
const form = $("#contactForm");
if (form) {
  const params = new URLSearchParams(location.search);
  if (params.get("service")) form.service.value = params.get("service");
  if (params.has("mre")) form.mre.checked = true;

  form.addEventListener("submit", e => {
    e.preventDefault();
    const phoneOk = form.phone.value.replace(/\D/g, "").length >= 9;
    const ok = form.service.value && form.name.value.trim() && phoneOk;
    $("#formError").classList.toggle("is-visible", !ok);
    if (!ok) return;
    const label = form.service.selectedOptions[0].dataset.fr || form.service.selectedOptions[0].textContent;
    const msg = [
      "Bonjour OxyCare,",
      `Service souhaité : ${label}`,
      form.mre.checked && "Je suis MRE (offre spéciale MRE)",
      `Nom : ${form.name.value.trim()}`,
      `Téléphone : ${form.phone.value.trim()}`,
      form.city.value.trim() && `Ville : ${form.city.value.trim()}`,
      form.message.value.trim() && `Message : ${form.message.value.trim()}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
    $("#formOk").classList.add("is-visible");
  });
}

$$("[data-year]").forEach(el => { el.textContent = new Date().getFullYear(); });
applyLang();
