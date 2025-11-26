const translations = {
    ro: {
        menu_home: "Acasă",
        menu_products: "Produse",
        menu_about: "Despre Noi",
        menu_faq: "FAQ",
        menu_policy: "Politica de Retur",
        menu_contact: "Contacte",
        hero_title: "Vara ta începe cu Intex",
        hero_subtitle: "Calitate premium, instalare ușoară și distracție garantată pentru întreaga familie.",
        hero_btn: "Vezi Catalogul",
        about_title: "Cine suntem noi?",
        about_p1: "Suntem unicul distribuitor oficial Intex în Moldova care îți aduce vacanța chiar la tine în curte. Cu o experiență de peste 10 ani, ne dedicăm aducerii zâmbetelor pe fețele familiilor.",
        about_p2: "Produsele noastre sunt recunoscute internațional pentru durabilitate și inovație. Fie că îți dorești o piscină imensă cu cadru metalic sau o piscină gonflabilă pentru cei mici, noi avem soluția.",
        contact_title: "Contactează-ne",
        addr_label: "Adresa:",
        phone_label: "Telefon:",
        email_label: "Email:",
        hours_label: "Program:",
        hours_val: "Luni - Duminică: 09:00 - 19:00"
    },
    ru: {
        menu_home: "Главная",
        menu_products: "Продукты",
        menu_about: "О Нас",
        menu_faq: "FAQ",
        menu_policy: "Политика Возврата",
        menu_contact: "Контакты",
        hero_title: "Ваше лето начинается с Intex",
        hero_subtitle: "Премиальное качество, легкая установка и гарантированное веселье для всей семьи.",
        hero_btn: "Смотреть каталог",
        about_title: "Кто мы?",
        about_p1: "Мы являемся единственным официальным дистрибьютором Intex в Молдове. Имея более чем 10-летний опыт, мы приносим радость в каждый дом.",
        about_p2: "Наша продукция всемирно известна своей долговечностью и инновациями. Будь то огромный каркасный бассейн или надувной бассейн для малышей, у нас есть решение.",
        contact_title: "Свяжитесь с нами",
        addr_label: "Адрес:",
        phone_label: "Телефон:",
        email_label: "Email:",
        hours_label: "График:",
        hours_val: "Понедельник - Воскресенье: 09:00 - 19:00"
    },
    en: {
        menu_home: "Home",
        menu_products: "Products",
        menu_about: "About Us",
        menu_faq: "FAQ",
        menu_policy: "Return Policy",
        menu_contact: "Contact",
        hero_title: "Your summer starts with Intex",
        hero_subtitle: "Premium quality, easy setup, and guaranteed fun for the whole family.",
        hero_btn: "View Catalog",
        about_title: "Who are we?",
        about_p1: "We are the sole official distributor of Intex in Moldova, bringing the holiday right to your backyard. With over 10 years of experience, we are dedicated to bringing smiles to families.",
        about_p2: "Our products are internationally recognized for durability and innovation. Whether you want a huge metal frame pool or an inflatable pool for the little ones, we have the solution.",
        contact_title: "Contact Us",
        addr_label: "Address:",
        phone_label: "Phone:",
        email_label: "Email:",
        hours_label: "Hours:",
        hours_val: "Monday - Sunday: 09:00 - 19:00"
    }
};

const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const themeBtn = document.getElementById('themeBtn');
const themeIcon = themeBtn.querySelector('i');
const i18nElements = document.querySelectorAll('[data-i18n]');
const langOptions = document.querySelectorAll('.lang-opt');


function openSearch() {
    searchOverlay.style.display = 'flex';
    setTimeout(() => searchInput.focus(), 100);
}

function closeSearch() {
    searchOverlay.style.display = 'none';
    searchInput.value = '';
}

function performSearch(event) {
    if (event) {
        event.preventDefault(); 
    }
    
    const query = searchInput.value.trim();

    if (query.length > 0) {
        alert(`Caută: "${query}". (Acest lucru va redirecționa către pagina de produse)`);
        closeSearch();
    } else {
        alert("Vă rugăm să introduceți un termen de căutare.");
    }
}


function setLanguage(lang) {
    if (!translations[lang]) return;

    i18nElements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = translations[lang][key];

        if (translation) {
            if (key === 'hero_btn' && el.tagName === 'A') {
                const icon = el.querySelector('i');
                el.innerHTML = translation + ' ' + (icon ? icon.outerHTML : '');
            } else {
                el.innerText = translation;
            }
        }
    });

    langOptions.forEach(span => {
        span.classList.remove('active');
        if (span.innerText.toLowerCase() === lang) {
            span.classList.add('active');
            localStorage.setItem('intex_language', lang);
        }
    });
}


function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('intex_theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('intex_theme', 'light');
    }
}

themeBtn.addEventListener('click', () => {
    const isDark = !document.body.classList.contains('dark-mode');
    applyTheme(isDark);
});


function initialize() {
    const savedLang = localStorage.getItem('intex_language') || 'ro';
    setLanguage(savedLang);

    const savedTheme = localStorage.getItem('intex_theme') === 'dark';
    applyTheme(savedTheme);

    document.getElementById('searchBtn').addEventListener('click', openSearch);
    
    const searchForm = document.getElementById('search-form');
    if(searchForm) {
        searchForm.addEventListener('submit', performSearch);
    } else {
        searchInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                performSearch(event);
            }
        });
    }

    langOptions.forEach(span => {
        span.addEventListener('click', () => {
            const lang = span.innerText.toLowerCase();
            setLanguage(lang);
        });
    });
}

document.addEventListener('DOMContentLoaded', initialize);