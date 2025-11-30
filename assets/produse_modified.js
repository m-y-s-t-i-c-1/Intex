// ==========================================
// CONFIGURATION
// ==========================================

const CONFIG = {
    ITEMS_PER_PAGE: 12,
    DEBOUNCE_DELAY: 300
};

// ==========================================
// STATE MANAGEMENT
// ==========================================

const AppState = {
    // Navigation state
    currentPage: 1,
    currentFilteredProducts: [],
    currentCategory: null,
    currentSubcategory: null,
    currentLanguage: 'ro',

    // Cart state
    cart: [],

    // Navigation stack
    navStack: [],

    // UI state
    searchTimeout: null,

    // DOM references cache
    domElements: {
        searchOverlay: null,
        searchInput: null,
        searchBtn: null,
        cartBtn: null,
        themeBtn: null,
        themeIcon: null,
        categoryMenu: null,
        productListContainer: null,
        productListGrid: null,
        currentCategoryTitle: null,
        backToCategoriesBtn: null,
        sidebarFilterList: null,
        cartOverlay: null,
        cartItemsContainer: null,
        cartTotalElement: null,
        cartItemCount: null,
        paginationContainer: null,
        subcategoryContainer: null
    },

    // State management methods
    setState(updates) {
        Object.assign(this, updates);
        this.notifyStateChange();
    },

    // Observers for state changes
    observers: [],

    subscribe(observer) {
        this.observers.push(observer);
    },

    notifyStateChange() {
        this.observers.forEach(observer => observer(this));
    }
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

const Utils = {
    // Get current language
    getCurrentLang() {
        return AppState.currentLanguage;
    },

    // Set current language
    setCurrentLang(lang) {
        AppState.setState({ currentLanguage: lang });
        localStorage.setItem('currentLang', lang);
        this.applyTranslations();
        CartManager.renderCart();
    },

    // Translation system
    translate(key, fallback = '') {
        const translations = {
            ro: {
                'cat_boats': 'Bărci',
                'cat_playgrounds': 'Terenuri de joacă',
                'cat_transport': 'Transport copii',
                'cat_pools': 'Piscine',
                'cat_accessories': 'Accesorii',
                'cat_intex_pools': 'Bazine INTEX',
                'cat_kids_pools': 'Piscine pentru copii',
                'cat_swim_acc': 'Accesorii înot',
                'cat_infl_mattress': 'Saltele gonflabile',
                'cat_pumps': 'Pompe',
                'all_products': 'Toate Produsele',
                'search_results': 'Rezultatele căutării pentru',
                'no_products': 'Nu s-au găsit produse',
                'add_to_cart': 'Adaugă în coș',
                'cart_empty': 'Coșul este gol',
                'currency': 'LEI',
                'app_title': 'Magazin Intex'
            },
            ru: {
                'cat_boats': 'Лодки',
                'cat_playgrounds': 'Игровые площадки',
                'cat_transport': 'Детский транспорт',
                'cat_pools': 'Бассейны',
                'cat_accessories': 'Аксессуары',
                'cat_intex_pools': 'Бассейны INTEX',
                'cat_kids_pools': 'Детские бассейны',
                'cat_swim_acc': 'Аксессуары для плавания',
                'cat_infl_mattress': 'Надувные матрасы',
                'cat_pumps': 'Насосы',
                'all_products': 'Все товары',
                'search_results': 'Результаты поиска для',
                'no_products': 'Товары не найдены',
                'add_to_cart': 'Добавить в корзину',
                'cart_empty': 'Корзина пуста',
                'currency': 'ЛЕЙ',
                'app_title': 'Магазин Intex'
            },
            en: {
                'cat_boats': 'Boats',
                'cat_playgrounds': 'Playgrounds',
                'cat_transport': 'Kids Transport',
                'cat_pools': 'Pools',
                'cat_accessories': 'Accessories',
                'cat_intex_pools': 'INTEX Pools',
                'cat_kids_pools': 'Kids Pools',
                'cat_swim_acc': 'Swim Accessories',
                'cat_infl_mattress': 'Inflatable Mattresses',
                'cat_pumps': 'Pumps',
                'all_products': 'All Products',
                'search_results': 'Search results for',
                'no_products': 'No products found',
                'add_to_cart': 'Add to cart',
                'cart_empty': 'Cart is empty',
                'currency': 'MDL',
                'app_title': 'Intex Store'
            }
        };

        return translations[this.getCurrentLang()][key] || fallback || key;
    },

    // Apply translations to DOM
    applyTranslations() {
        const lang = this.getCurrentLang();
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.innerText = this.translate(key);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.translate(key);
        });
    },

    // Format price
    formatPrice(price) {
        const currency = this.translate('currency');
        return `${price.toFixed(2)} ${currency}`;
    },

    // Get category title
    getCategoryTitle(categoryId) {
        const category = CATEGORIES_DATA.find(c => c.id === categoryId);
        if (!category) return categoryId;
        return this.translate(category.i18n_title || categoryId);
    },

    // Get product title
    getProductTitle(product) {
        const lang = this.getCurrentLang();
        return product.title?.[lang] || product.title?.ro || product.title?.en || '';
    },

    // Search products
    searchProductsByQuery(query) {
        const q = query.toLowerCase().trim();
        if (!q) return [];
        const source = (typeof MERGED_PRODUCTS !== 'undefined') ? MERGED_PRODUCTS : (typeof PRODUCTS_DATA !== 'undefined' ? PRODUCTS_DATA : []);
        return source.filter(p => {
            const title = this.getProductTitle(p);
            return title.toLowerCase().includes(q);
        });
    },

    // Debounce function
    debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    },

    // Generate unique ID
    generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }
};

// Merge PRODUCTS_DATA with POOLS_PRODUCTS into one source used by the app
const MERGED_PRODUCTS = (function () {
    const base = (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA)) ? PRODUCTS_DATA.slice() : [];
    try {
        if (typeof POOLS_PRODUCTS !== 'undefined' && POOLS_PRODUCTS && Array.isArray(POOLS_PRODUCTS.pools)) {
            POOLS_PRODUCTS.pools.forEach(poolProduct => {
                base.push({
                    id: poolProduct.id || `pool_${Utils.generateId()}`,
                    category: 'pools',
                    subcategory: poolProduct.sub || poolProduct.subcategory || null,
                    title: poolProduct.title,
                    price: poolProduct.price,
                    oldPrice: poolProduct.oldPrice,
                    image: poolProduct.image
                });
            });
        }
    } catch (err) {
        console.error('Error merging POOLS_PRODUCTS:', err);
    }
    return base;
})();

// ==========================================
// THEME MANAGER
// ==========================================

const ThemeManager = {
    // Apply theme
    applyTheme(isDark) {
        try {
            let preferred = typeof isDark === 'boolean' ? isDark : null;
            if (preferred === null) {
                const stored = localStorage.getItem('darkMode');
                if (stored !== null) preferred = (stored === 'true' || stored === '1');
                else preferred = document.body.classList.contains('dark-mode');
            }
            document.body.classList.toggle('dark-mode', preferred);
            localStorage.setItem('darkMode', preferred ? 'true' : 'false');

            const { themeIcon } = AppState.domElements;
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon', 'fa-sun');
                themeIcon.classList.add(preferred ? 'fa-sun' : 'fa-moon');
            }
        } catch (err) {
            console.error('applyTheme error:', err);
        }
    },

    // Toggle theme
    toggleTheme() {
        const isDark = document.body.classList.contains('dark-mode');
        this.applyTheme(!isDark);
    }
};

// ==========================================
// CART MANAGEMENT
// ==========================================

const CartManager = {
    // Load cart from localStorage
    loadCart() {
        try {
            AppState.cart = JSON.parse(localStorage.getItem('intex_cart')) || [];
        } catch (err) {
            console.error('Error loading cart:', err);
            AppState.cart = [];
        }
    },

    // Save cart to localStorage
    saveCart() {
        localStorage.setItem('intex_cart', JSON.stringify(AppState.cart));
    },

    // Add product to cart
    addToCart(productId) {
        const existing = AppState.cart.find(i => i.id === productId);
        if (existing) {
            existing.qty++;
        } else {
            AppState.cart.push({ id: productId, qty: 1 });
        }
        this.saveCart();
        this.renderCart();
        this.openCart();
    },

    // Remove product from cart
    removeFromCart(productId) {
        AppState.cart = AppState.cart.filter(i => i.id !== productId);
        this.saveCart();
        this.renderCart();
    },

    // Change product quantity
    changeQty(productId, delta) {
        const item = AppState.cart.find(i => i.id === productId);
        if (item) {
            item.qty += delta;
            if (item.qty <= 0) {
                this.removeFromCart(productId);
            } else {
                this.saveCart();
                this.renderCart();
            }
        }
    },

    // Open cart overlay
    openCart() {
        if (AppState.domElements.cartOverlay) {
            AppState.domElements.cartOverlay.style.display = 'flex';
        }
    },

    // Close cart overlay
    closeCart() {
        if (AppState.domElements.cartOverlay) {
            AppState.domElements.cartOverlay.style.display = 'none';
        }
    },

    // Render cart
    renderCart() {
        const { cartItemsContainer, cartTotalElement, cartItemCount } = AppState.domElements;
        if (!cartItemsContainer) return;

        let total = 0;
        let count = 0;
        cartItemsContainer.innerHTML = '';

        if (AppState.cart.length === 0) {
            cartItemsContainer.innerHTML = `<p style="text-align:center;">${Utils.translate('cart_empty')}</p>`;
        } else {
            const cartHtml = [];
            AppState.cart.forEach(item => {
                const source = (typeof MERGED_PRODUCTS !== 'undefined') ? MERGED_PRODUCTS : (typeof PRODUCTS_DATA !== 'undefined' ? PRODUCTS_DATA : []);
                const product = source.find(p => p.id === item.id);
                if (product) {
                    const lineTotal = product.price * item.qty;
                    total += lineTotal;
                    count += item.qty;
                    cartHtml.push(`
                        <div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                            <div>
                                <strong>${Utils.getProductTitle(product)}</strong><br>
                                <small>${Utils.formatPrice(product.price)} x ${item.qty}</small>
                            </div>
                            <div style="display:flex; gap:5px; align-items:center;">
                                <button onclick="CartManager.changeQty('${item.id}', -1)" style="padding:2px 6px;">-</button>
                                <span>${Utils.formatPrice(lineTotal)}</span>
                                <button onclick="CartManager.changeQty('${item.id}', 1)" style="padding:2px 6px;">+</button>
                                <button onclick="CartManager.removeFromCart('${item.id}')" style="color:red; border:none; background:none; cursor:pointer;"><i class="fas fa-trash"></i></button>
                            </div>
                        </div>
                    `);
                }
            });
            cartItemsContainer.innerHTML = cartHtml.join('');
        }

        if (cartTotalElement) cartTotalElement.innerText = Utils.formatPrice(total);
        if (cartItemCount) cartItemCount.innerText = count;

        // Update document title
        const appTitle = Utils.translate('app_title');
        document.title = `${count > 0 ? `(${count}) ` : ''}${appTitle}`;
    }
};

// ==========================================
// NAVIGATION MANAGEMENT
// ==========================================

const NavigationManager = {
    // Push state to navigation stack
    pushState(state) {
        AppState.navStack.push(state);
    },

    // Pop state from navigation stack
    popState() {
        AppState.navStack.pop();
        return AppState.navStack[AppState.navStack.length - 1] || { view: 'categories' };
    },

    // Go back to previous state
    goBack() {
        if (AppState.navStack.length <= 1) {
            this.showCategories();
            return;
        }
        const prevState = this.popState();
        this.restoreNavState(prevState);
    },

    // Restore navigation state
    restoreNavState(state) {
        if (!state) state = { view: 'categories' };
        switch (state.view) {
            case 'categories':
                this.showCategories(false);
                break;
            case 'subcategories':
                AppState.setState({
                    currentCategory: state.category,
                    currentSubcategory: null
                });
                Renderer.renderSubcategories(state.category);
                break;
            case 'products':
                AppState.setState({
                    currentCategory: state.category,
                    currentSubcategory: state.subcategory
                });
                this.filterAndRenderProducts();
                break;
            case 'search':
                AppState.setState({
                    currentFilteredProducts: state.results,
                    currentPage: 1
                });
                Renderer.renderSearchResults(state.query);
                break;
        }
    },

    // Show categories view
    showCategories(pushState = true) {
        const { categoryMenu, productListContainer } = AppState.domElements;

        if (categoryMenu) categoryMenu.classList.remove('hidden');
        if (productListContainer) productListContainer.classList.add('hidden');

        const subContainer = document.getElementById('subcategoryContainer');
        if (subContainer) subContainer.style.display = 'none';

        AppState.setState({
            currentCategory: null,
            currentSubcategory: null,
            currentFilteredProducts: []
        });

        Renderer.renderCategories();

        if (pushState) {
            AppState.navStack = [];
            this.pushState({ view: 'categories' });
        }
    },

    // Show products view
    showProducts(categoryId, subcategoryId = null, pushState = true) {
        if (SUBCATEGORIES_DATA[categoryId] && SUBCATEGORIES_DATA[categoryId].length > 0 && subcategoryId === null) {
            Renderer.renderSubcategories(categoryId);
            return;
        }

        const { productListContainer, categoryMenu, currentCategoryTitle } = AppState.domElements;
        if (!productListContainer || !currentCategoryTitle) return;

        if (categoryMenu) categoryMenu.classList.add('hidden');
        productListContainer.classList.remove('hidden');
        currentCategoryTitle.innerText = Utils.getCategoryTitle(categoryId);

        AppState.setState({
            currentCategory: categoryId,
            currentSubcategory: subcategoryId
        });

        this.filterAndRenderProducts();

        if (pushState) {
            this.pushState({
                view: 'products',
                category: categoryId,
                subcategory: subcategoryId
            });
        }
    },

    // Filter and render products
    filterAndRenderProducts() {
        const { currentCategory, currentSubcategory } = AppState;
        let filteredProducts = [];

        const source = (typeof MERGED_PRODUCTS !== 'undefined') ? MERGED_PRODUCTS : (typeof PRODUCTS_DATA !== 'undefined' ? PRODUCTS_DATA : []);
        if (currentSubcategory !== null && SUBCATEGORIES_DATA[currentCategory]) {
            filteredProducts = source.filter(p =>
                p.category === currentCategory && p.subcategory === currentSubcategory
            );
        } else if (currentCategory) {
            filteredProducts = source.filter(p => p.category === currentCategory);
        }

        AppState.setState({
            currentFilteredProducts: filteredProducts,
            currentPage: 1
        });

        Renderer.renderPaginatedGrid();
    },

    // Show contact view
    showContact() {
        const contactEl = document.getElementById('contact') || document.getElementById('contact-view');
        if (contactEl) {
            contactEl.classList.remove('hidden');
            contactEl.scrollIntoView({ behavior: 'smooth' });
        }
        AppState.navStack = AppState.navStack.filter(s =>
            s.view !== 'search' && s.view !== 'products' && s.view !== 'subcategories'
        );
        this.pushState({ view: 'contact' });
    },

    // Show FAQ view
    showFaq() {
        const faqEl = document.getElementById('faq') || document.getElementById('faq-view');
        if (faqEl) {
            faqEl.classList.remove('hidden');
            faqEl.scrollIntoView({ behavior: 'smooth' });
        }
        AppState.navStack = AppState.navStack.filter(s =>
            s.view !== 'search' && s.view !== 'products' && s.view !== 'subcategories'
        );
        this.pushState({ view: 'faq' });
    }
};

// ==========================================
// RENDERING SYSTEM
// ==========================================

const Renderer = {
    // Render categories
    renderCategories() {
        const { categoryMenu } = AppState.domElements;
        if (!categoryMenu) return;

        categoryMenu.innerHTML = '';
        CATEGORIES_DATA.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.cursor = 'pointer';
            card.innerHTML = `
                <div class="card-icon"><i class="${cat.icon}"></i></div>
                <h4>${Utils.translate(cat.i18n_title)}</h4>
                <p>${Utils.translate(cat.i18n_desc)}</p>
                <button class="btn-category-view">${Utils.translate('cat_view_btn', 'Vezi produse')}</button>
            `;
            card.addEventListener('click', () => NavigationManager.showProducts(cat.id));
            categoryMenu.appendChild(card);
        });
    },

    // Render subcategories
    renderSubcategories(categoryId) {
        const subs = SUBCATEGORIES_DATA[categoryId];
        const { productListContainer, currentCategoryTitle, sidebarFilterList } = AppState.domElements;

        if (!productListContainer || !currentCategoryTitle || !sidebarFilterList) return;

        if (!subs || subs.length === 0) {
            AppState.setState({ currentSubcategory: null });
            NavigationManager.showProducts(categoryId);
            return;
        }

        const categoryMenu = AppState.domElements.categoryMenu;
        if (categoryMenu) categoryMenu.classList.add('hidden');
        productListContainer.classList.remove('hidden');
        currentCategoryTitle.innerText = Utils.getCategoryTitle(categoryId);

        sidebarFilterList.innerHTML = '';

        // All products option
        const allLi = document.createElement('li');
        allLi.className = 'active';
        allLi.innerText = Utils.translate('all_products');
        allLi.onclick = () => this.filterBySubcategory(categoryId, null);
        sidebarFilterList.appendChild(allLi);

        // Subcategories
        subs.forEach(sub => {
            const li = document.createElement('li');
            li.innerText = sub.title;
            li.onclick = () => this.filterBySubcategory(categoryId, sub.id);
            sidebarFilterList.appendChild(li);
        });

        AppState.setState({
            currentCategory: categoryId,
            currentSubcategory: null
        });

        NavigationManager.filterAndRenderProducts();
        NavigationManager.pushState({ view: 'subcategories', category: categoryId });
    },

    // Filter by subcategory
    filterBySubcategory(categoryId, subId) {
        const { sidebarFilterList } = AppState.domElements;
        if (sidebarFilterList) {
            sidebarFilterList.querySelectorAll('li').forEach(el => el.classList.remove('active'));
            let targetLi;
            if (subId === null) {
                targetLi = sidebarFilterList.querySelector('li');
            } else {
                targetLi = Array.from(sidebarFilterList.querySelectorAll('li')).find(li =>
                    li.innerText.toLowerCase().includes(subId.toLowerCase().replace('_', ' '))
                );
            }
            if (targetLi) targetLi.classList.add('active');
        }

        AppState.setState({
            currentCategory: categoryId,
            currentSubcategory: subId
        });

        // Update navigation stack
        if (AppState.navStack.length > 0) {
            const lastState = AppState.navStack[AppState.navStack.length - 1];
            if (lastState.view === 'products' && lastState.category === categoryId) {
                AppState.navStack.pop();
            }
        }

        NavigationManager.pushState({ view: 'products', category: categoryId, subcategory: subId });
        NavigationManager.filterAndRenderProducts();
    },

    // Render paginated product grid
    renderPaginatedGrid() {
        const { productListGrid } = AppState.domElements;
        if (!productListGrid) return;

        const { currentFilteredProducts, currentPage } = AppState;
        const totalProducts = currentFilteredProducts.length;
        const totalPages = Math.max(1, Math.ceil(totalProducts / CONFIG.ITEMS_PER_PAGE));
        const validPage = Math.min(currentPage, totalPages);

        AppState.setState({ currentPage: validPage });
        productListGrid.innerHTML = '';

        if (totalProducts === 0) {
            productListGrid.innerHTML = `<p style="text-align:center; grid-column: 1 / -1;">${Utils.translate('no_products')}</p>`;
            this.renderPagination(1, 1);
            return;
        }

        const startIndex = (validPage - 1) * CONFIG.ITEMS_PER_PAGE;
        const endIndex = startIndex + CONFIG.ITEMS_PER_PAGE;

        for (let i = startIndex; i < endIndex && i < totalProducts; i++) {
            const product = currentFilteredProducts[i];
            const card = this.createProductCard(product);
            productListGrid.appendChild(card);
        }

        this.renderPagination(validPage, totalPages);
    },

    // Create product card
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;

        const title = Utils.getProductTitle(product);
        const priceHTML = product.oldPrice && product.oldPrice > product.price ?
            `<div class="price-container" style="display:flex; align-items:center; gap:10px;">
                <span class="old-price" style="text-decoration:line-through; color:#999; font-size:0.9em;">${Utils.formatPrice(product.oldPrice)}</span>
                <span class="new-price" style="color:#e74c3c; font-weight:bold; font-size:1.1em;">${Utils.formatPrice(product.price)}</span>
            </div>` :
            `<div class="price-val" style="font-weight:bold; font-size:1.1em;">${Utils.formatPrice(product.price)}</div>`;

        card.innerHTML = `
            <div class="img-wrapper" style="margin-bottom:10px;">
                <img src="${product.image}" alt="${title}" style="width:100%; height:auto; border-radius:8px;" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
            </div>
            <h5 class="product-title" style="margin-bottom:5px; height:40px; overflow:hidden;">${title}</h5>
            <div class="product-price" style="margin-bottom:10px;">${priceHTML}</div>
            <button class="btn-main btn-add-cart" onclick="CartManager.addToCart('${product.id}')" style="width:100%; padding:8px; cursor:pointer;">
                <i class="fas fa-shopping-cart"></i> ${Utils.translate('add_to_cart')}
            </button>
        `;

        return card;
    },

    // Render pagination controls
    renderPagination(currentPage, totalPages) {
        const { paginationContainer } = AppState.domElements;
        if (!paginationContainer) return;

        paginationContainer.innerHTML = '';
        if (totalPages <= 1) return;

        const maxPagesToShow = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        // Previous button
        if (currentPage > 1) {
            const prevBtn = document.createElement('button');
            prevBtn.className = 'page-btn';
            prevBtn.innerText = '<';
            prevBtn.onclick = () => this.goToPage(currentPage - 1);
            paginationContainer.appendChild(prevBtn);
        }

        // Page buttons
        for (let i = startPage; i <= endPage; i++) {
            const btn = document.createElement('button');
            btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            btn.innerText = i;
            btn.onclick = () => this.goToPage(i);
            paginationContainer.appendChild(btn);
        }

        // Next button
        if (currentPage < totalPages) {
            const nextBtn = document.createElement('button');
            nextBtn.className = 'page-btn';
            nextBtn.innerText = '>';
            nextBtn.onclick = () => this.goToPage(currentPage + 1);
            paginationContainer.appendChild(nextBtn);
        }
    },

    // Go to specific page
    goToPage(pageNum) {
        AppState.setState({ currentPage: pageNum });
        this.renderPaginatedGrid();
        const { productListContainer } = AppState.domElements;
        if (productListContainer) {
            productListContainer.scrollIntoView({ behavior: 'smooth' });
        }
    },

    // Render search results
    renderSearchResults(query) {
        const { productListContainer, productListGrid, currentCategoryTitle } = AppState.domElements;
        if (!productListContainer || !productListGrid || !currentCategoryTitle) return;

        currentCategoryTitle.innerText = `${Utils.translate('search_results')} "${query}"`;

        const categoryMenu = AppState.domElements.categoryMenu;
        if (categoryMenu) categoryMenu.classList.add('hidden');
        productListContainer.classList.remove('hidden');

        const subContainer = document.getElementById('subcategoryContainer');
        if (subContainer) subContainer.style.display = 'none';

        this.renderPaginatedGrid();

        if (AppState.navStack[AppState.navStack.length - 1]?.view !== 'search') {
            NavigationManager.pushState({
                view: 'search',
                query,
                results: AppState.currentFilteredProducts
            });
        }
    }
};

// ==========================================
// SEARCH MANAGEMENT
// ==========================================

const SearchManager = {
    // Open search overlay
    openSearch() {
        const { searchOverlay, searchInput } = AppState.domElements;
        if (!searchOverlay) return;
        searchOverlay.style.display = 'flex';
        if (searchInput) searchInput.focus();
    },

    // Close search overlay
    closeSearch() {
        const { searchOverlay } = AppState.domElements;
        if (!searchOverlay) return;
        searchOverlay.style.display = 'none';
    },

    // Perform search
    performSearch(queryOrEvent) {
        let q = '';
        const { searchInput } = AppState.domElements;

        if (!queryOrEvent) {
            q = searchInput?.value || '';
        } else if (typeof queryOrEvent === 'string') {
            q = queryOrEvent;
        } else if (typeof queryOrEvent === 'object' && typeof queryOrEvent.preventDefault === 'function') {
            try { queryOrEvent.preventDefault(); } catch (e) { }
            q = searchInput?.value || '';
        }

        q = (q || '').trim();
        if (!q) return;

        this.closeSearch();

        const results = Utils.searchProductsByQuery(q);
        AppState.setState({
            currentFilteredProducts: results,
            currentPage: 1
        });

        Renderer.renderSearchResults(q);
    },

    // Debounced search
    debouncedSearch: Utils.debounce(function (q) {
        this.performSearch(q);
    }, CONFIG.DEBOUNCE_DELAY)
};

// ==========================================
// MAIN APPLICATION INITIALIZATION
// ==========================================

const App = {
    // Initialize DOM elements
    initializeDomElements() {
        function byAnyId(...ids) {
            for (const id of ids) {
                const el = document.getElementById(id);
                if (el) return el;
            }
            return null;
        }

        AppState.domElements = {
            searchOverlay: byAnyId('search-overlay'),
            searchInput: byAnyId('search-input'),
            searchBtn: byAnyId('search-btn', 'searchBtn'),
            cartBtn: byAnyId('cart-btn', 'cartBtn'),
            themeBtn: byAnyId('theme-btn', 'themeBtn'),
            themeIcon: byAnyId('theme-icon'),
            categoryMenu: byAnyId('category-menu'),
            productListContainer: byAnyId('product-list-container', 'productListContainer'),
            productListGrid: byAnyId('productListGrid', 'product-list-grid'),
            currentCategoryTitle: byAnyId('currentCategoryTitle', 'current-category-title'),
            backToCategoriesBtn: byAnyId('backToCategoriesBtn', 'backToCategories'),
            sidebarFilterList: byAnyId('sidebar-filter-list', 'filterList'),
            cartOverlay: byAnyId('cart-overlay'),
            cartItemsContainer: byAnyId('cart-items-container', 'cart-items'),
            cartTotalElement: byAnyId('cart-total', 'cartTotal'),
            cartItemCount: byAnyId('cart-item-count', 'cartCount'),
            paginationContainer: byAnyId('pagination-container', 'pagination-controls'),
            subcategoryContainer: byAnyId('subcategoryContainer')
        };

        return Object.values(AppState.domElements).some(el => el !== null);
    },

    // Initialize event handlers
    initializeEventHandlers() {
        const {
            searchBtn, cartBtn, themeBtn, searchInput,
            backToCategoriesBtn, cartOverlay, searchOverlay
        } = AppState.domElements;

        // Search handlers
        if (searchBtn) searchBtn.onclick = SearchManager.openSearch;
        if (searchInput) {
            searchInput.addEventListener('input', (e) => SearchManager.debouncedSearch(e.target.value));
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') SearchManager.performSearch(e);
            });
        }

        // Cart handlers
        if (cartBtn) cartBtn.onclick = CartManager.openCart;

        // Theme handler
        if (themeBtn) themeBtn.onclick = ThemeManager.toggleTheme;

        // Navigation handlers
        if (backToCategoriesBtn) {
            backToCategoriesBtn.onclick = NavigationManager.goBack;
        }

        // Overlay click handlers
        if (cartOverlay) {
            cartOverlay.addEventListener('click', (e) => {
                if (e.target === cartOverlay) CartManager.closeCart();
            });
        }

        if (searchOverlay) {
            searchOverlay.addEventListener('click', (e) => {
                if (e.target === searchOverlay || e.target.closest('.close-search-btn')) {
                    SearchManager.closeSearch();
                }
            });
        }

        // Language handlers
        document.querySelectorAll('.lang-opt').forEach(span => {
            span.addEventListener('click', () => Utils.setCurrentLang(span.innerText.toLowerCase()));
        });

        // Navigation menu handlers
        document.getElementById('nav-home')?.addEventListener('click', () => NavigationManager.showCategories(true));
        document.getElementById('nav-products')?.addEventListener('click', () => NavigationManager.showCategories(true));
        document.getElementById('nav-contact')?.addEventListener('click', NavigationManager.showContact);
        document.getElementById('nav-faq')?.addEventListener('click', NavigationManager.showFaq);

        // Accordion handlers
        document.querySelectorAll('.accordion-header').forEach(btn => {
            btn.addEventListener('click', () => {
                const item = btn.parentNode;
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });
    },

    // Initialize application
    init() {
        // Initialize DOM elements
        if (!this.initializeDomElements()) {
            console.error('Failed to initialize DOM elements');
            return;
        }

        // Load initial data
        CartManager.loadCart();

        // Apply initial settings
        Utils.applyTranslations();
        ThemeManager.applyTheme();

        // Initialize event handlers
        this.initializeEventHandlers();

        // Show initial view
        NavigationManager.showCategories(true);

        // Render initial cart
        CartManager.renderCart();

        // Subscribe to state changes
        AppState.subscribe((state) => {
            console.log('State changed:', state);
        });

        console.log('App initialized successfully');
    }
};

// ==========================================
// EVENT LISTENERS & GLOBAL FUNCTIONS
// ==========================================

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Global functions for external use
window.setLanguage = Utils.setCurrentLang.bind(Utils);
window.App = App;

// Global functions for HTML onclick
window.addToCart = CartManager.addToCart.bind(CartManager);
window.removeFromCart = CartManager.removeFromCart.bind(CartManager);
window.changeQty = CartManager.changeQty.bind(CartManager);
window.openCart = CartManager.openCart.bind(CartManager);
window.closeCart = CartManager.closeCart.bind(CartManager);
window.viewProducts = NavigationManager.showProducts.bind(NavigationManager);
window.backToPrevious = NavigationManager.goBack.bind(NavigationManager);
window.showContact = NavigationManager.showContact.bind(NavigationManager);
window.showFaq = NavigationManager.showFaq.bind(NavigationManager);
window.openSearch = SearchManager.openSearch.bind(SearchManager);
window.closeSearch = SearchManager.closeSearch.bind(SearchManager);
window.performSearch = SearchManager.performSearch.bind(SearchManager);
window.toggleTheme = ThemeManager.toggleTheme.bind(ThemeManager);