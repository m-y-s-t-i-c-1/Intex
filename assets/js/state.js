// state.js — application state and DOM cache

const appState = {
    currentPage: 1,
    currentFilteredProducts: [],
    currentCategory: null,
    currentSubcategory: null,
    cart: [],
    navStack: [],
    searchTimeout: null,
    domInitialized: false
};

const domElements = {
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
};
