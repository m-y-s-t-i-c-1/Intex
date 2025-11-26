// cart.js — cart persistence and actions

function loadCart() {
    try {
        appState.cart = JSON.parse(localStorage.getItem('intex_cart')) || [];
    } catch (err) {
        console.error('Error loading cart:', err);
        appState.cart = [];
    }
}

function saveCart() {
    localStorage.setItem('intex_cart', JSON.stringify(appState.cart));
}

window.addToCart = function(productId) {
    const existing = appState.cart.find(i => i.id === productId);
    if (existing) existing.qty++;
    else appState.cart.push({ id: productId, qty: 1 });
    saveCart();
    renderCart();
    window.openCart();
};

window.removeFromCart = function(productId) {
    appState.cart = appState.cart.filter(i => i.id !== productId);
    saveCart();
    renderCart();
};

window.changeQty = function(productId, delta) {
    const item = appState.cart.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) window.removeFromCart(productId);
        else {
            saveCart();
            renderCart();
        }
    }
};

window.openCart = function() {
    if (domElements.cartOverlay) domElements.cartOverlay.style.display = 'flex';
};

window.closeCart = function() {
    if (domElements.cartOverlay) domElements.cartOverlay.style.display = 'none';
};
