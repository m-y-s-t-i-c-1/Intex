// utils.js — language helpers, formatting, search, debounce

function getCurrentLang() {
    return localStorage.getItem('currentLang') || 'ro';
}

function setCurrentLang(lang) {
    localStorage.setItem('currentLang', lang);
    applyTranslations();
    if (appState.navStack.length > 0) {
        restoreNavState(appState.navStack[appState.navStack.length - 1]);
    } else {
        showCategories();
    }
    renderCart();
}

function applyTranslations() {
    const lang = getCurrentLang();
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = translations[lang]?.[key] || key;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = translations[lang]?.[key] || key;
    });
}

function formatPrice(price) {
    const lang = getCurrentLang();
    const currency = translations[lang].currency || 'LEI';
    return `${price.toFixed(2)} ${currency}`;
}

function getCategoryTitle(categoryId) {
    const lang = getCurrentLang();
    const cat = CATEGORIES_DATA.find(c => c.id === categoryId);
    if (!cat) return categoryId;
    const key = cat.i18n_title;
    return translations[lang]?.[key] || categoryId;
}

function getProductTitle(product) {
    const lang = getCurrentLang();
    return product.title?.[lang] || product.title?.ro || '';
}

function searchProductsByQuery(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    return PRODUCTS_DATA.filter(p => {
        const title = (getProductTitle(p) || '').toString();
        return title.toLowerCase().includes(q);
    });
}

function debounce(func, delay) {
    return function(...args) {
        clearTimeout(appState.searchTimeout);
        appState.searchTimeout = setTimeout(() => func(...args), delay);
    };
}

function openSearch() {
    if (!domElements.searchOverlay) return;
    domElements.searchOverlay.style.display = 'flex';
    domElements.searchInput?.focus();
}

function closeSearch() {
    if (!domElements.searchOverlay) return;
    domElements.searchOverlay.style.display = 'none';
}

function performSearch(queryOrEvent) {
    let q = '';
    if (!queryOrEvent) {
        q = domElements.searchInput?.value || '';
    } else if (typeof queryOrEvent === 'string') {
        q = queryOrEvent;
    } else if (typeof queryOrEvent === 'object' && typeof queryOrEvent.preventDefault === 'function') {
        try { queryOrEvent.preventDefault(); } catch (e) {}
        q = domElements.searchInput?.value || '';
    }
    q = (q || '').trim();
    if (!q) return;
    closeSearch();
    appState.currentFilteredProducts = searchProductsByQuery(q);
    appState.currentPage = 1;
    renderSearchResults(q);
}

const debouncedSearch = debounce((q) => performSearch(q), CONFIG.DEBOUNCE_DELAY);
