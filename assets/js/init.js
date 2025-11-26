// init.js — DOM initialization and event wiring (depends on other files)

function initializeDomElements() {
    domElements.searchOverlay = document.getElementById('search-overlay');
    domElements.searchInput = document.getElementById('search-input');
        // support multiple ID naming variants (historical/camelCase vs kebab-case)
        function byAnyId(...ids) {
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el) return el;
            }
            return null;
        }

        domElements.searchOverlay = byAnyId('search-overlay');
        domElements.searchInput = byAnyId('search-input');
        domElements.searchBtn = byAnyId('search-btn', 'searchBtn');
        domElements.cartBtn = byAnyId('cart-btn', 'cartBtn');
        domElements.themeBtn = byAnyId('theme-btn', 'themeBtn');
        domElements.themeIcon = byAnyId('theme-icon');
        domElements.categoryMenu = byAnyId('category-menu');
        domElements.productListContainer = byAnyId('product-list-container', 'productListContainer');
        domElements.productListGrid = byAnyId('productListGrid', 'product-list-grid');
        domElements.currentCategoryTitle = byAnyId('currentCategoryTitle', 'current-category-title');
        domElements.backToCategoriesBtn = byAnyId('backToCategoriesBtn', 'backToCategories');
        domElements.sidebarFilterList = byAnyId('sidebar-filter-list', 'filterList');
        domElements.cartOverlay = byAnyId('cart-overlay');
        domElements.cartItemsContainer = byAnyId('cart-items-container', 'cart-items');
        domElements.cartTotalElement = byAnyId('cart-total', 'cartTotal');
        domElements.cartItemCount = byAnyId('cart-item-count', 'cartCount');
        domElements.paginationContainer = byAnyId('pagination-container', 'pagination-controls');
    domElements.domInitialized = true;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeDomElements();
    loadCart();
    applyTranslations();
    applyTheme();

    if (domElements.searchBtn) domElements.searchBtn.onclick = openSearch;
    if (domElements.cartBtn) domElements.cartBtn.onclick = window.openCart;
    if (domElements.themeBtn) domElements.themeBtn.onclick = toggleTheme;

    if (domElements.searchInput) {
        domElements.searchInput.addEventListener('input', (e) => debouncedSearch(e.target.value));
        domElements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                performSearch(domElements.searchInput.value);
            }
        });
    }

    document.getElementById('nav-home')?.addEventListener('click', () => showCategories(true));
    document.getElementById('nav-products')?.addEventListener('click', () => showCategories(true));
    document.getElementById('nav-contact')?.addEventListener('click', showContact);
    document.getElementById('nav-faq')?.addEventListener('click', showFaq);

    if (domElements.backToCategoriesBtn) {
        domElements.backToCategoriesBtn.onclick = goBack;
    }

    document.querySelectorAll('.sidebar-filter-list li').forEach(li => {
        li.addEventListener('click', () => {
            const filter = li.getAttribute('data-category-id');
            if (!filter) return;
            document.querySelectorAll('.sidebar-filter-list li').forEach(el => el.classList.remove('active'));
            li.classList.add('active');
            if (filter === 'all') showCategories();
            else showProducts(filter);
        });
    });

    document.querySelectorAll('.lang-opt').forEach(span => {
        span.addEventListener('click', () => setCurrentLang(span.innerText.toLowerCase()));
    });

    if (domElements.cartOverlay) {
        domElements.cartOverlay.addEventListener('click', (e) => {
            if (e.target === domElements.cartOverlay) window.closeCart();
        });
    }

    if (domElements.searchOverlay) {
        domElements.searchOverlay.addEventListener('click', (e) => {
            if (e.target === domElements.searchOverlay || e.target.closest('.close-search-btn')) closeSearch();
        });
    }

    showCategories(true);
    renderCart();

// Backwards-compatible global aliases for older HTML that used different function names
window.viewProducts = function(categoryId, subTitle) {
    // older HTML passed subtitle — ignore and use our i18n titles
    return showProducts(categoryId);
};

window.backToPrevious = function() {
    return goBack();
};

// Older HTML used `setLanguage`; new API is `setCurrentLang`
window.setLanguage = function(lang) {
    return setCurrentLang(lang);
};

    document.querySelectorAll('.accordion-header').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentNode;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
});
