// render.js — UI rendering for categories, products, pagination, search, cart

function renderCategories() {
    if (!domElements.categoryMenu) return;
    domElements.categoryMenu.innerHTML = '';
    const lang = getCurrentLang();
    CATEGORIES_DATA.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'category-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div class="card-icon"><i class="${cat.icon}"></i></div>
            <h4>${translations[lang][cat.i18n_title]}</h4>
            <p>${translations[lang][cat.i18n_desc]}</p>
            <button class="btn-category-view">${translations[lang].cat_view_btn}</button>
        `;
        card.addEventListener('click', () => showProducts(cat.id));
        domElements.categoryMenu.appendChild(card);
    });
}

function filterAndRenderProducts() {
    const { currentCategory, currentSubcategory } = appState;
    const hasSubcategories = !!(SUBCATEGORIES_DATA[currentCategory] && SUBCATEGORIES_DATA[currentCategory].length);
    if (currentSubcategory !== null && hasSubcategories) {
        appState.currentFilteredProducts = PRODUCTS_DATA.filter(p => p.category === currentCategory && p.subcategory === currentSubcategory);
    } else if (currentCategory) {
        appState.currentFilteredProducts = PRODUCTS_DATA.filter(p => p.category === currentCategory);
    } else {
        appState.currentFilteredProducts = [];
    }
    appState.currentPage = 1;
    renderPaginatedGrid();
}

function renderProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    let priceHTML = `<div class="price-val" style="font-weight:bold; font-size:1.1em;">${formatPrice(product.price)}</div>`;
    if (product.oldPrice && product.oldPrice > product.price) {
        priceHTML = `
            <div class="price-container" style="display:flex; align-items:center; gap:10px;">
                <span class="old-price" style="text-decoration:line-through; color:#999; font-size:0.9em;">${formatPrice(product.oldPrice)}</span>
                <span class="new-price" style="color:#e74c3c; font-weight:bold; font-size:1.1em;">${formatPrice(product.price)}</span>
            </div>
        `;
    }
    const title = getProductTitle(product);
    card.innerHTML = `
        <div class="img-wrapper" style="margin-bottom:10px;">
            <img src="${product.image}" alt="${title}" style="width:100%; height:auto; border-radius:8px;" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
        </div>
        <h5 class="product-title" style="margin-bottom:5px; height:40px; overflow:hidden;">${title}</h5>
        <div class="product-price" style="margin-bottom:10px;">${priceHTML}</div>
        <button class="btn-main btn-add-cart" onclick="window.addToCart('${product.id}')" style="width:100%; padding:8px; cursor:pointer;">
            <i class="fas fa-shopping-cart"></i> ${translations[getCurrentLang()].add_to_cart}
        </button>
    `;
    return card;
}

function renderPaginatedGrid() {
    if (!domElements.productListGrid) return;
    const { currentFilteredProducts, currentPage } = appState;
    const totalProducts = currentFilteredProducts.length;
    const totalPages = Math.max(1, Math.ceil(totalProducts / CONFIG.ITEMS_PER_PAGE));
    const validPage = Math.min(currentPage, totalPages);
    appState.currentPage = validPage;
    domElements.productListGrid.innerHTML = '';
    if (totalProducts === 0) {
        domElements.productListGrid.innerHTML = `<p style="text-align:center; grid-column: 1 / -1;">${translations[getCurrentLang()].no_products}</p>`;
        renderPagination(1, 1);
        return;
    }
    const startIndex = (appState.currentPage - 1) * CONFIG.ITEMS_PER_PAGE;
    const endIndex = startIndex + CONFIG.ITEMS_PER_PAGE;
    for (let i = startIndex; i < endIndex && i < totalProducts; i++) {
        const product = currentFilteredProducts[i];
        const card = renderProductCard(product);
        domElements.productListGrid.appendChild(card);
    }
    renderPagination(validPage, totalPages);
}

function renderPagination(currentPage, totalPages) {
    if (!domElements.paginationContainer) return;
    domElements.paginationContainer.innerHTML = '';
    if (totalPages <= 1) return;
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.innerText = '<';
        prevBtn.onclick = () => goToPage(currentPage - 1);
        domElements.paginationContainer.appendChild(prevBtn);
    }
    for (let i = startPage; i <= endPage; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.innerText = i;
        btn.onclick = () => goToPage(i);
        domElements.paginationContainer.appendChild(btn);
    }
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.innerText = '>';
        nextBtn.onclick = () => goToPage(currentPage + 1);
        domElements.paginationContainer.appendChild(nextBtn);
    }
}

function goToPage(pageNum) {
    appState.currentPage = pageNum;
    renderPaginatedGrid();
    domElements.productListContainer?.scrollIntoView({ behavior: 'smooth' });
}

function renderSearchResults(query) {
    if (!domElements.productListContainer || !domElements.productListGrid) return;
    const lang = getCurrentLang();
    if (domElements.currentCategoryTitle) {
        domElements.currentCategoryTitle.innerText = `${translations[lang].search_results} "${query}"`;
    }
    domElements.categoryMenu?.classList.add('hidden');
    domElements.productListContainer.classList.remove('hidden');
    const subContainer = document.getElementById('subcategoryContainer');
    if (subContainer) subContainer.style.display = 'none';
    renderPaginatedGrid();
    if (appState.navStack[appState.navStack.length - 1]?.view !== 'search') {
        pushNavState({ view: 'search', query, results: appState.currentFilteredProducts });
    }
}

function renderCart() {
    if (!domElements.cartItemsContainer) return;
    const lang = getCurrentLang();
    let total = 0;
    let count = 0;
    domElements.cartItemsContainer.innerHTML = '';
    if (appState.cart.length === 0) {
        domElements.cartItemsContainer.innerHTML = `<p style="text-align:center;">${translations[lang].cart_empty}</p>`;
    } else {
        const cartHtml = [];
        appState.cart.forEach(item => {
            const product = PRODUCTS_DATA.find(p => p.id === item.id);
            if (product) {
                const lineTotal = product.price * item.qty;
                total += lineTotal;
                count += item.qty;
                cartHtml.push(`
                    <div class="cart-item" style="display:flex; justify-content:space-between; margin-bottom:10px; border-bottom:1px solid #eee; padding-bottom:5px;">
                        <div>
                            <strong>${getProductTitle(product)}</strong><br>
                            <small>${formatPrice(product.price)} x ${item.qty}</small>
                        </div>
                        <div style="display:flex; gap:5px; align-items:center;">
                            <button onclick="window.changeQty('${item.id}', -1)" style="padding:2px 6px;">-</button>
                            <span>${formatPrice(lineTotal)}</span>
                            <button onclick="window.changeQty('${item.id}', 1)" style="padding:2px 6px;">+</button>
                            <button onclick="window.removeFromCart('${item.id}')" style="color:red; border:none; background:none; cursor:pointer;"><i class="fas fa-trash"></i></button>
                        </div>
                    </div>
                `);
            }
        });
        domElements.cartItemsContainer.innerHTML = cartHtml.join('');
    }
    if (domElements.cartTotalElement) domElements.cartTotalElement.innerText = formatPrice(total);
    if (domElements.cartItemCount) domElements.cartItemCount.innerText = count;
    const appTitleKey = translations[getCurrentLang()].app_title;
    if (appTitleKey) {
        document.title = `${count > 0 ? `(${count}) ` : ''} ${appTitleKey}`;
    }
}
