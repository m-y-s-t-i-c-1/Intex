// nav.js — navigation stack and view switching

function pushNavState(state) {
    appState.navStack.push(state);
}

function popNavState() {
    appState.navStack.pop();
    return appState.navStack[appState.navStack.length - 1] || { view: 'categories' };
}

function goBack() {
    if (appState.navStack.length <= 1) {
        showCategories();
        return;
    }
    const prevState = popNavState();
    restoreNavState(prevState);
}

function restoreNavState(state) {
    if (!state) state = { view: 'categories' };
    switch (state.view) {
        case 'categories':
            showCategories(false);
            break;
        case 'subcategories':
            appState.currentCategory = state.category;
            appState.currentSubcategory = null;
            renderSubcategories(state.category);
            break;
        case 'products':
            appState.currentCategory = state.category;
            appState.currentSubcategory = state.subcategory;
            filterAndRenderProducts();
            break;
        case 'search':
            appState.currentFilteredProducts = state.results;
            appState.currentPage = 1;
            renderSearchResults(state.query);
            break;
    }
}

// ===== View helpers (moved from monolithic file)
function showContact() {
    // If there's a dedicated contact section on the page, scroll to it and update nav state.
    const contactEl = document.getElementById('contact') || document.getElementById('contact-view');
    if (contactEl) {
        contactEl.classList.remove('hidden');
        contactEl.scrollIntoView({ behavior: 'smooth' });
    } else {
        // fallback: navigate to contact anchor in main page
        try { window.location.href = '../main.html#contact'; } catch (e) {}
    }
    // remove product/search/subcategory states
    appState.navStack = appState.navStack.filter(s => s.view !== 'search' && s.view !== 'products' && s.view !== 'subcategories');
    pushNavState({ view: 'contact' });
}

function showFaq() {
    const faqEl = document.getElementById('faq') || document.getElementById('faq-view');
    if (faqEl) {
        faqEl.classList.remove('hidden');
        faqEl.scrollIntoView({ behavior: 'smooth' });
    } else {
        try { window.location.href = '../pagini/FAQ.html'; } catch (e) {}
    }
    appState.navStack = appState.navStack.filter(s => s.view !== 'search' && s.view !== 'products' && s.view !== 'subcategories');
    pushNavState({ view: 'faq' });
}

function showCategories(pushState = true) {
    document.getElementById('products-view')?.classList.add('hidden');
    document.getElementById('contact-view')?.classList.add('hidden');
    document.getElementById('faq-view')?.classList.add('hidden');
    domElements.categoryMenu?.classList.remove('hidden');
    domElements.productListContainer?.classList.add('hidden');
    document.getElementById('subcategoryContainer')?.style.display = 'none';
    appState.currentCategory = null;
    appState.currentSubcategory = null;
    appState.currentFilteredProducts = [];
    renderCategories();
    if (pushState) {
        appState.navStack = [];
        pushNavState({ view: 'categories' });
    }
}

function renderSubcategories(categoryId) {
    const subs = SUBCATEGORIES_DATA[categoryId];
    const lang = getCurrentLang();

    if (!domElements.productListContainer || !domElements.currentCategoryTitle || !domElements.sidebarFilterList) return;

    if (!subs || subs.length === 0) {
        appState.currentSubcategory = null;
        showProducts(categoryId);
        return;
    }

    domElements.categoryMenu?.classList.add('hidden');
    domElements.productListContainer.classList.remove('hidden');
    domElements.currentCategoryTitle.innerText = getCategoryTitle(categoryId);

    if (domElements.backToCategoriesBtn) {
        domElements.backToCategoriesBtn.style.display = 'block';
        domElements.backToCategoriesBtn.onclick = goBack;
    }

    domElements.sidebarFilterList.innerHTML = '';
    const allLi = document.createElement('li');
    allLi.className = 'active';
    allLi.innerText = translations[lang].all_products || 'Toate Produsele';
    allLi.onclick = () => filterBySubcategory(categoryId, null);
    domElements.sidebarFilterList.appendChild(allLi);

    subs.forEach(sub => {
        const li = document.createElement('li');
        li.innerText = sub.title;
        li.onclick = () => filterBySubcategory(categoryId, sub.id);
        domElements.sidebarFilterList.appendChild(li);
    });

    appState.currentCategory = categoryId;
    appState.currentSubcategory = null;
    filterAndRenderProducts();
    pushNavState({ view: 'subcategories', category: categoryId });
}

function showProducts(categoryId, subcategoryId = null, pushState = true) {
    if (SUBCATEGORIES_DATA[categoryId] && SUBCATEGORIES_DATA[categoryId].length > 0 && subcategoryId === null) {
        renderSubcategories(categoryId);
        return;
    }

    if (!domElements.productListContainer || !domElements.currentCategoryTitle || !domElements.sidebarFilterList) return;

    domElements.categoryMenu?.classList.add('hidden');
    domElements.productListContainer.classList.remove('hidden');
    domElements.currentCategoryTitle.innerText = getCategoryTitle(categoryId);

    const subContainer = document.getElementById('subcategoryContainer');
    const hasSubcategories = SUBCATEGORIES_DATA[categoryId] && SUBCATEGORIES_DATA[categoryId].length > 0;

    if (subContainer) {
        if (hasSubcategories) {
            subContainer.style.display = 'block';
            if (pushState) renderSubcategories(categoryId);
        } else {
            subContainer.style.display = 'none';
        }
    }

    appState.currentCategory = categoryId;
    appState.currentSubcategory = subcategoryId;
    filterAndRenderProducts();

    if (pushState) {
        pushNavState({ view: 'products', category: categoryId, subcategory: subcategoryId });
    }
}

function filterBySubcategory(categoryId, subId) {
    domElements.sidebarFilterList.querySelectorAll('li').forEach(el => el.classList.remove('active'));
    let targetLi;
    if (subId === null) {
        targetLi = domElements.sidebarFilterList.querySelector('li');
    } else {
        targetLi = Array.from(domElements.sidebarFilterList.querySelectorAll('li')).find(li => li.innerText.toLowerCase().includes(subId.toLowerCase().replace('_', ' ')));
    }
    if (targetLi) targetLi.classList.add('active');

    appState.currentCategory = categoryId;
    appState.currentSubcategory = subId;

    if (appState.navStack.length > 0) {
        const lastState = appState.navStack[appState.navStack.length - 1];
        if (lastState.view === 'products' && lastState.category === categoryId) {
            appState.navStack.pop();
        }
    }
    pushNavState({ view: 'products', category: categoryId, subcategory: subId });
    filterAndRenderProducts();
}
