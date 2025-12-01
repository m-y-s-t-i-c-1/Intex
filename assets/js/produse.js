// Simplified product page script: rendering, search, pagination, and cart
(function () {
    const CONFIG = { ITEMS_PER_PAGE: 12 };

    const State = {
        currentCategory: null,
        currentSubcategory: null,
        currentProducts: [],
        page: 1,
        cart: [],
        grouped: null,
        showingSubcategory: null
    };

    // Helpers
    function byId(id) { return document.getElementById(id); }

    function normalizeImagePath(path) {
        if (!path) return '';
        // data.js paths sometimes contain '../assets/img/...', page is in assets/pagini
        return path.replace(/\.\.\/assets\/img\//, '../img/');
    }

    function formatPrice(p) {
        const price = Number(p) || 0;
        return price.toFixed(2) + ' LEI';
    }

    // Language helper: reads saved language (fallback to 'ro')
    function getLang() {
        try { return localStorage.getItem('intex_language') || 'ro'; } catch (e) { return 'ro'; }
    }

    function getAllProducts() {
        const list = [];

        // accessory aliases that should be unified under the `swim-accessories` category
        const accessoryAliases = ['accessories', 'swim-accessories', 'boats_pool_accessories', 'boats_care', 'pool_accessories'];

        if (typeof PRODUCTS_DATA !== 'undefined' && Array.isArray(PRODUCTS_DATA)) {
            PRODUCTS_DATA.forEach(p => {
                // normalize image
                let cat = p.category;

                // remap generic 'pools' to 'baseine_intex' to avoid duplication
                if (p.category && p.category.toString() === 'pools') cat = 'baseine_intex';

                // remap accessory-like categories to unified 'swim-accessories'
                if (p.category && accessoryAliases.includes(p.category.toString())) cat = 'swim-accessories';

                list.push(Object.assign({}, p, { image: normalizeImagePath(p.image), category: cat }));
            });
        }

        if (typeof POOLS_PRODUCTS !== 'undefined' && POOLS_PRODUCTS && Array.isArray(POOLS_PRODUCTS.pools)) {
            POOLS_PRODUCTS.pools.forEach(p => {
                // determine if this pool entry is actually an accessory (by sub/subcategory)
                const pSub = (p.sub || p.subcategory || '').toString();
                const isAccessorySub = accessoryAliases.includes(pSub);

                const item = Object.assign({
                    id: p.id || ('pool_' + Math.random().toString(36).slice(2, 9)),
                    // default: pool items appear under 'baseine_intex' (accessory subs go to 'swim-accessories')
                    category: isAccessorySub ? 'swim-accessories' : 'baseine_intex',
                    subcategory: p.sub || p.subcategory || null,
                    title: p.title,
                    price: p.price || 0,
                    oldPrice: p.oldPrice || null,
                    image: normalizeImagePath(p.image),
                    __fromPools: true
                }, p);

                list.push(item);
            });
        }

        return list;
    }

    // Cart
    function loadCart() {
        try {
            State.cart = JSON.parse(localStorage.getItem('intex_cart') || '[]');
        } catch (e) { State.cart = []; }
        updateCartCount();
    }

    function saveCart() { localStorage.setItem('intex_cart', JSON.stringify(State.cart)); }

    function updateCartCount() {
        const countEl = byId('cartCount');
        const total = State.cart.reduce((s,i)=>s+(i.qty||0),0);
        if (countEl) countEl.innerText = total;
    }

    function addToCart(id) {
        const found = State.cart.find(i=>i.id===id);
        if (found) found.qty = (found.qty||0)+1;
        else State.cart.push({ id, qty: 1 });
        saveCart();
        updateCartCount();
        renderCartItems();
        openCart();
    }

    function removeFromCart(id) {
        State.cart = State.cart.filter(i=>i.id!==id);
        saveCart(); updateCartCount(); renderCartItems();
    }

    function changeQty(id, delta) {
        const it = State.cart.find(i=>i.id===id);
        if (!it) return;
        it.qty = (it.qty||0) + delta;
        if (it.qty <= 0) removeFromCart(id);
        else { saveCart(); updateCartCount(); renderCartItems(); }
    }

    function renderCartItems() {
        const container = byId('cart-items-container');
        const totalEl = byId('cart-total');
        if (!container) return;
        container.innerHTML = '';
        if (!State.cart.length) {
            container.innerHTML = `<p class="cart-empty" data-i18n="cart_empty">Coșul este gol</p>`;
            if (totalEl) totalEl.innerText = '0.00 LEI';
            return;
        }
        const products = getAllProducts();
        let total = 0;
        State.cart.forEach(item=>{
            const p = products.find(x=>x.id==item.id);
            if (!p) return;
            const line = (p.price||0) * (item.qty||1);
            total += line;
            
            // Get product title in current language
            let title = p.title;
            if (p.title && typeof p.title === 'object') {
                const lang = getLang();
                title = p.title[lang] || p.title.ro || Object.values(p.title)[0] || 'Produs';
            }
            
            const div = document.createElement('div');
            div.className = 'cart-item';
            
            const infoDiv = document.createElement('div');
            infoDiv.innerHTML = `
                <strong>${title}</strong>
                <small>${formatPrice(p.price)} x ${item.qty}</small>
            `;
            
            const controlsDiv = document.createElement('div');
            controlsDiv.className = 'cart-item-controls';
            
            const minusBtn = document.createElement('button');
            minusBtn.textContent = '−';
            minusBtn.onclick = () => window.changeQty(item.id, -1);
            
            const qtySpan = document.createElement('span');
            qtySpan.textContent = item.qty;
            qtySpan.style.minWidth = '20px';
            qtySpan.style.textAlign = 'center';
            
            const plusBtn = document.createElement('button');
            plusBtn.textContent = '+';
            plusBtn.onclick = () => window.changeQty(item.id, 1);
            
            const priceSpan = document.createElement('span');
            priceSpan.className = 'cart-item-price';
            priceSpan.textContent = formatPrice(line);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'cart-item-delete';
            deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
            deleteBtn.title = 'Șterge din coș';
            deleteBtn.onclick = () => window.removeFromCart(item.id);
            
            controlsDiv.appendChild(minusBtn);
            controlsDiv.appendChild(qtySpan);
            controlsDiv.appendChild(plusBtn);
            controlsDiv.appendChild(priceSpan);
            controlsDiv.appendChild(deleteBtn);
            
            div.appendChild(infoDiv);
            div.appendChild(controlsDiv);
            container.appendChild(div);
        });
        if (totalEl) totalEl.innerText = formatPrice(total);
    }

    // UI: categories & products
    function getCategoryTitle(cat) {
        const c = (typeof CATEGORIES_DATA !== 'undefined') ? CATEGORIES_DATA.find(x=>x.id===cat) : null;
        if (!c) return cat;
        const lang = getLang();
        if (c.i18n_title && typeof c.i18n_title === 'object') {
            return c.i18n_title[lang] || c.i18n_title.ro || Object.values(c.i18n_title)[0];
        }
        return c.title || c.id;
    }

    // Subcategory title resolver (uses SUBCATEGORIES_DATA where available)
    function getSubcategoryLabel(subId) {
        if (!subId || typeof SUBCATEGORIES_DATA === 'undefined') return subId || '';
        const lang = getLang();
        // look for the subId inside pools subcategories first
        for (const key in SUBCATEGORIES_DATA) {
            if (!Array.isArray(SUBCATEGORIES_DATA[key])) continue;
            const found = SUBCATEGORIES_DATA[key].find(s => s.id === subId);
            if (found && found.title) {
                return (found.title[lang] || found.title.ro || Object.values(found.title)[0]);
            }
        }
        return subId;
    }

    function renderCategories() {
        const menu = byId('category-menu');
        if (!menu || typeof CATEGORIES_DATA === 'undefined') return;
        menu.innerHTML = '';
        
        // Icon mapping for categories (Font Awesome)
        const categoryIcons = {
            'boats': 'fas fa-water',
            'joaca': 'fas fa-gamepad',
            'transport': 'fas fa-bicycle',
            'pools': 'fas fa-swimming-pool',
            'accessories': 'fas fa-toolbox',
            'baseine_intex': 'fas fa-swimming-pool',
            'copii-pools': 'fas fa-child',
            'swim-accessories': 'fas fa-swimmer',
            'inflatable-mattresses': 'fas fa-bed',
            'pumps': 'fas fa-fan'
        };
        
        CATEGORIES_DATA.forEach(cat=>{
            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.cursor = 'pointer';
            const title = getCategoryTitle(cat.id);
            const desc = (cat.i18n_desc && typeof cat.i18n_desc === 'object') ? (cat.i18n_desc.ro || '') : (cat.i18n_desc||'');
            const iconClass = categoryIcons[cat.id] || 'fas fa-box';
            card.innerHTML = `<div class="card-icon" style="font-size:3em;margin-bottom:12px;color:#0284c7"><i class="${iconClass}"></i></div>
                <h4 style="margin:8px 0">${title}</h4>
                <p style="font-size:0.9em;color:#666">${desc}</p>
                <button class="btn-main" style="margin-top:8px">Vezi produse</button>`;
            card.addEventListener('click', ()=>{ viewProducts(cat.id); });
            menu.appendChild(card);
        });
    }

    function viewProducts(categoryId) {
        const container = byId('product-list-container');
        const catTitle = byId('currentCategoryTitle');
        const menu = byId('category-menu');
        if (menu) menu.classList.add('hidden');
        if (container) container.classList.remove('hidden');
        State.currentCategory = categoryId;
        State.page = 1;
        State.showingSubcategory = null; // Reset subcategory view
        const all = getAllProducts();
        
        // Map category aliases to actual subcategories
        const categoryMap = {
            'accessories': ['swim-accessories', 'boats_pool_accessories', 'boats_care'],
            'spares': ['intex_parts']
        };

        let filtered = [];
        if (categoryId === 'baseine_intex') {
            // Include all products that come from POOLS_PRODUCTS (have sub/subcategory)
            // and group them into ordered subcategories for display
            // Build groupsOrder using multilingual labels from SUBCATEGORIES_DATA when possible
            const poolAccessoryLabels = {
                ro: 'Accesorii pentru bazine',
                ru: 'Аксессуары для бассейнов',
                en: 'Pool accessories'
            };
            const lang = getLang();
            const groupsOrder = [
                { id: 'care_water', label: getSubcategoryLabel('care_water') },
                { id: 'intex_parts', label: getSubcategoryLabel('intex_parts') },
                { id: 'frame_pools', label: getSubcategoryLabel('frame_pools') },
                { id: 'easy_set', label: getSubcategoryLabel('easy_set') },
                { id: 'filters', label: getSubcategoryLabel('filters') },
                { id: 'pool_accessories', label: poolAccessoryLabels[lang] || poolAccessoryLabels.ro }
            ];

            // Build groups and assign each product to the first matching group to avoid duplicates
            const groupsMap = {};
            groupsOrder.forEach(g => { groupsMap[g.id] = { id: g.id, label: g.label, items: [] }; });

            // helper to check equality
            function eq(a, b) { return a && b && a.toString() === b.toString(); }

            // iterate products and put each into the first matching group
            all.forEach(p => {
                // only consider pool-related products (those with sub/subcategory or pool-related categories)
                const pSub = p.sub || p.subcategory || null;
                const pCat = p.category || '';

                let assigned = false;

                // 1) exact sub match groups
                for (const g of groupsOrder) {
                    if (g.id === 'pool_accessories') continue; // skip accessories here
                    if (pSub && eq(pSub, g.id)) {
                        groupsMap[g.id].items.push(p);
                        assigned = true;
                        break;
                    }
                }

                if (assigned) return;

                // 2) intex_parts may also be present in category field
                if (pCat === 'intex_parts' && groupsMap['intex_parts']) {
                    groupsMap['intex_parts'].items.push(p);
                    return;
                }

                // 3) pool_accessories: catch remaining pool/accessory related items
                // Only include products into pool_accessories when they are clearly pool-related
                const accessoryCats = ['accessories', 'swim-accessories', 'boats_pool_accessories', 'boats_care'];
                // pool-related keywords used only for products that originate from pools or are category 'pools'
                const poolKeywords = ['filter', 'filtr', 'pompa', 'pompe', 'pump', 'skimmer', 'chlor', 'clor', 'intex', 'bazin', 'bazinul', 'piscin', 'piscină', 'pool', 'filter-sand', 'adapter', 'valve'];
                const titleStr = ((p.title && (p.title.ro || p.title.en || p.title)) || '').toString().toLowerCase();
                const titleMatches = poolKeywords.some(k => titleStr.includes(k));

                // Rules:
                // - If product explicitly belongs to 'pools' (or was merged from POOLS_PRODUCTS), allow matching by keywords or sub
                // - If product already has an accessory-like category/subcategory, include it
                // - Do NOT include arbitrary PRODUCTS_DATA items based only on title keyword matches
                const isFromPools = !!p.__fromPools || pCat === 'pools';

                if (isFromPools) {
                    // allow if subcategory suggests accessory or title contains pool keyword
                    if ((pSub && accessoryCats.includes(pSub)) || titleMatches || accessoryCats.includes(pCat)) {
                        groupsMap['pool_accessories'].items.push(p);
                        return;
                    }
                } else {
                    // not from pools: only include if its category/subcategory is explicitly an accessory category
                    if (accessoryCats.includes(pCat) || (pSub && accessoryCats.includes(pSub))) {
                        groupsMap['pool_accessories'].items.push(p);
                        return;
                    }
                }

                // 5) otherwise ignore (not pool-related)
            });

            // Dedupe produse între grupuri: fiecare produs apare o singură dată, în primul grup în care a fost găsit
            const seenIds = new Set();
            State.grouped = groupsOrder.map(g => {
                const group = groupsMap[g.id];
                if (!group || !group.items) return { id: g.id, label: g.label, items: [] };
                const uniqueItems = [];
                group.items.forEach(it => {
                    const iid = it.id || (it.title && (it.title.ro || it.title.en || it.title)) || JSON.stringify(it);
                    if (!seenIds.has(iid)) {
                        seenIds.add(iid);
                        uniqueItems.push(it);
                    }
                });
                return { id: group.id, label: group.label, items: uniqueItems };
            });
            
            // Afișează direct lista de subcategorii (doar antetele)
            State.currentProducts = []; // Nu afișăm produsele direct
        } else if (categoryMap[categoryId]) {
            // If category has aliases, filter by those subcategories
            filtered = all.filter(p => categoryMap[categoryId].includes(p.category));
            State.grouped = null;
            State.currentProducts = filtered;
        } else {
            // Otherwise filter by exact category match
            filtered = all.filter(p=>p.category===categoryId || (p.category && p.category.toString()===categoryId));
            State.grouped = null;
            State.currentProducts = filtered;
        }

        if (catTitle) {
            catTitle.innerText = getCategoryTitle(categoryId);
        }
        renderProductsPage();
    }

    // Funcție nouă pentru a afișa produsele unei subcategorii
    function showSubcategoryProducts(group) {
        State.showingSubcategory = group;
        State.page = 1;
        renderProductsPage();
    }

    function renderProductsPage() {
        const grid = byId('productListGrid');
        const pagination = byId('pagination-container');
        const catTitle = byId('currentCategoryTitle');
        const backBtnText = byId('backBtnText');
        if (!grid) return;
        grid.innerHTML = '';

        // Dacă suntem în modul de vizualizare a unei subcategorii
        if (State.showingSubcategory) {
            // Schimbă textul butonului "Înapoi"
            if (backBtnText) backBtnText.textContent = 'La Subcategorii';

            // Titlul subcategoriei - centrat
            const subcatTitle = document.createElement('h2');
            subcatTitle.textContent = State.showingSubcategory.label;
            subcatTitle.style.cssText = `
                margin: 0 0 30px 0;
                color: var(--text-main);
                text-align: center;
            `;
            grid.appendChild(subcatTitle);

            const products = State.showingSubcategory.items || [];
            
            if (!products.length) {
                const emptyMsg = document.createElement('p');
                emptyMsg.textContent = 'Nu s-au găsit produse în această subcategorie.';
                emptyMsg.style.textAlign = 'center';
                emptyMsg.style.color = '#666';
                grid.appendChild(emptyMsg);
                if (pagination) pagination.innerHTML = '';
                return;
            }

            // Actualizează titlul paginii
            if (catTitle) {
                catTitle.textContent = `${getCategoryTitle(State.currentCategory)} - ${State.showingSubcategory.label}`;
            }

            // Afișează produsele cu paginare
            const totalPages = Math.max(1, Math.ceil(products.length / CONFIG.ITEMS_PER_PAGE));
            if (State.page > totalPages) State.page = totalPages;
            const start = (State.page - 1) * CONFIG.ITEMS_PER_PAGE;
            const end = start + CONFIG.ITEMS_PER_PAGE;

            const productsGrid = document.createElement('div');
            productsGrid.style.display = 'grid';
            productsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
            productsGrid.style.gap = '16px';

            products.slice(start, end).forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                const title = (p.title && p.title.ro) ? p.title.ro : (p.title || 'Produs');
                const img = p.image || '';
                const priceHtml = (p.oldPrice && p.oldPrice > p.price) ? 
                    `<div class="price-container" style="display:flex; align-items:center; gap:12px;">
                        <span class="old-price" style="text-decoration: line-through; opacity: 0.6; font-size: 0.9em; color: #999;">${formatPrice(p.oldPrice)}</span>
                        <span class="new-price" style="color: #e74c3c; font-weight: bold; font-size: 1.15em;">${formatPrice(p.price)}</span>
                    </div>` : 
                    `<div class="price-val" style="font-weight: bold; font-size: 1.1em;">${formatPrice(p.price)}</div>`;
                
                card.innerHTML = `
                    <div class="img-wrapper">
                        <img src="${img}" alt="${title}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'" style="width:100%; height:auto; border-radius:8px;">
                    </div>
                    <h5 class="product-title" style="margin:10px 0; height:40px; overflow:hidden;">${title}</h5>
                    <div class="product-price" style="margin-bottom:15px;">${priceHtml}</div>
                    <button class="btn-main btn-add-cart" style="width:100%; padding:10px; cursor:pointer;">
                        <i class="fas fa-shopping-cart"></i> Adaugă în coș
                    </button>
                `;
                
                const btn = card.querySelector('.btn-add-cart');
                btn.addEventListener('click', () => addToCart(p.id || p.title));
                productsGrid.appendChild(card);
            });

            grid.appendChild(productsGrid);

            // Paginare
            if (pagination) {
                pagination.innerHTML = '';
                if (totalPages > 1) {
                    if (State.page > 1) {
                        const prev = document.createElement('button');
                        prev.className = 'page-btn';
                        prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
                        prev.onclick = () => { State.page--; renderProductsPage(); };
                        pagination.appendChild(prev);
                    }
                    
                    for (let i = 1; i <= totalPages; i++) {
                        const btn = document.createElement('button');
                        btn.className = `page-btn ${i === State.page ? 'active' : ''}`;
                        btn.textContent = i;
                        btn.onclick = (() => {
                            const pageNum = i;
                            return () => { State.page = pageNum; renderProductsPage(); };
                        })();
                        pagination.appendChild(btn);
                    }
                    
                    if (State.page < totalPages) {
                        const next = document.createElement('button');
                        next.className = 'page-btn';
                        next.innerHTML = '<i class="fas fa-chevron-right"></i>';
                        next.onclick = () => { State.page++; renderProductsPage(); };
                        pagination.appendChild(next);
                    }
                }
            }
            
            return;
        }

        // Dacă avem grupuri (pentru baseine_intex) - afișăm doar lista de subcategorii
        if (State.grouped && State.currentCategory === 'baseine_intex') {
            // Schimbă textul butonului "Înapoi"
            if (backBtnText) backBtnText.textContent = 'La Categorii';

            const subcatList = document.createElement('div');
            subcatList.className = 'subcategory-list';
            
            State.grouped.forEach(group => {
                if (group.items.length === 0) return; // Sari peste subcategoriile goale
                
                const subcatCard = document.createElement('div');
                subcatCard.className = 'subcategory-card';
                subcatCard.style.cssText = `
                    cursor: pointer;
                    padding: 20px;
                    border: 1px solid rgba(226, 232, 240, 0.3);
                    border-radius: 8px;
                    margin-bottom: 15px;
                    transition: all 0.3s ease;
                    background: var(--card-bg);
                    color: var(--text-main);
                `;
                subcatCard.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 style="margin: 0; color: var(--text-main); font-size: 1.2em;">${group.label}</h3>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <span style="background: var(--primary); color: white; padding: 4px 8px; border-radius: 12px; font-size: 0.9em;">
                                ${group.items.length} produse
                            </span>
                            <i class="fas fa-chevron-right" style="color: var(--text-muted);"></i>
                        </div>
                    </div>
                `;
                
                // Efect hover
                subcatCard.addEventListener('mouseenter', () => {
                    subcatCard.style.transform = 'translateY(-2px)';
                    subcatCard.style.boxShadow = 'var(--box-glow)';
                    subcatCard.style.borderColor = 'var(--primary)';
                });
                
                subcatCard.addEventListener('mouseleave', () => {
                    subcatCard.style.transform = 'translateY(0)';
                    subcatCard.style.boxShadow = 'none';
                    subcatCard.style.borderColor = 'rgba(226, 232, 240, 0.3)';
                });
                
                // Click pentru a vedea produsele
                subcatCard.addEventListener('click', () => showSubcategoryProducts(group));
                
                subcatList.appendChild(subcatCard);
            });
            
            grid.appendChild(subcatList);
            if (pagination) pagination.innerHTML = '';
            return;
        }

        // Cazul normal - afișare produse directe (pentru alte categorii)
        const products = State.currentProducts || [];
        if (!products.length) {
            grid.innerHTML = `<p style="text-align:center; grid-column:1/-1; color:#666; padding:40px 0">Nu s-au găsit produse</p>`;
            if (pagination) pagination.innerHTML = '';
            return;
        }
        
        const totalPages = Math.max(1, Math.ceil(products.length / CONFIG.ITEMS_PER_PAGE));
        if (State.page > totalPages) State.page = totalPages;
        const start = (State.page - 1) * CONFIG.ITEMS_PER_PAGE;
        const end = start + CONFIG.ITEMS_PER_PAGE;
        
        const productsGrid = document.createElement('div');
        productsGrid.style.display = 'grid';
        productsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(220px, 1fr))';
        productsGrid.style.gap = '16px';
        
        products.slice(start, end).forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            const title = (p.title && p.title.ro) ? p.title.ro : (p.title || 'Produs');
            const img = p.image || '';
            const priceHtml = (p.oldPrice && p.oldPrice > p.price) ? 
                `<div class="price-container" style="display:flex; align-items:center; gap:12px;">
                    <span class="old-price" style="text-decoration: line-through; opacity: 0.6; font-size: 0.9em; color: #999;">${formatPrice(p.oldPrice)}</span>
                    <span class="new-price" style="color: #e74c3c; font-weight: bold; font-size: 1.15em;">${formatPrice(p.price)}</span>
                </div>` : 
                `<div class="price-val" style="font-weight: bold; font-size: 1.1em;">${formatPrice(p.price)}</div>`;
            
            card.innerHTML = `
                <div class="img-wrapper">
                    <img src="${img}" alt="${title}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'" style="width:100%; height:auto; border-radius:8px;">
                </div>
                <h5 class="product-title" style="margin:10px 0; height:40px; overflow:hidden;">${title}</h5>
                <div class="product-price" style="margin-bottom:15px;">${priceHtml}</div>
                <button class="btn-main btn-add-cart" style="width:100%; padding:10px; cursor:pointer;">
                    <i class="fas fa-shopping-cart"></i> Adaugă în coș
                </button>
            `;
            
            const btn = card.querySelector('.btn-add-cart');
            btn.addEventListener('click', () => addToCart(p.id || p.title));
            productsGrid.appendChild(card);
        });
        
        grid.appendChild(productsGrid);
        
        // Paginare pentru cazul normal
        if (pagination) {
            pagination.innerHTML = '';
            // Setează stiluri inline pentru containerul de paginare
            pagination.style.display = 'flex';
            pagination.style.justifyContent = 'center';
            pagination.style.alignItems = 'center';
            pagination.style.gap = '8px';
            pagination.style.marginTop = '40px';
            pagination.style.marginBottom = '40px';
            pagination.style.flexWrap = 'wrap';
            if (totalPages > 1) {
                if (State.page > 1) {
                    const prev = document.createElement('button');
                    prev.className = 'page-btn';
                    prev.innerHTML = '<i class="fas fa-chevron-left"></i>';
                    prev.onclick = () => { State.page--; renderProductsPage(); };
                    pagination.appendChild(prev);
                }
                
                for (let i = 1; i <= totalPages; i++) {
                    const btn = document.createElement('button');
                    btn.className = `page-btn ${i === State.page ? 'active' : ''}`;
                    btn.textContent = i;
                    btn.onclick = (() => {
                        const pageNum = i;
                        return () => { State.page = pageNum; renderProductsPage(); };
                    })();
                    pagination.appendChild(btn);
                }
                
                if (State.page < totalPages) {
                    const next = document.createElement('button');
                    next.className = 'page-btn';
                    next.innerHTML = '<i class="fas fa-chevron-right"></i>';
                    next.onclick = () => { State.page++; renderProductsPage(); };
                    pagination.appendChild(next);
                }
            }
        }
    }

    // Search - FUNCȚIA REPARATĂ
    function performSearch(q) {
        // Handle both string query and event object from form submit
        if (q && typeof q === 'object' && q.preventDefault) {
            q.preventDefault();
            const inp = document.querySelector('#search-overlay input') || document.querySelector('input#search-input');
            q = inp ? inp.value : '';
        }
        
        q = (q||'').toString().trim();
        if (!q) return;
        
        const all = getAllProducts();
        const query = q.toLowerCase();
        const lang = getLang();
        
        // Helper: check if query matches any category/subcategory name or description
        function matchesCategory(p) {
            const pCat = p.category || '';
            const pSub = p.sub || p.subcategory || '';
            
            // Get category title
            if (typeof CATEGORIES_DATA !== 'undefined') {
                const cat = CATEGORIES_DATA.find(c => c.id === pCat);
                if (cat) {
                    // Check category title in all languages
                    if (cat.i18n_title && typeof cat.i18n_title === 'object') {
                        for (const langKey in cat.i18n_title) {
                            if (cat.i18n_title[langKey].toLowerCase().includes(query)) return true;
                        }
                    }
                    // Check category description in all languages
                    if (cat.i18n_desc && typeof cat.i18n_desc === 'object') {
                        for (const langKey in cat.i18n_desc) {
                            if (cat.i18n_desc[langKey].toLowerCase().includes(query)) return true;
                        }
                    }
                }
            }
            
            // Get subcategory title (if in SUBCATEGORIES_DATA)
            if (typeof SUBCATEGORIES_DATA !== 'undefined' && pSub) {
                for (const key in SUBCATEGORIES_DATA) {
                    if (!Array.isArray(SUBCATEGORIES_DATA[key])) continue;
                    const found = SUBCATEGORIES_DATA[key].find(s => s.id === pSub);
                    if (found && found.title && typeof found.title === 'object') {
                        for (const langKey in found.title) {
                            if (found.title[langKey].toLowerCase().includes(query)) return true;
                        }
                    }
                }
            }
            
            return false;
        }
        
        State.currentProducts = all.filter(p => {
            // Handle both object and string titles
            let title = '';
            if (p.title && typeof p.title === 'object') {
                // Try all languages
                title = (p.title[lang] || p.title.ro || Object.values(p.title)[0] || '').toLowerCase();
            } else {
                title = (p.title || '').toLowerCase();
            }
            
            // Also search in description if available
            let description = '';
            if (p.description && typeof p.description === 'object') {
                description = (p.description[lang] || p.description.ro || Object.values(p.description)[0] || '').toLowerCase();
            } else {
                description = (p.description || '').toLowerCase();
            }
            
            // Search in title, description, OR category/subcategory match
            return title.includes(query) || 
                   description.includes(query) || 
                   matchesCategory(p);
        });
        
        State.page = 1;
        State.currentCategory = null;
        State.grouped = null;
        State.showingSubcategory = null; // Reset subcategory view when searching
        
        const catTitle = byId('currentCategoryTitle');
        if (catTitle) {
            const lang = getLang();
            const searchTitles = {
                ro: `Rezultatele căutării pentru "${q}"`,
                ru: `Результаты поиска для "${q}"`,
                en: `Search results for "${q}"`
            };
            catTitle.innerText = searchTitles[lang] || searchTitles.ro;
        }
        
        const categoryMenu = byId('category-menu'); 
        if (categoryMenu) categoryMenu.classList.add('hidden');
        
        const container = byId('product-list-container'); 
        if (container) container.classList.remove('hidden');
        
        renderProductsPage();
        
        // Close search overlay if open
        const searchOverlay = document.getElementById('search-overlay');
        if (searchOverlay) searchOverlay.style.display = 'none';
        
        // Clear search input
        const searchInput = document.querySelector('#search-overlay input') || document.querySelector('input#search-input');
        if (searchInput) searchInput.value = '';
    }

    // Search overlay controls
    function openSearch() {
        const overlay = byId('search-overlay');
        if (overlay) {
            overlay.style.display = 'flex';
            setTimeout(() => {
                const inp = document.querySelector('#search-overlay input');
                if (inp) inp.focus();
            }, 100);
        }
    }

    function closeSearch() {
        const overlay = byId('search-overlay');
        if (overlay) {
            overlay.style.display = 'none';
            const inp = document.querySelector('#search-overlay input');
            if (inp) inp.value = '';
        }
    }

    // Cart overlay controls
    function openCart() {
        const el = byId('cart-overlay');
        if (el) {
            el.classList.add('active');
            el.style.display = 'flex';
        }
    }

    function closeCart() {
        const el = byId('cart-overlay');
        if (el) {
            el.classList.remove('active');
            el.style.display = 'none';
        }
    }

    // Init
    function init() {
        // Bind global helpers for HTML inline handlers used in cart items
        window.addToCart = addToCart;
        window.removeFromCart = removeFromCart;
        window.changeQty = changeQty;
        window.openCart = openCart;
        window.closeCart = closeCart;
        window.showSubcategoryProducts = showSubcategoryProducts; // Expun funcția global

        loadCart(); renderCartItems();
        renderCategories();

        // Check URL search parameter (from main.js redirect or direct search URL)
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        if (searchQuery) {
            performSearch(searchQuery);
        }

        // Bind search button click to open overlay
        const searchBtn = byId('searchBtn');
        if (searchBtn) searchBtn.addEventListener('click', openSearch);

        // Bind search - IMPROVED SEARCH BINDING
        const searchForms = document.querySelectorAll('form[action*="search"], form[id*="search"]');
        searchForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const input = form.querySelector('input[type="text"]');
                if (input) {
                    performSearch(input.value);
                    closeSearch();
                }
            });
        });

        // Also bind Enter key on search inputs
        const searchInputs = document.querySelectorAll('input[type="text"][placeholder*="căutare"], input[type="text"][placeholder*="search"], input#search-input');
        searchInputs.forEach(input => {
            input.addEventListener('keypress', (e) => { 
                if (e.key === 'Enter') { 
                    e.preventDefault(); 
                    performSearch(input.value); 
                } 
            });
        });

        // Back button
        const backBtn = byId('backToCategoriesBtn');
        if (backBtn) backBtn.addEventListener('click', ()=>{ 
            // Dacă suntem într-o subcategorie, întoarce-te la lista de subcategorii
            if (State.showingSubcategory) {
                State.showingSubcategory = null;
                renderProductsPage();
            } else {
                // Altfel, întoarce-te complet la categorii
                State.showingSubcategory = null;
                const menu = byId('category-menu'); 
                if (menu) menu.classList.remove('hidden'); 
                const container = byId('product-list-container'); 
                if (container) container.classList.add('hidden'); 
            }
        });

        // Cart open/close
        const cartBtn = byId('cartBtn'); if (cartBtn) cartBtn.addEventListener('click', openCart);
        const closeCartBtns = document.querySelectorAll('#cart-overlay .close-btn'); closeCartBtns.forEach(b=>b.addEventListener('click', closeCart));

        // Re-render when language changes elsewhere (main.js dispatches 'languageChanged')
        window.addEventListener('languageChanged', (e) => {
            try {
                renderCategories();
                // If we're viewing the pools Intex category, rebuild the grouped view
                if (State.currentCategory === 'baseine_intex') {
                    viewProducts('baseine_intex');
                } else {
                    renderProductsPage();
                }
            } catch (err) { /* ignore */ }
        });

        console.log('Produse script initialized');
    }

    // Expose renderCartItems so other scripts may call it
    window.renderCartItems = renderCartItems;
    window.performSearch = performSearch;
    window.openCart = openCart;
    window.closeCart = closeCart;
    window.openSearch = openSearch;
    window.closeSearch = closeSearch;

    document.addEventListener('DOMContentLoaded', init);
})();