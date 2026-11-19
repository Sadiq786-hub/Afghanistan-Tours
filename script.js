const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");

menuBtn.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  function filterCards() {
    const text = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {
      const name = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = name.includes(text) ? "block" : "none";
    });
  }

  // Filter while typing
  searchInput.addEventListener("input", filterCards);

  // Filter when the button is clicked
  document.getElementById("searchBtn").addEventListener("click", filterCards);
}


const translations = {
  en: {
    site_name: "Afghanistan Tours",
    nav_home: "Home",
    nav_destinations: "Destinations",
    nav_tours: "Tours",
    nav_about: "About",
    nav_contact: "Contact",
    hero_title: "Discover the Beauty of Afghanistan",
    hero_text: "Book affordable domestic tours to Kabul, Bamyan and Herat.",
    hero_btn: "View Destinations",
    destinations_title: "Our Destinations",
    kabul_name: "Kabul",
    kabul_text: "Explore the capital, its gardens and bazaars.",
    bamyan_name: "Bamyan",
    bamyan_text: "Discover the valley, cliffs and Band-e Amir lakes.",
    herat_name: "Herat",
    herat_text: "Visit the historic citadel and the Blue Mosque.",
    search_placeholder: "Search destination (e.g. Kabul)",
    search_btn: "Search",
    tours_title: "Tour Packages",
    tour1_name: "Kabul City Tour",
    tour1_duration: "2 Days",
    tour2_name: "Bamyan Adventure",
    tour2_duration: "4 Days",
    tour3_name: "Herat Heritage Tour",
    tour3_duration: "3 Days",
    tour_hotel: "Hotel stay",
    tour_guide: "Local guide",
    tour_transport: "Transport included",
    tour_bande: "Band-e Amir visit",
    tour_meals: "Meals included",
    tour_citadel: "Citadel and Blue Mosque",
    book_btn: "Book Now",
    about_title: "About Us",
    about_text: "We are a local travel agency offering safe and affordable domestic tours across Afghanistan. Our team knows every route and every hidden place, so you can enjoy your trip without worry.",
    stat_travelers: "Happy Travelers",
    stat_destinations: "Destinations",
    stat_years: "Years Experience",
    testimonials_title: "What Our Travelers Say",
    contact_title: "Contact Us",
    contact_text: "Ready to plan your trip? Send us a message.",
    form_name: "Your name",
    form_email: "Your email",
    form_choose: "Choose a destination",
    form_message: "Your message",
    form_send: "Send Message",
    footer_contact: "Phone: +93 770200192 | Email: info@afghanistantours.com",
    footer_rights: "© 2026 Afghanistan Tours. All rights reserved."
  },
  fa: {
    site_name: "تورهای افغانستان",
    nav_home: "خانه",
    nav_destinations: "مقصدها",
    nav_tours: "تورها",
    nav_about: "دربارهٔ ما",
    nav_contact: "تماس با ما",
    hero_title: "زیبایی افغانستان را کشف کنید",
    hero_text: "تورهای داخلی مقرون‌به‌صرفه به کابل، بامیان و هرات را رزرو کنید.",
    hero_btn: "مشاهدهٔ مقصدها",
    destinations_title: "مقصدهای ما",
    kabul_name: "کابل",
    kabul_text: "پایتخت، باغ‌ها و بازارهای آن را کشف کنید.",
    bamyan_name: "بامیان",
    bamyan_text: "دره، صخره‌ها و دریاچه‌های بند امیر را ببینید.",
    herat_name: "هرات",
    herat_text: "ارگ تاریخی و مسجد کبود را ببینید.",
    search_placeholder: "جستجوی مقصد (مثلاً کابل)",
    search_btn: "جستجو",
    tours_title: "بسته‌های تور",
    tour1_name: "تور شهری کابل",
    tour1_duration: "۲ روز",
    tour2_name: "ماجراجویی بامیان",
    tour2_duration: "۴ روز",
    tour3_name: "تور میراث هرات",
    tour3_duration: "۳ روز",
    tour_hotel: "اقامت در هتل",
    tour_guide: "راهنمای محلی",
    tour_transport: "حمل‌ونقل شامل است",
    tour_bande: "بازدید از بند امیر",
    tour_meals: "وعده‌های غذایی شامل است",
    tour_citadel: "ارگ و مسجد کبود",
    book_btn: "همین حالا رزرو کنید",
    about_title: "دربارهٔ ما",
    about_text: "ما یک آژانس مسافرتی محلی هستیم که تورهای داخلی امن و مقرون‌به‌صرفه در سراسر افغانستان ارائه می‌دهد. تیم ما همهٔ مسیرها و جاهای دیدنی را می‌شناسد تا شما بدون نگرانی از سفر لذت ببرید.",
    stat_travelers: "مسافر راضی",
    stat_destinations: "مقصد",
    stat_years: "سال تجربه",
    testimonials_title: "مسافران ما چه می‌گویند",
    contact_title: "تماس با ما",
    contact_text: "آمادهٔ برنامه‌ریزی سفر هستید؟ برای ما پیام بفرستید.",
    form_name: "نام شما",
    form_email: "ایمیل شما",
    form_choose: "یک مقصد انتخاب کنید",
    form_message: "پیام شما",
    form_send: "ارسال پیام",
    footer_contact: "تلفن: +93 770200192 | ایمیل: info@afghanistantours.com",
    footer_rights: "© ۲۰۲۶ تورهای افغانستان. تمام حقوق محفوظ است."
  }
};



function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  const langBtn = document.getElementById("langBtn");
  if (langBtn) {
    langBtn.textContent = lang === "fa" ? "English" : "فارسی";
  }

  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}
}

// Load the saved language (default: English)
let currentLang = "en";
try {
  currentLang = localStorage.getItem("lang") || "en";
} catch (e) {}
setLanguage(currentLang);

// Switch language when the button is clicked
const langBtn = document.getElementById("langBtn");
if (langBtn) {
  langBtn.addEventListener("click", function () {
    currentLang = currentLang === "en" ? "fa" : "en";
    setLanguage(currentLang);
  });
}