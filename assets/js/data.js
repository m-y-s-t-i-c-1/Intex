// ==========================================
// 1. DATA STRUCTURES
// ==========================================

// Categories configuration
const CATEGORIES_DATA = [
    { id: 'boats', icon: 'fas fa-ship', i18n_title: 'cat_boats', i18n_desc: 'cat_desc_boats', image: '../assets/img/cat-boat.jpg' },
    { id: 'joaca', icon: 'fas fa-gamepad', i18n_title: 'cat_playgrounds', i18n_desc: 'cat_desc_playgrounds', image: '../assets/img/cat-playground.jpg' },
    { id: 'transport', icon: 'fas fa-car', i18n_title: 'cat_transport', i18n_desc: 'cat_desc_transport', image: '../assets/img/cat-transport.jpg' },
    { id: 'pools', icon: 'fas fa-water', i18n_title: 'cat_pools', i18n_desc: 'cat_desc_pools', image: '../assets/img/cat-frame-pool.jpg' },
    { id: 'accessories', icon: 'fas fa-filter', i18n_title: 'cat_accessories', i18n_desc: 'cat_desc_accessories', image: '../assets/img/cat-filter-pump.jpg' },
    { id: 'baseine INTEX', icon: 'fas fa-swimming-pool', i18n_title: 'cat_intex_pools', i18n_desc: 'cat_desc_intex_pools', image: '../assets/img/cat-intex-pool.jpg' },
    { id: 'copii-pools', icon: 'fas fa-child', i18n_title: 'cat_kids_pools', i18n_desc: 'cat_desc_kids_pools', image: '../assets/img/cat-kids-pool.jpg' },
    { id: 'swim-accessories', icon: 'fas fa-swimmer', i18n_title: 'cat_swim_acc', i18n_desc: 'cat_desc_swim_acc', image: '../assets/img/cat-swim-acc.jpg' },
    { id: 'inflatable-mattresses', icon: 'fas fa-bed', i18n_title: 'cat_infl_mattress', i18n_desc: 'cat_desc_infl_mattress', image: '../assets/img/cat-inflatable-mattress.jpg' },
    { id: 'pumps', icon: 'fas fa-wind', i18n_title: 'cat_pumps', i18n_desc: 'cat_desc_pumps', image: '../assets/img/cat-pumps.jpg' },
];

// Subcategories configuration
const SUBCATEGORIES_DATA = {
    pools: [
        { id: "care_water", title: "Средства по уходу за водой" },
        { id: "intex_parts", title: "Запчасти Интех" },
        { id: "frame_pools", title: "Каркасные бассейны" },
        { id: "easy_set", title: "Надувные бассейны EASY SET" },
        { id: "filters", title: "Фильтры для бассейнов" }
    ]
};

// Pools products data
const POOLS_PRODUCTS = {
    pools: [
        // Средства по уходу за водой
        { sub: "care_water", title: "PH минус гранулированный 5kg", price: 299 },
        { sub: "care_water", title: "Альба супер K 1 л", price: 165 },
        { sub: "care_water", title: "Всё-в-одном мультитаблетки 20 г/1кг", price: 225 },
        { sub: "care_water", title: "Всё-в-одном мультитаблетки 200г/1кг", price: 225 },
        { sub: "care_water", title: "Кемохлор Т-быстрорастворимые таблетки 20 г/1кг", price: 225 },
        { sub: "care_water", title: "Песок для фильтра Planet Pool Quarzsand 25Kg", price: 359 },
        { sub: "care_water", title: "Тестер таблеточный 2 в 1 (pH, Cl)", price: 250 },

        // Запчасти Интех
        { sub: "intex_parts", title: "10090 Intex Чаша для каркасного бассейна Prism Frame 457х122см", price: 6500 },
        { sub: "intex_parts", title: "10127 Intex Резиновая заглушка для бассейнов Intex", price: 20 },
        { sub: "intex_parts", title: "10201 Intex Переходник для сливного клапана бассейна", price: 50 },
        { sub: "intex_parts", title: "10256 Intex Гайка для сетчатого соединителя 38 мм", price: 40 },
        { sub: "intex_parts", title: "10262 Intex Уплотнительное кольцо", price: 50 },
        { sub: "intex_parts", title: "10383 Intex Соединительная стойка", price: 135 },
        { sub: "intex_parts", title: "10919 Intex Горизонтальная балка (A) для Ultra Frame 549х274х132см", price: 250 },
        { sub: "intex_parts", title: "10922 Intex Горизонтальная балка (B) Ultra Frame", price: 250 },
        { sub: "intex_parts", title: "10925 Intex Горизонтальная балка (C)", price: 250 },
        { sub: "intex_parts", title: "10928 Intex Горизонтальная балка «D»", price: 250 },
        { sub: "intex_parts", title: "10932 Intex Горизонтальная балка (F)", price: 250 },
        { sub: "intex_parts", title: "10934 Intex Угловое соединение", price: 200 },
        { sub: "intex_parts", title: "10937 Intex Опорная U-балка", price: 900 },
        { sub: "intex_parts", title: "10938 INTEX", price: 115 },
        { sub: "intex_parts", title: "10939 Intex Чаша для каркасного бассейна 549x274x132", price: 9999 },
        { sub: "intex_parts", title: "11070 Intex форсунка вход D-32", price: 99 },
        { sub: "intex_parts", title: "11157 Intex Вставка пластиковая для балок", price: 70 },
        { sub: "intex_parts", title: "11228 Intex Уплотнительное кольцо", price: 50 },
        { sub: "intex_parts", title: "11374 INTEX Титановый электрод 26666", price: 2300 },
        { sub: "intex_parts", title: "11412 INTEX L-образное уплотнительное кольцо", price: 50 },
        { sub: "intex_parts", title: "12365 Intex форсунка выход D-32", price: 99 },
        { sub: "intex_parts", title: "12436 Intex Чаша Ultra Frame 549х132см", price: 9999 },
        { sub: "intex_parts", title: "12465 Intex Насадка опоры Prism Frame", price: 50 },
        { sub: "intex_parts", title: "12802 Intex T-образный соединитель Prism Frame", price: 150 },
        { sub: "intex_parts", title: "12808 Intex Горизонтальная балка", price: 150 },
        { sub: "intex_parts", title: "12818 Intex Вертикальная балка", price: 150 },
        { sub: "intex_parts", title: "12928 INTEX Щетки для робота пылесоса 28005", price: 250 },
        { sub: "intex_parts", title: "26670 Хлорогенератор Krystal Clear Saltwater System Intex", price: 4599 },
        { sub: "intex_parts", title: "26726-carcas INTEX", price: 1500 },
        { sub: "intex_parts", title: "29059 Соединительный шланг 32мм", price: 80 },
        { sub: "intex_parts", title: "29061 Комплект переходников «В»", price: 99 },
        { sub: "intex_parts", title: "Intex 10095 Чаша Metal Frame 305х76см", price: 1700 },
        { sub: "intex_parts", title: "Intex 10096 Чаша Metal Frame 366х76см", price: 1999 },
        { sub: "intex_parts", title: "Intex 10318/12129 Чаша Easy Set 305×76 см", price: 900 },
        { sub: "intex_parts", title: "Intex 11588 Чаша 183×51см Easy Set", price: 399 },
        { sub: "intex_parts", title: "Intex 12135A Чаша 400х200х100см", price: 6500 },
        { sub: "intex_parts", title: "Intex 12228 Чаша 488х244х107см", price: 8000 },
        { sub: "intex_parts", title: "INTEX 12354 форсунка D-38", price: 200 },
        { sub: "intex_parts", title: "Intex 12533 Чаша Prism Frame 366х99см", price: 3900 },

        // Надувные бассейны EASY SET
        { sub: "easy_set", title: "28101 БАССЕЙН EASY SET 183Х51СМ, 886Л", price: 500 },
        { sub: "easy_set", title: "28106 Бассейн Easy Set 244х61см, 1942л, от 6 лет", price: 659 },
        { sub: "easy_set", title: "28120 Бассейн Easy Set, 305х76см, 3853л", price: 1049 },
        { sub: "easy_set", title: "59631 РЕМОНТНЫЙ КОМПЛЕКТ", price: 20 },

        // Фильтры для бассейнов
        { sub: "filters", title: "26604 КАРТРИДЖНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 2006Л/Ч, КАРТРИДЖ «А»", price: 875 },
        { sub: "filters", title: "26636 КАРТРИДЖНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 5678Л/Ч, С ТАЙМЕРОМ, КАРТРИДЖ «А»", price: 1800, oldPrice: 1999 },
        { sub: "filters", title: "26638 КАРТРИДЖНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR ДЛЯ БАССЕЙНОВ НЕ БОЛЕЕ 457 СМ, 3785Л/Ч, КАРТРИДЖ «А»", price: 1149 },
        { sub: "filters", title: "26642 Песочный фильтрующий насос 3500 литров в час", price: 2300, oldPrice: 2499 },
        { sub: "filters", title: "26644 (SX1500) ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR 5700л/ч", price: 3500, oldPrice: 4499 },
        { sub: "filters", title: "26646 ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 7,9М3/Ч", price: 4700, oldPrice: 4900 },
        { sub: "filters", title: "26648 ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 10,5М3/Ч", price: 5299, oldPrice: 5699 },
        { sub: "filters", title: "26652 ПЕСОЧНЫЙ ФИЛЬТР-НАСОС KRYSTAL CLEAR, 12,0М3/Ч", price: 5799 },
        { sub: "filters", title: "26662 ХЛОРГЕНЕРАТОР (СИСТЕМА МОРСКОЙ ВОДЫ)", price: 1399 },
        { sub: "filters", title: "26664 ХЛОРГЕНЕРАТОР (СИСТЕМА МОРСКОЙ ВОДЫ)", price: 2099 },
        { sub: "filters", title: "26666 ХЛОРГЕНЕРАТОР KRYSTAL CLEAR С ГЕНЕРАТОРОМ ОЗОНА", price: 5499, oldPrice: 7999 },
        { sub: "filters", title: "26668 ХЛОРГЕНЕРАТОР (СИСТЕМА МОРСКОЙ ВОДЫ)", price: 3499 },
        { sub: "filters", title: "26670 Хлорогенератор Krystal Clear Saltwater System Intex", price: 4599 },
        { sub: "filters", title: "29002 Картридж «А» (блок из 2 шт) для фильтр-насосов 28604, 28638, 28636", price: 200 },
        { sub: "filters", title: "INTEX 29045 Fiber Ball Наполнитель для песчаных фильтров", price: 199 },
        { sub: "filters", title: "Песок для фильтра Planet Pool Quarzsand 25Kg", price: 359 },
        
        // Каркасные бассейны
        { sub: "frame_pools", title: "26326 Каркасный бассейн Ultra Frame 488х122см", price: 13500, oldPrice: 14599 },
        { sub: "frame_pools", title: "26330 КАРКАСНЫЙ БАССЕЙН ULTRA FRAME 549Х132СМ", price: 15000, oldPrice: 18999 },
        { sub: "frame_pools", title: "26340 Каркасный бассейн Ultra XTR Frame 732х132см", price: 18399, oldPrice: 22999 },
        { sub: "frame_pools", title: "26356 КАРКАСНЫЙ БАССЕЙН INTEX ULTRA XTR PREMIUM POOL LINE 549Х274Х132СМ", price: 16000, oldPrice: 19999 },
        { sub: "frame_pools", title: "26364 КАРКАСНЫЙ БАССЕЙН INTEX ULTRA XTR PREMIUM POOL LINE 732X366X132СМ", price: 20000, oldPrice: 24999 },
        { sub: "frame_pools", title: "26374 КАРКАСНЫЙ БАССЕЙН INTEX ULTRA XTR PREMIUM POOL LINE 975Х488Х132СМ", price: 28000, oldPrice: 34999 },
        { sub: "frame_pools", title: "26700 КАРКАСНЫЙ БАССЕЙН INTEX 305X76", price: 1800, oldPrice: 2099 },
        { sub: "frame_pools", title: "26702 Intex Бассейн каркасный, фильтр-насос, 305х76см", price: 2000, oldPrice: 2500 },
        { sub: "frame_pools", title: "26710 Каркасный бассейн Intex Prism Frame 366×76 см", price: 1999, oldPrice: 2499 },
        { sub: "frame_pools", title: "26712 Каркасный бассейн Prism Frame 366×76см, 6503л, фил.-насос 2006л/ч", price: 2500, oldPrice: 3899 },
        { sub: "frame_pools", title: "26720 КАРКАСНЫЙ БАССЕЙН PRISM FRAME 427Х107СМ", price: 5999, oldPrice: 7499 },
        { sub: "frame_pools", title: "26726NP КАРКАСНЫЙ БАССЕЙН КРУГЛЫЙ INTEX PRISM FRAME POOL 4,57Х1,22", price: 7400, oldPrice: 9199 },
        { sub: "frame_pools", title: "26742 Каркасный бассейн Intex GreyWood Prism Frame 457×122 см", price: 7500, oldPrice: 9299 },
        { sub: "frame_pools", title: "26744 Каркасный бассейн Intex GreyWood Premium, 24311л, 5,49Х1,22", price: 10499, oldPrice: 13499 },
        { sub: "frame_pools", title: "26756 КАРКАСНЫЙ БАССЕЙН PRISM FRAME 610Х132СМ", price: 12000, oldPrice: 14999 },
        { sub: "frame_pools", title: "26784 Каркасный бассейн Intex Prism Frame 300х175х80 см + фильтр-насос 2006 л/ч, лестница", price: 6499 },
        { sub: "frame_pools", title: "26788 КАРКАСНЫЙ БАССЕЙН PRISM FRAME RECTANGULAR 400Х200Х100 СМ", price: 7200, oldPrice: 8999 },
        { sub: "frame_pools", title: "26790 Каркасный бассейн Prism Frame 400х200х122см", price: 8900, oldPrice: 11199 },
        { sub: "frame_pools", title: "26792 КАРКАСНЫЙ БАССЕЙН PRISM FRAME RECTANGULAR 488Х244Х107СМ", price: 8500, oldPrice: 10999 },
        { sub: "frame_pools", title: "26796 КАРКАСНЫЙ БАССЕЙН PRISM FRAME OVAL 503Х274X122СМ", price: 13000, oldPrice: 14999 },
        { sub: "frame_pools", title: "26798 КАРКАСНЫЙ БАССЕЙН PRISM FRAME OVAL 610Х305X122СМ", price: 13200, oldPrice: 16499 },
        { sub: "frame_pools", title: "28200 Бассейн каркасный Intex Metal Frame Pool, 305х76см", price: 2000, oldPrice: 2500 },
        { sub: "frame_pools", title: "28205 Каркасный бассейн Metal Frame 244х51см, 1828л", price: 1299, oldPrice: 1499 },
        { sub: "frame_pools", title: "28210 КАРКАСНЫЙ БАССЕЙН METAL FRAME 366Х76СМ", price: 2000, oldPrice: 2500 },
        { sub: "frame_pools", title: "28212 КАРКАСНЫЙ БАССЕЙН METAL FRAME 366Х76см.С ФИЛЬТРОМ 2000л/ч", price: 2500, oldPrice: 3799 },
        { sub: "frame_pools", title: "28242 КАРКАСНЫЙ БАССЕЙН METAL FRAME 457Х122СМ", price: 7000, oldPrice: 8999 },
        { sub: "frame_pools", title: "28270 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 220Х150Х60СМ", price: 1400, oldPrice: 1700 },
        { sub: "frame_pools", title: "28271 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 260Х160Х65СМ", price: 1550, oldPrice: 1899 },
        { sub: "frame_pools", title: "28272 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 300Х200Х75СМ", price: 2000, oldPrice: 2200 },
        { sub: "frame_pools", title: "28273 КАРКАСНЫЙ БАССЕЙН RECTANGULAR 450Х220Х84СМ", price: 3000, oldPrice: 3699 },
        { sub: "frame_pools", title: "28274 Прямоугольный каркасный бассейн 450х220х84см", price: 3700, oldPrice: 4599 },
        { sub: "frame_pools", title: "59631 РЕМОНТНЫЙ КОМПЛЕКТ", price: 20 },
        { sub: "frame_pools", title: "INTEX 26368 Каркасный бассейн Ultra XTR Frame 732х366х132см", price: 24000, oldPrice: 29999 },
        { sub: "frame_pools", title: "INTEX 26378 Каркасный бассейн Ultra XTR Frame 975х488х132см", price: 32000, oldPrice: 39999 },
        { sub: "frame_pools", title: "INTEX 26700-3 New, каркасный бассейн 305 x 76 см (в комплекте с тентом 28030)", price: 2150, oldPrice: 2349 },
        { sub: "frame_pools", title: "INTEX 26716 Каркасный бассейн Prism Frame 366х99см", price: 4200, oldPrice: 5299 },
        { sub: "frame_pools", title: "INTEX 26716-1 Каркасный бассейн 366х99см С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 6999 },
        { sub: "frame_pools", title: "INTEX 26717 Каркасный бассейн Prism Frame 366х99см", price: 3900 },
        { sub: "frame_pools", title: "INTEX 26726-1 КАРКАСНЫЙ БАССЕЙН 4,57Х1,22 С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 10550 },
        { sub: "frame_pools", title: "INTEX 26742-1 Каркасный бассейн 457×122 см.С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 10650 },
        { sub: "frame_pools", title: "INTEX 26756-1 КАРКАСНЫЙ БАССЕЙН 610Х132см.С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 17500 },
        { sub: "frame_pools", title: "Intex 26780 Каркасный бассейн Chevron Prism Frame 400х200100см, фильтр-нас. 2006л\\ч, лестница", price: 7600, oldPrice: 9499 },
        { sub: "frame_pools", title: "INTEX 26788-3 New, каркасный бассейн 400 x 200 x 100 см (в комплекте с тентом 28037)", price: 9350 },
        { sub: "frame_pools", title: "INTEX 26790-1 Каркасный бассейн 400х200х122см.С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 12850 },
        { sub: "frame_pools", title: "INTEX 26790-3 New, каркасный бассейн 400 x 200 x 122 см (в комплекте с тентом 28037)", price: 11250 },
        { sub: "frame_pools", title: "INTEX 26792-1 КАРКАСНЫЙ БАССЕЙН 488Х244Х107см.С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 12399 },
        { sub: "frame_pools", title: "INTEX 26796-1 КАРКАСНЫЙ БАССЕЙН 503Х274X122см.С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 16500 },
        { sub: "frame_pools", title: "INTEX 26798-1 КАРКАСНЫЙ БАССЕЙН 610Х305X122см.С ПЕСОЧНЫМ ФИЛЬТРОМ", price: 18999 },
        { sub: "frame_pools", title: "INTEX 28202 Каркасный бассейн 305х76см, 4485л с фильтром", price: 2000, oldPrice: 2500 },
        { sub: "frame_pools", title: "Intex 28209NP Каркасный бассейн 183 х 38 см Canopy Metal Frame Pool", price: 1999 },
        { sub: "frame_pools", title: "INTEX 28266 Каркасный бассейн Pink Metal Frame 220х150х60см, 1662л", price: 1600, oldPrice: 1999 },
        { sub: "frame_pools", title: "INTEX 28272-1 КАРКАСНЫЙ БАССЕЙН 300Х200Х75см.С ФИЛЬТРОМ 2000л/ч", price: 3000 },
        { sub: "frame_pools", title: "INTEX 28272-3 New, каркасный бассейн 300 x 200 x 75 см (в комплекте с тентом 28038)", price: 2475 },
        { sub: "frame_pools", title: "INTEX 28273-3 New, каркасный бассейн 450 x 220 x 84 см (в комплекте с тентом 28039)", price: 4049 },
        { sub: "frame_pools", title: "INTEX 28274-3 New, каркасный бассейн 450 x 220 x 84 см с насос-фильтром (в комплекте с тентом 28039)", price: 4949 },
        { sub: "frame_pools", title: "INTEX 28290 Каркасный бассейн Pink Metal Frame 244х76см, 2843л", price: 1400, oldPrice: 1699 },
        { sub: "frame_pools", title: "Полнолицевая панорамная маска для плавания.XS", price: 450 }
    ]
};

// General products data
const PRODUCTS_DATA = [
    // Categoria de bărci
    { id: 'b1', category: 'boats', subcategory: 'frame_pools', title: { ro: 'SET BARCĂ GONFLABILĂ EXPLORER 200', ru: 'НАДУВНАЯ ЛОДКА EXPLORER 200 SET', en: 'INFLATABLE BOAT EXPLORER 200 SET' }, price: 399, oldPrice: 520, image: '../../assets/img/Categoria barci 1.jpg' },
    { id: 'b2', category: 'boats', subcategory: 'frame_pools', title: { ro: 'SET BARCĂ GONFLABILĂ EXPLORER 300', ru: 'НАДУВНАЯ ЛОДКА EXPLORER 300 SET', en: 'INFLATABLE BOAT EXPLORER 300 SET' }, price: 479, oldPrice: 659, image: '../../assets/img/Categoria barci 2.jpg' },
    { id: 'b3', category: 'boats', subcategory: 'care_water', title: { ro: 'Vâsle din plastic 122 cm, set de 2', ru: 'ВЁСЛА ПЛАСТИКОВЫЕ 122СМ, КОМПЛЕКТ 2ШТ', en: 'Plastic oars 122 cm, set of 2' }, price: 179, oldPrice: null, image: '../../assets/img/Categoria barci 3.jpeg' },
    { id: 'b4', category: 'boats', subcategory: 'pool_accessories', title: { ro: 'Kit de reparații', ru: 'РЕМОНТНЫЙ КОМПЛЕКТ', en: 'Repair Kit' }, price: 20, oldPrice: null, image: '../../assets/img/Categoria barci 12.jpg' },
    { id: 'b5', category: 'boats', subcategory: 'easy_pools', title: { ro: 'Barcă Gonflabilă Excursion 4', ru: 'НАДУВНАЯ ЛОДКА EXCURSION 4', en: 'Inflatable Boat Excursion 4' }, price: 2499, oldPrice: 3599, image: '../../assets/img/Categoria barci 4.jpg' },
    { id: 'b6', category: 'boats', subcategory: 'pool_accessories', title: { ro: 'Set Barcă Gonflabilă Seahawk 2', ru: 'НАДУВНАЯ ЛОДКА SEAHAWK 2 SET', en: 'Inflatable Boat Seahawk 2 Set' }, price: 999, oldPrice: 1499, image: '../../assets/img/Categoria barci 5.jpg' },
    { id: 'b7', category: 'boats', subcategory: 'intex_parts', title: { ro: 'Set Barcă SeaHawk 400', ru: 'Лодка SeaHawk 400-Set', en: 'SeaHawk 400 Boat Set' }, price: 2299, oldPrice: 3299, image: '../../assets/img/Categoria barci 6.jpg' },
    { id: 'b8', category: 'boats', subcategory: 'intex_parts', title: { ro: 'Barcă Gonflabilă Challenger 2', ru: 'Надувная лодка «Challenger 2»', en: 'Inflatable Boat Challenger 2' }, price: 879, oldPrice: 1199, image: '../../assets/img/Categoria barci 7.png' },
    { id: 'b9', category: 'boats', subcategory: 'frame_pools', title: { ro: 'Set Barcă Gonflabilă Challenger 3', ru: 'НАДУВНАЯ ЛОДКА CHALLENGER 3 SET', en: 'Inflatable Boat Challenger 3 Set' }, price: 1439, oldPrice: 1999, image: '../../assets/img/Categoria barci 8.jpg' },
    { id: 'b10', category: 'boats', subcategory: 'frame_pools', title: { ro: 'Set Barcă Gonflabilă Seahawk 3', ru: 'НАДУВНАЯ ЛОДКА SEAHAWK 3 SET', en: 'Inflatable Boat Seahawk 3 Set' }, price: 1759, oldPrice: 2499, image: '../../assets/img/Categoria barci 9.jpg' },
    { id: 'b11', category: 'boats', subcategory: 'intex_parts', title: { ro: 'Vâsle din aluminiu 137 cm, set de 2', ru: 'ВЁСЛА АЛЮМИНИЕВЫЕ 137СМ, КОМПЛЕКТ 2ШТ', en: 'Aluminum oars 137 cm, set of 2' }, price: 379, oldPrice: null, image: '../../assets/img/Categoria barci 10.jpg' },
    { id: 'b12', category: 'boats', subcategory: 'pool_accessories', title: { ro: 'Placă Gonflabilă SUP Intex', ru: 'Intex Надувная доска SUP', en: 'Intex Inflatable SUP Board' }, price: 5299, oldPrice: 6999, image: '../../assets/img/Categoria barci 11.jpg' },

    // categoria de terenuri de joacă
    { id: 'j1', category: 'joaca', title: { ro: 'Tobogan Intex 44107 (84x251x147 cm)', ru: 'Детская горка Intex 44107 (84x251x147 см)', en: 'Intex Slide 44107 (84x251x147 cm)' }, price: 2399, oldPrice: null, image: '../../assets/img/Categoria terenuri 1.jpg' },
    { id: 'j2', category: 'joaca', title: { ro: 'Leagăn „Cuib" Intex 44112 (203x254x211 cm)', ru: 'Качели детские «Гнездо» Intex 44112', en: 'Intex Nest Swing 44112 (203x254x211 cm)' }, price: 2800, oldPrice: null, image: '../../assets/img/Categoria terenuri 2.png' },
    { id: 'j3', category: 'joaca', title: { ro: 'Leagăn cu scaun schimbabil Intex 44114', ru: 'Качели со сменным сиденьем Intex 44114', en: 'Intex Swing with Exchangeable Seat 44114' }, price: 2499, oldPrice: null, image: '../../assets/img/terenuri3.jpg' },
    { id: 'j4', category: 'joaca', title: { ro: 'Leagăn cu scaun și balansoar Intex 44126', ru: 'Качели с сиденьем и креслом-качалкой Intex 44126', en: 'Intex Swing with Seat and Glider 44126' }, price: 3099, oldPrice: null, image: '../../assets/img/terenuri4.jpg' },
    { id: 'j5', category: 'joaca', title: { ro: 'Leagăn simplu Intex 44001', ru: 'Качели Intex 44001', en: 'Intex Swing 44001' }, price: 550, oldPrice: null, image: '../../assets/img/terenuri5.png' },

    // Transport copii
    { id: 't1', category: 'transport', title: { ro: "Tricicletă pentru copii", ru: "Детский трехколесный велосипед", en: "Kids Tricycle" }, price: 1799, oldPrice: null, image: '../assets/img/transport1.jpg' },
    { id: 't2', category: 'transport', title: { ro: "Trotinetă copii Model 188", ru: "Детский самокат 188", en: "Kids Scooter 188" }, price: 500, oldPrice: null, image: '../assets/img/scooter-188.jpg' },
    { id: 't3', category: 'transport', title: { ro: "Skateboard copii 2206", ru: "Скейтборд 2206", en: "Kids Skateboard 2206" }, price: 399, oldPrice: null, image: '../assets/img/skate-2206.jpg' },
    { id: 't4', category: 'transport', title: { ro: "Skateboard copii 2308", ru: "Скейтборд 2308", en: "Kids Skateboard 2308" }, price: 450, oldPrice: null, image: '../assets/img/skate-2308.jpg' },
    { id: 't5', category: 'transport', title: { ro: "Skateboard copii 2406", ru: "Скейтборд 2406", en: "Kids Skateboard 2406" }, price: 399, oldPrice: null, image: '../assets/img/skate-2406.jpg' },
    { id: 't6', category: 'transport', title: { ro: "Trotinetă copii 2489", ru: "Детский самокат 2489", en: "Kids Scooter 2489" }, price: 570, oldPrice: null, image: '../assets/img/scooter-2489.jpg' },
    { id: 't7', category: 'transport', title: { ro: "Skateboard copii 28p", ru: "Скейтборд 28p", en: "Kids Skateboard 28p" }, price: 500, oldPrice: null, image: '../assets/img/skate-28p.jpg' },
    { id: 't8', category: 'transport', title: { ro: "Trotinetă copii 306", ru: "Детский самокат 306", en: "Kids Scooter 306" }, price: 450, oldPrice: null, image: '../assets/img/scooter-306.jpg' },
    { id: 't9', category: 'transport', title: { ro: "Trotinetă copii 307", ru: "Детский самокат 307", en: "Kids Scooter 307" }, price: 450, oldPrice: null, image: '../assets/img/scooter-307.jpg' },
    { id: 't10', category: 'transport', title: { ro: "Skateboard cu mâner 3108", ru: "Скейтборд с ручкой 3108", en: "Handle Skateboard 3108" }, price: 650, oldPrice: null, image: '../assets/img/skate-3108-handle.jpg' },
    { id: 't11', category: 'transport', title: { ro: "Skateboard cu roți luminoase 3108", ru: "Скейтборд со светящимися колесами 3108", en: "Glowing Wheels Skateboard 3108" }, price: 500, oldPrice: null, image: '../assets/img/skate-3108-glow.jpg' },
    { id: 't12', category: 'transport', title: { ro: "Skateboard copii 3108GD", ru: "Скейтборд 3108GD", en: "Kids Skateboard 3108GD" }, price: 650, oldPrice: null, image: '../assets/img/skate-3108gd.jpg' },
    { id: 't13', category: 'transport', title: { ro: "Skateboard copii 3108K", ru: "Скейтборд 3108K", en: "Kids Skateboard 3108K" }, price: 650, oldPrice: null, image: '../assets/img/skate-3108k.jpg' },
    { id: 't14', category: 'transport', title: { ro: "Trotinetă copii 518", ru: "Детский самокат 518", en: "Kids Scooter 518" }, price: 600, oldPrice: null, image: '../assets/img/scooter-518.jpg' },
    { id: 't15', category: 'transport', title: { ro: "Trotinetă copii 601", ru: "Детский самокат 601", en: "Kids Scooter 601" }, price: 530, oldPrice: null, image: '../assets/img/scooter-601.jpg' },
    { id: 't16', category: 'transport', title: { ro: "Trotinetă copii 618", ru: "Детский самокат 618", en: "Kids Scooter 618" }, price: 550, oldPrice: null, image: '../assets/img/scooter-618.jpg' },
    { id: 't17', category: 'transport', title: { ro: "Trotinetă copii 619", ru: "Детский самокат 619", en: "Kids Scooter 619" }, price: 599, oldPrice: null, image: '../assets/img/scooter-619.jpg' },
    { id: 't18', category: 'transport', title: { ro: "Trotinetă copii 620", ru: "Детский самокат 620", en: "Kids Scooter 620" }, price: 699, oldPrice: null, image: '../assets/img/scooter-620.jpg' },
    { id: 't19', category: 'transport', title: { ro: "Trotinetă copii 628-2", ru: "Детский самокат 628-2", en: "Kids Scooter 628-2" }, price: 799, oldPrice: null, image: '../assets/img/scooter-628-2.jpg' },
    { id: 't20', category: 'transport', title: { ro: "Trotinetă Model 6616", ru: "Самокат 6616", en: "Scooter 6616" }, price: 450, oldPrice: null, image: '../assets/img/scooter-6616.jpg' },
    { id: 't21', category: 'transport', title: { ro: "Trotinetă copii 801", ru: "Детский самокат 801", en: "Kids Scooter 801" }, price: 550, oldPrice: null, image: '../assets/img/scooter-801.jpg' },
    { id: 't22', category: 'transport', title: { ro: "Skateboard copii 808", ru: "Скейтборд 808", en: "Kids Skateboard 808" }, price: 599, oldPrice: null, image: '../assets/img/skate-808.jpg' },
    
    // ROLE (Rollerblades)
    { id: 'r1', category: 'transport', title: { ro: "Role Negre L (39-42) - 9087", ru: "Ролики Blak-L (39-42) 9087", en: "Black Rollerblades L (39-42)" }, price: 650, oldPrice: null, image: '../assets/img/role-9087-black.jpg' },
    { id: 'r2', category: 'transport', title: { ro: "Role Albastre M (35-38) - 9087", ru: "Ролики Blue-M (35-38) 9087", en: "Blue Rollerblades M (35-38)" }, price: 850, oldPrice: null, image: '../assets/img/role-9087-blue.jpg' },
    { id: 'r3', category: 'transport', title: { ro: "Role Albastre S (31-34) - 9087", ru: "Ролики Blue-S (31-34) 9087", en: "Blue Rollerblades S (31-34)" }, price: 850, oldPrice: null, image: '../assets/img/role-9087-blue.jpg' },
    { id: 'r4', category: 'transport', title: { ro: "Role Roz M (35-38) - 9087", ru: "Ролики PINK-M (35-38) 9087", en: "Pink Rollerblades M (35-38)" }, price: 850, oldPrice: null, image: '../assets/img/role-9087-pink.jpg' },
    { id: 'r5', category: 'transport', title: { ro: "Role Roz S (31-34) - 9087", ru: "Ролики PINK-S (31-34) 9087", en: "Pink Rollerblades S (31-34)" }, price: 850, oldPrice: null, image: '../assets/img/role-9087-pink.jpg' },
    { id: 'r6', category: 'transport', title: { ro: "Role Roz S (31-34) - 963", ru: "Ролики PINK-S (31-34) 963", en: "Pink Rollerblades S (31-34) 963" }, price: 850, oldPrice: null, image: '../assets/img/role-963-pink.jpg' },
    { id: 'r7', category: 'transport', title: { ro: "Role Roz M (35-38) - 9807", ru: "Ролики PINK-M (35-38) 9807", en: "Pink Rollerblades M (35-38) 9807" }, price: 850, oldPrice: null, image: '../assets/img/role-9807-pink.jpg' },
    { id: 'r8', category: 'transport', title: { ro: "Role Roz S (31-34) - 9807", ru: "Ролики PINK-S (31-34) 9807", en: "Pink Rollerblades S (31-34) 9807" }, price: 850, oldPrice: null, image: '../assets/img/role-9807-pink.jpg' },

    // ALTE TROTINETE
    { id: 't23', category: 'transport', title: { ro: "Trotinetă copii 918-4", ru: "Детский самокат 918-4", en: "Kids Scooter 918-4" }, price: 1300, oldPrice: null, image: '../assets/img/scooter-918-4.jpg' },
    { id: 't24', category: 'transport', title: { ro: "Trotinetă copii 999", ru: "Детский самокат 999", en: "Kids Scooter 999" }, price: 500, oldPrice: null, image: '../assets/img/scooter-999.jpg' },
    { id: 't25', category: 'transport', title: { ro: "Trotinetă copii A81", ru: "Детский самокат A81", en: "Kids Scooter A81" }, price: 599, oldPrice: null, image: '../assets/img/scooter-a81.jpg' },
    { id: 't26', category: 'transport', title: { ro: "Trotinetă KREISS A7", ru: "Самокат KREISS A7", en: "Scooter KREISS A7" }, price: 999, oldPrice: 1199, image: '../assets/img/scooter-kreiss-a7.jpg' },
    { id: 't27', category: 'transport', title: { ro: "Trotinetă copii M1", ru: "Детский самокат M1", en: "Kids Scooter M1" }, price: 550, oldPrice: null, image: '../assets/img/scooter-m1.jpg' },
    { id: 't28', category: 'transport', title: { ro: "Trotinetă copii M6", ru: "Детский самокат M6", en: "Kids Scooter M6" }, price: 570, oldPrice: null, image: '../assets/img/scooter-m6.jpg' },

    // SCOOTER SERIES 5S & Y5
    { id: 't29', category: 'transport', title: { ro: "Trotinetă SCOOTER 5S WHITE", ru: "Самокат SCOOTER 5S WHITE", en: "Scooter 5S White" }, price: 1099, oldPrice: 1299, image: '../assets/img/scooter-5s-white.jpg' },
    { id: 't30', category: 'transport', title: { ro: "Trotinetă SCOOTER Y5", ru: "Самокат SCOOTER Y5", en: "Scooter Y5" }, price: 999, oldPrice: 1199, image: '../assets/img/scooter-y5.jpg' },

    // SCOOTER SERIES 898 (Diverse Culori & Modele)
    // Model 003
    { id: 't31', category: 'transport', title: { ro: "Scooter 898-003 Negru", ru: "Scooter 898-003 BLAK", en: "Scooter 898-003 Black" }, price: 699, oldPrice: 799, image: '../assets/img/scooter-003-black.jpg' },
    { id: 't32', category: 'transport', title: { ro: "Scooter 898-003 Albastru", ru: "Scooter 898-003 BLUE", en: "Scooter 898-003 Blue" }, price: 699, oldPrice: 799, image: '../assets/img/scooter-003-blue.jpg' },
    { id: 't33', category: 'transport', title: { ro: "Scooter 898-003 Roz", ru: "Scooter 898-003 PINK", en: "Scooter 898-003 Pink" }, price: 699, oldPrice: 799, image: '../assets/img/scooter-003-pink.jpg' },
    { id: 't34', category: 'transport', title: { ro: "Scooter 898-003 Roșu", ru: "Scooter 898-003 RED", en: "Scooter 898-003 Red" }, price: 699, oldPrice: 799, image: '../assets/img/scooter-003-red.jpg' },

    // Model 003S
    { id: 't35', category: 'transport', title: { ro: "Scooter 898-003S Negru", ru: "Scooter 898-003S BLAK", en: "Scooter 898-003S Black" }, price: 850, oldPrice: 999, image: '../assets/img/scooter-003s-black.jpg' },
    { id: 't36', category: 'transport', title: { ro: "Scooter 898-003S Albastru", ru: "Scooter 898-003S BLUE", en: "Scooter 898-003S Blue" }, price: 850, oldPrice: 999, image: '../assets/img/scooter-003s-blue.jpg' },
    { id: 't37', category: 'transport', title: { ro: "Scooter 898-003S Roz", ru: "Scooter 898-003S PINK", en: "Scooter 898-003S Pink" }, price: 850, oldPrice: 999, image: '../assets/img/scooter-003s-pink.jpg' },
    { id: 't38', category: 'transport', title: { ro: "Scooter 898-003S Violet", ru: "Scooter 898-003S VIOLET", en: "Scooter 898-003S Violet" }, price: 850, oldPrice: 999, image: '../assets/img/scooter-003s-violet.jpg' },

    // Model 145
    { id: 't39', category: 'transport', title: { ro: "Scooter 898-145 Negru", ru: "Scooter 898-145 BLAK", en: "Scooter 898-145 Black" }, price: 949, oldPrice: 999, image: '../assets/img/scooter-145-black.jpg' },
    { id: 't40', category: 'transport', title: { ro: "Scooter 898-145S Negru", ru: "Scooter 898-145S BLAK", en: "Scooter 898-145S Black" }, price: 999, oldPrice: 1099, image: '../assets/img/scooter-145s-black.jpg' },
    { id: 't41', category: 'transport', title: { ro: "Scooter 898-145S Albastru", ru: "Scooter 898-145S BLUE", en: "Scooter 898-145S Blue" }, price: 999, oldPrice: 1099, image: '../assets/img/scooter-145s-blue.jpg' },
    { id: 't42', category: 'transport', title: { ro: "Scooter 898-145S Verde", ru: "Scooter 898-145S GREEN", en: "Scooter 898-145S Green" }, price: 999, oldPrice: 1099, image: '../assets/img/scooter-145s-green.jpg' },
    { id: 't43', category: 'transport', title: { ro: "Scooter 898-145S Roz", ru: "Scooter 898-145S PINK", en: "Scooter 898-145S Pink" }, price: 999, oldPrice: 1099, image: '../assets/img/scooter-145s-pink.jpg' },
    { id: 't44', category: 'transport', title: { ro: "Scooter 898-145S Roșu", ru: "Scooter 898-145S RED", en: "Scooter 898-145S Red" }, price: 999, oldPrice: 1099, image: '../assets/img/scooter-145s-red.jpg' },
    { id: 't45', category: 'transport', title: { ro: "Scooter 898-145S Violet", ru: "Scooter 898-145S VIOLET", en: "Scooter 898-145S Violet" }, price: 999, oldPrice: 1099, image: '../assets/img/scooter-145s-violet.jpg' },

    // Model 180S & SL
    { id: 't46', category: 'transport', title: { ro: "Scooter 898-180S Roșu", ru: "Scooter 898-180S RED", en: "Scooter 898-180S Red" }, price: 1099, oldPrice: 1199, image: '../assets/img/scooter-180s-red.jpg' },
    { id: 't47', category: 'transport', title: { ro: "Scooter 898-180S Argintiu", ru: "Scooter 898-180S SILVER", en: "Scooter 898-180S Silver" }, price: 1099, oldPrice: 1199, image: '../assets/img/scooter-180s-silver.jpg' },
    { id: 't48', category: 'transport', title: { ro: "Scooter 898-180S Violet", ru: "Scooter 898-180S VIOLET", en: "Scooter 898-180S Violet" }, price: 1099, oldPrice: 1199, image: '../assets/img/scooter-180s-violet.jpg' },
    { id: 't49', category: 'transport', title: { ro: "Scooter 898-180S Negru", ru: "Scooter 898-180S BLAK", en: "Scooter 898-180S Black" }, price: 1099, oldPrice: 1199, image: '../assets/img/scooter-180s-black.jpg' },
    { id: 't50', category: 'transport', title: { ro: "Scooter 898-180S Albastru", ru: "Scooter 898-180S BLUE", en: "Scooter 898-180S Blue" }, price: 1099, oldPrice: 1199, image: '../assets/img/scooter-180s-blue.jpg' },
    { id: 't51', category: 'transport', title: { ro: "Scooter 898-180SL Negru", ru: "Scooter 898-180SL BLAK", en: "Scooter 898-180SL Black" }, price: 1199, oldPrice: 1399, image: '../assets/img/scooter-180sl-black.jpg' },
    { id: 't52', category: 'transport', title: { ro: "Scooter 898-180SL Alb", ru: "Scooter 898-180SL WHITE", en: "Scooter 898-180SL White" }, price: 1199, oldPrice: 1399, image: '../assets/img/scooter-180sl-white.jpg' },

    // Model 5D
    { id: 't53', category: 'transport', title: { ro: "Scooter 898-5D Negru", ru: "Scooter 898-5D BLAK", en: "Scooter 898-5D Black" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-black.jpg' },
    { id: 't54', category: 'transport', title: { ro: "Scooter 898-5D Albastru", ru: "Scooter 898-5D BLUE", en: "Scooter 898-5D Blue" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-blue.jpg' },
    { id: 't55', category: 'transport', title: { ro: "Scooter 898-5D Verde", ru: "Scooter 898-5D GREEN", en: "Scooter 898-5D Green" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-green.jpg' },
    { id: 't56', category: 'transport', title: { ro: "Scooter 898-5D Roz", ru: "Scooter 898-5D PINK", en: "Scooter 898-5D Pink" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-pink.jpg' },
    { id: 't57', category: 'transport', title: { ro: "Scooter 898-5D Roșu", ru: "Scooter 898-5D RED", en: "Scooter 898-5D Red" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-red.jpg' },
    { id: 't58', category: 'transport', title: { ro: "Scooter 898-5D Violet", ru: "Scooter 898-5D VIOLET", en: "Scooter 898-5D Violet" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-violet.jpg' },
    { id: 't59', category: 'transport', title: { ro: "Scooter 898-5D Alb", ru: "Scooter 898-5D WHITE", en: "Scooter 898-5D White" }, price: 1499, oldPrice: 1599, image: '../assets/img/scooter-5d-white.jpg' },

    // Alte modele 898 & Diverse
    { id: 't60', category: 'transport', title: { ro: "Scooter 898-S01", ru: "Scooter 898-S01", en: "Scooter 898-S01" }, price: 750, oldPrice: 950, image: '../assets/img/scooter-s01.jpg' },
    { id: 't61', category: 'transport', title: { ro: "Scooter 898-S03", ru: "Scooter 898-S03", en: "Scooter 898-S03" }, price: 950, oldPrice: 1199, image: '../assets/img/scooter-s03.jpg' },
    { id: 't62', category: 'transport', title: { ro: "Scooter 898-S07", ru: "Scooter 898-S07", en: "Scooter 898-S07" }, price: 1699, oldPrice: null, image: '../assets/img/scooter-s07.jpg' },
    { id: 't63', category: 'transport', title: { ro: "Bicicletă fără pedale X005", ru: "Беговел X005", en: "Balance Bike X005" }, price: 770, oldPrice: null, image: '../assets/img/bike-x005.jpg' },
    { id: 't64', category: 'transport', title: { ro: "Trotinetă copii X016-1", ru: "Детский самокат X016-1", en: "Kids Scooter X016-1" }, price: 899, oldPrice: null, image: '../assets/img/scooter-x016-1.jpg' },
    { id: 't65', category: 'transport', title: { ro: "Trotinetă copii X016-4", ru: "Детский самокат X016-4", en: "Kids Scooter X016-4" }, price: 799, oldPrice: null, image: '../assets/img/scooter-x016-4.jpg' },
    { id: 't66', category: 'transport', title: { ro: "Trotinetă copii X2", ru: "Детский самокат X2", en: "Kids Scooter X2" }, price: 550, oldPrice: null, image: '../assets/img/scooter-x2.jpg' },
    { id: 't67', category: 'transport', title: { ro: "Trotinetă copii YS818", ru: "Детский самокат YS818", en: "Kids Scooter YS818" }, price: 450, oldPrice: null, image: '../assets/img/scooter-ys818.jpg' },
    { id: 't68', category: 'transport', title: { ro: "Longboard", ru: "Лонгборд", en: "Longboard" }, price: 980, oldPrice: null, image: '../assets/img/longboard.jpg' },

    // Copii-pools (Детские бассейны)
    { id: 'kp1', category: 'copii-pools', title: { ro: 'PISCINĂ NADAF COPII 168Х46СМ «CURCUBEU»', ru: '56441 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 168Х46СМ «РАДУГА», 617Л, ОТ 3 ЛЕТ', en: 'Kids Inflatable Pool 168x46cm «Rainbow» 617L, 3+ years' }, price: 349, oldPrice: 369, image: '../assets/img/pool-kids-rainbow.jpg' },
    { id: 'kp2', category: 'copii-pools', title: { ro: 'Piscina Copii 152х25cm «Snorkeling»', ru: '56451 Детский бассейн 152х25см «Снорклинг» 443л, от 3 лет', en: 'Kids Pool 152x25cm «Snorkeling» 443l, 3+ years' }, price: 219, oldPrice: 245, image: '../assets/img/pool-kids-snorkling.jpg' },
    { id: 'kp3', category: 'copii-pools', title: { ro: 'PISCINA COPII 183Х38СМ «SNAPSET»', ru: '56452 ДЕТСКИЙ БАССЕЙН 183Х38СМ «SNAPSET» 977Л, ОТ 3 ЛЕТ', en: 'Kids Pool 183x38cm «SNAPSET» 977l, 3+ years' }, price: 339, oldPrice: 369, image: '../assets/img/pool-kids-snapset.jpg' },
    { id: 'kp4', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 229Х229Х66СМ «FAMILIAL»', ru: '56475 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 229Х229Х66СМ «СЕМЕЙНЫЙ» 233Л, ОТ 3 ЛЕТ', en: 'Family Inflatable Pool 229x229x66cm 233l, 3+ years' }, price: 999, oldPrice: 1149, image: '../assets/img/pool-kids-family.jpg' },
    { id: 'kp5', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 262Х175Х56СМ «CADA»', ru: '56483 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 262Х175Х56СМ «ВАННА» 749Л, ОТ 6 ЛЕТ', en: 'Kids Inflatable Pool 262x175x56cm «Tub» 749l, 6+ years' }, price: 659, oldPrice: 779, image: '../assets/img/pool-kids-tub.jpg' },
    { id: 'kp6', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 191Х178Х61СМ «AKVARIUM»', ru: '56493 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 191Х178Х61СМ «АКВАРИУМ» 541Л, ОТ 6 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 191x178x61cm «Aquarium» 541l, 6+ years' }, price: 699, oldPrice: 819, image: '../assets/img/pool-kids-aquarium.jpg' },
    { id: 'kp7', category: 'copii-pools', title: { ro: 'Inel Gonflabil Intex «Micuța Stea»', ru: '56573 Надувной круг Intex «Маленькая звездочка»', en: 'Intex Inflatable Ring «Little Star»' }, price: 175, oldPrice: null, image: '../assets/img/ring-kids-star.jpg' },
    { id: 'kp8', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 85Х85Х23СМ, 57Л, ОТ 1 ДО 3 ЛЕТ', ru: '57100 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 85Х85Х23СМ, 57Л, ОТ 1 ДО 3 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 85x85x23cm 57l, 1-3 years' }, price: 199, oldPrice: 225, image: '../assets/img/pool-kids-85.jpg' },
    { id: 'kp9', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 61Х22СМ «CURCUBEU»', ru: '57107 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 61Х22СМ «РАДУГА» 34Л, ОТ 1 ДО 3 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 61x22cm «Rainbow» 34l, 1-3 years' }, price: 85, oldPrice: 95, image: '../assets/img/pool-kids-61.jpg' },
    { id: 'kp10', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 102Х89СМ «CIUPERCA MUSCARIA» CU COPERIȘ', ru: '57114 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 102Х89СМ «ГРИБ МУХОМОР» С НАВЕСОМ, 45Л, ОТ 1 ДО 3 ЛЕТ', en: 'Kids Inflatable Pool 102x89cm «Mushroom» with canopy 45l, 1-3 years' }, price: 269, oldPrice: 309, image: '../assets/img/pool-kids-mushroom.jpg' },
    { id: 'kp11', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII «FAMILIAL» INTEX, 203X152X48 CM', ru: '57180 НАДУВНОЙ ДЕТСКИЙ БАССЕЙН "СЕМЕЙНЫЙ" INTEX, 203X152X48 CM', en: 'Family Inflatable Pool INTEX, 203x152x48 cm' }, price: 500, oldPrice: null, image: '../assets/img/pool-kids-family-203.jpg' },
    { id: 'kp12', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 229Х147Х46СМ ОТ 6 ЛЕТ', ru: '57181 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 229Х147Х46СМ ОТ 6 ЛЕТ', en: 'Kids Inflatable Pool 229x147x46cm, 6+ years' }, price: 550, oldPrice: null, image: '../assets/img/pool-kids-229-147.jpg' },
    { id: 'kp13', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 166Х100Х28СМ, 102Л, ОТ 2 ANI', ru: '57403 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 166Х100Х28СМ, 102Л, ОТ 2 ЛЕТ,НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 166x100x28cm 102l, 2+ years' }, price: 299, oldPrice: 319, image: '../assets/img/pool-kids-166.jpg' },
    { id: 'kp14', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 114Х25СМ «CURCUBEU»', ru: '57412 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 114Х25СМ «РАДУГА» 136Л, ОТ 2 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 114x25cm «Rainbow» 136l, 2+ years' }, price: 189, oldPrice: 209, image: '../assets/img/pool-kids-114.jpg' },
    { id: 'kp15', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 147Х33СМ «CURCUBEU»', ru: '57422 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 147Х33СМ «РАДУГА» 299Л, ОТ 2 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 147x33cm «Rainbow» 299l, 2+ years' }, price: 249, oldPrice: 289, image: '../assets/img/pool-kids-147.jpg' },
    { id: 'kp16', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 157Х157Х122 СМ «CASA» CU COPERIȘ', ru: '57470 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 157Х157Х122 СМ «ДОМИК» С НАВЕСОМ, 280Л, ОТ 2 ЛЕТ', en: 'Kids Inflatable Pool 157x157x122cm «House» with canopy 280l, 2+ years' }, price: 599, oldPrice: 649, image: '../assets/img/pool-kids-house.jpg' },
    { id: 'kp17', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 159Х159Х50СМ «AKVARIUM»', ru: '57471 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 159Х159Х50СМ «АКВАРИУМ» 424Л, ОТ 3 ЛЕТ', en: 'Kids Inflatable Pool 159x159x50cm «Aquarium» 424l, 3+ years' }, price: 550, oldPrice: 629, image: '../assets/img/pool-kids-159-aqua.jpg' },
    { id: 'kp18', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 163Х107Х46СМ «PIRAȚI»', ru: '57482 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 163Х107Х46СМ «ПИРАТЫ» 238Л, ОТ 3 ЛЕТ', en: 'Kids Inflatable Pool 163x107x46cm «Pirates» 238l, 3+ years' }, price: 449, oldPrice: 499, image: '../assets/img/pool-kids-pirates.jpg' },
    { id: 'kp19', category: 'copii-pools', title: { ro: 'CORT PENTRU PISCINE COPII 305Х183СМ ȘI 262Х175СМ', ru: '58412 ТЕНТ ДЛЯ ДЕТСКИХ БАССЕЙНОВ 305Х183СМ И 262Х175СМ', en: 'Canopy for Kids Pools 305x183cm and 262x175cm' }, price: 219, oldPrice: null, image: '../assets/img/canopy-kids.jpg' },
    { id: 'kp20', category: 'copii-pools', title: { ro: 'Piscina Nadaf Copii «Ananas»', ru: '58414 Детский надувной бассейн «Ананас»', en: 'Kids Inflatable Pool «Pineapple»' }, price: 300, oldPrice: 439, image: '../assets/img/pool-kids-pineapple.jpg' },
    { id: 'kp21', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 147Х33СМ «CRISTAL»', ru: '58426 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 147Х33СМ «КРИСТАЛ» 288Л, ОТ 2 ЛЕТ', en: 'Kids Inflatable Pool 147x33cm «Crystal» 288l, 2+ years' }, price: 219, oldPrice: 229, image: '../assets/img/pool-kids-crystal.jpg' },
    { id: 'kp22', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 188Х46СМ, 666Л, ОТ 3 ANI', ru: '58431 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 188Х46СМ, 666Л, ОТ 3 ЛЕТ320', en: 'Kids Inflatable Pool 188x46cm 666l, 3+ years' }, price: 399, oldPrice: 429, image: '../assets/img/pool-kids-188.jpg' },
    { id: 'kp23', category: 'copii-pools', title: { ro: 'Piscina Nadaf Copii 122х122cm «Unicorn» cu coperiș', ru: '58435 Детский надувной бассейн 122х122см «Единорог» с навесом, 130л, от 2 лет', en: 'Kids Inflatable Pool 122x122cm «Unicorn» with canopy 130l, 2+ years' }, price: 699, oldPrice: 755, image: '../assets/img/pool-kids-unicorn.jpg' },
    { id: 'kp24', category: 'copii-pools', title: { ro: 'Piscina Nadaf Copii «Pisici-Unicorn» 102х102cm, 1-3 ani', ru: '58438 Детский надувной бассейн «Котенок-единорожка» 102х102см, 1-3 года', en: 'Kids Inflatable Pool «Cat-Unicorn» 102x102cm, 1-3 years' }, price: 339, oldPrice: 379, image: '../assets/img/pool-kids-cat-unicorn.jpg' },
    { id: 'kp25', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 168Х38СМ «CRISTAL»', ru: '58446 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 168Х38СМ «КРИСТАЛЛ» 481Л, ОТ 3 ЛЕТ', en: 'Kids Inflatable Pool 168x38cm «Crystal» 481l, 3+ years' }, price: 279, oldPrice: 319, image: '../assets/img/pool-kids-168-crystal.jpg' },
    { id: 'kp26', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII «PEPENE»', ru: '58448 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН «АРБУЗ» 168Х38СМ, 581Л, ОТ 2 ЛЕТ', en: 'Kids Inflatable Pool «Watermelon» 168x38cm 581l, 2+ years' }, price: 329, oldPrice: 369, image: '../assets/img/pool-kids-watermelon.jpg' },
    { id: 'kp27', category: 'copii-pools', title: { ro: 'PISCINA COPII 244Х46СМ «SNAPSET»', ru: '58472 ДЕТСКИЙ БАССЕЙН 244Х46СМ «SNAPSET» 2089Л, ОТ 3 ЛЕТ', en: 'Kids Pool 244x46cm «SNAPSET» 2089l, 3+ years' }, price: 559, oldPrice: 619, image: '../assets/img/pool-kids-244-snapset.jpg' },
    { id: 'kp28', category: 'copii-pools', title: { ro: 'Piscina Copii 122х25cm «Rățuști»', ru: '58477 Детский бассейн 122х25см «Утенок» 281л., от 3 лет', en: 'Kids Pool 122x25cm «Duck» 281l, 3+ years' }, price: 189, oldPrice: 209, image: '../assets/img/pool-kids-duck.jpg' },
    { id: 'kp29', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 152Х56СМ «AKVARIUM»', ru: '58480 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 152Х56СМ «АКВАРИУМ» 318Л, ОТ 6 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 152x56cm «Aquarium» 318l, 6+ years' }, price: 549, oldPrice: 629, image: '../assets/img/pool-kids-152-aqua.jpg' },
    { id: 'kp30', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 305Х183Х56СМ, 999Л, ОТ 6 ANI', ru: '58484 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 305Х183Х56СМ, 999Л, ОТ 6 ЛЕТ', en: 'Kids Inflatable Pool 305x183x56cm 999l, 6+ years' }, price: 949, oldPrice: 1049, image: '../assets/img/pool-kids-305-large.jpg' },
    { id: 'kp31', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 86Х25СМ «CURCUBEU»', ru: '58924 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 86Х25СМ «РАДУГА» 68Л, ОТ 1 ДО 3 ЛЕТ, НАДУВНОЕ ДНО', en: 'Kids Inflatable Pool 86x25cm «Rainbow» 68l, 1-3 years' }, price: 125, oldPrice: 139, image: '../assets/img/pool-kids-86.jpg' },
    { id: 'kp32', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 114Х25СМ «CRISTAL»', ru: '59416 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 114Х25СМ «КРИСТАЛЛ» 132Л, ОТ 2 ЛЕТ', en: 'Kids Inflatable Pool 114x25cm «Crystal» 132l, 2+ years' }, price: 139, oldPrice: 149, image: '../assets/img/pool-kids-114-crystal.jpg' },
    { id: 'kp33', category: 'copii-pools', title: { ro: 'PISCINA NADAF COPII 132Х28СМ «PEȘTI» CU MINGE ȘI INEL', ru: '59469 ДЕТСКИЙ НАДУВНОЙ БАССЕЙН 132Х28СМ «РЫБКИ» С МЯЧОМ И КРУГОМ, 204Л', en: 'Kids Inflatable Pool 132x28cm «Fish» with ball and ring 204l' }, price: 200, oldPrice: 250, image: '../assets/img/pool-kids-fish.jpg' },
    { id: 'kp34', category: 'copii-pools', title: { ro: 'KIT DE REPARAȚII', ru: '59631 РЕМОНТНЫЙ КОМПЛЕКТ', en: 'Repair Kit' }, price: 20, oldPrice: null, image: '../assets/img/repair-kit.jpg' },
    { id: 'kp35', category: 'copii-pools', title: { ro: 'Intex 57441 Piscina Nadaf Copii', ru: 'Intex 57441 Детский надувной бассейн', en: 'Intex 57441 Kids Inflatable Pool' }, price: 419, oldPrice: null, image: '../assets/img/pool-kids-57441.jpg' },
    { id: 'kp36', category: 'copii-pools', title: { ro: 'INTEX 58427 Piscina Nadaf SWEET BLOSSOM', ru: 'INTEX 58427 Надувной бассейн SWEET BLOSSOM', en: 'INTEX 58427 Inflatable Pool SWEET BLOSSOM' }, price: 149, oldPrice: null, image: '../assets/img/pool-kids-sweet-blossom.jpg' },
    { id: 'kp37', category: 'copii-pools', title: { ro: 'Intex 58432 Piscina Nadaf Zesty Lemon Pool I', ru: 'Intex 58432 Надувной бассейн Zesty Lemon Pool I', en: 'Intex 58432 Inflatable Pool Zesty Lemon Pool I' }, price: 229, oldPrice: null, image: '../assets/img/pool-kids-zesty-lemon.jpg' },
    { id: 'kp38', category: 'copii-pools', title: { ro: 'Mască de Înot Panoramică Completă L/XL', ru: 'Полнолицевая панорамная маска для плавания.L/XL', en: 'Full Face Snorkel Mask L/XL' }, price: 450, oldPrice: null, image: '../assets/img/mask-snorkel-lxl.jpg' },
    { id: 'kp39', category: 'copii-pools', title: { ro: 'Mască de Înot Panoramică Completă S/M', ru: 'Полнолицевая панорамная маска для плавания.S/M', en: 'Full Face Snorkel Mask S/M' }, price: 450, oldPrice: null, image: '../assets/img/mask-snorkel-sm.jpg' },
    { id: 'kp40', category: 'copii-pools', title: { ro: 'Mască de Înot Panoramică Completă XS', ru: 'Полнолицевая панорамная маска для плавания.XS', en: 'Full Face Snorkel Mask XS' }, price: 450, oldPrice: null, image: '../assets/img/mask-snorkel-xs.jpg' },

    // Swim-accessories (Аксессуары для плавания)
    { id: 'sa1', category: 'swim-accessories', title: { ro: 'Ochelari Înot «PLAY» 3-8 ani, 3 culori', ru: '55602 ОЧКИ ДЛЯ ПЛАВАНИЯ «PLAY» ОТ 3-8 ЛЕТ, 3 ЦВЕТА', en: 'Swimming Goggles «PLAY» 3-8 years, 3 colors' }, price: 35, oldPrice: null, image: '../assets/img/goggles-play.jpg' },
    { id: 'sa2', category: 'swim-accessories', title: { ro: 'Set Înot ADVENTURER, 8+ ani', ru: '55642 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ ADVENTURER SWIM SET, ОТ 8 ЛЕТ', en: 'ADVENTURER Swim Set, 8+ years' }, price: 189, oldPrice: null, image: '../assets/img/swim-set-adventurer.jpg' },
    { id: 'sa3', category: 'swim-accessories', title: { ro: 'Set Înot WAVE RIDER, 8+ ani', ru: '55647 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ WAVE RIDER SWIM SET, ОТ 8 ЛЕТ', en: 'WAVE RIDER Swim Set, 8+ years' }, price: 239, oldPrice: null, image: '../assets/img/swim-set-wave-rider.jpg' },
    { id: 'sa4', category: 'swim-accessories', title: { ro: 'Set Înot REEF RIDER, 14+ ani', ru: '55648 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ REEF RIDER SWIM SET, ОТ 14 ЛЕТ', en: 'REEF RIDER Swim Set, 14+ years' }, price: 229, oldPrice: 275, image: '../assets/img/swim-set-reef-rider.jpg' },
    { id: 'sa5', category: 'swim-accessories', title: { ro: 'Ochelari Înot «Sport Relay» 8+ ani, 3 culori', ru: '55684 Очки для плавания «Sport Relay» от 8 лет, 3 цвета', en: 'Swimming Goggles «Sport Relay» 8+ years, 3 colors' }, price: 75, oldPrice: null, image: '../assets/img/goggles-sport-relay.jpg' },
    { id: 'sa6', category: 'swim-accessories', title: { ro: 'Ochelari Înot «WATER SPORT», 14+ ani, 3 culori', ru: '55685 ОЧКИ ДЛЯ ПЛАВАНИЯ «WATER SPORT», 3 ЦВЕТА, ОТ 14 ЛЕТ', en: 'Swimming Goggles «WATER SPORT», 14+ years, 3 colors' }, price: 70, oldPrice: null, image: '../assets/img/goggles-water-sport.jpg' },
    { id: 'sa7', category: 'swim-accessories', title: { ro: 'Ochelari Înot «PRO RACING», 8+ ani, 3 culori', ru: '55691 ОЧКИ ДЛЯ ПЛАВАНИЯ «PRO RACING», 3 ЦВЕТА, ОТ 8 ЛЕТ', en: 'Swimming Goggles «PRO RACING», 8+ years, 3 colors' }, price: 89, oldPrice: null, image: '../assets/img/goggles-pro-racing.jpg' },
    { id: 'sa8', category: 'swim-accessories', title: { ro: 'Ochelari Înot «PRO MASTER», 14+ ani, 3 culori', ru: '55692 ОЧКИ ДЛЯ ПЛАВАНИЯ «PRO MASTER», 3 ЦВЕТА, ОТ 14 ЛЕТ', en: 'Swimming Goggles «PRO MASTER», 14+ years, 3 colors' }, price: 155, oldPrice: null, image: '../assets/img/goggles-pro-master.jpg' },
    { id: 'sa9', category: 'swim-accessories', title: { ro: 'Mască Înot SEA SCAN, 8+ ani, 2 tipuri', ru: '55916 МАСКА ДЛЯ ПЛАВАНЬЯ SEA SCAN SWIM MASKS, 2 ВИДА, ОТ 8 ЛЕТ', en: 'SEA SCAN Swim Masks, 8+ years, 2 types' }, price: 109, oldPrice: null, image: '../assets/img/mask-sea-scan.jpg' },
    { id: 'sa10', category: 'swim-accessories', title: { ro: 'Tub Înot «Easy-Flow Sr.» 8+ ani, 2 culori', ru: '55929 Трубка для плавания «Easy-Flow Sr.» от 8 лет, 2 цвета', en: 'Snorkel «Easy-Flow Sr.» 8+ years, 2 colors' }, price: 109, oldPrice: null, image: '../assets/img/snorkel-easy-flow.jpg' },
    { id: 'sa11', category: 'swim-accessories', title: { ro: 'Set Înot «SURF RIDER», 8+ ani', ru: '55949 КОМПЛЕКТ ДЛЯ ПЛАВАНИЯ «SURF RIDER SWIM» ОТ 8 ЛЕТ', en: 'SURF RIDER Swim Set, 8+ years' }, price: 229, oldPrice: 259, image: '../assets/img/swim-set-surf-rider.jpg' },
    { id: 'sa12', category: 'swim-accessories', title: { ro: 'Mască Înot REEF RIDER, 14+ ani, 2 tipuri', ru: '55977 МАСКА ДЛЯ ПЛАВАНЬЯ REEF RIDER MASKS, 2 ВИДА, ОТ 14 ЛЕТ', en: 'REEF RIDER Swim Masks, 14+ years, 2 types' }, price: 119, oldPrice: null, image: '../assets/img/mask-reef-rider.jpg' },
    { id: 'sa13', category: 'swim-accessories', title: { ro: 'Mască Înot WAVE RIDER, 8+ ani, 2 tipuri', ru: '55978 МАСКА ДЛЯ ПЛАВАНЬЯ WAVE RIDER MASKS, ДВА ВИДА, ОТ 8 ЛЕТ', en: 'WAVE RIDER Swim Masks, 8+ years, 2 types' }, price: 119, oldPrice: null, image: '../assets/img/mask-wave-rider.jpg' },
    { id: 'sa14', category: 'swim-accessories', title: { ro: 'Bonete Înot Silicon, 8+ ani, 3 culori', ru: '55991 ШАПКА ДЛЯ ПЛАВАНИЯ ИЗ СИЛИКОНА, 3 ЦВЕТА, ОТ 8 ЛЕТ', en: 'Silicon Swim Cap, 8+ years, 3 colors' }, price: 60, oldPrice: null, image: '../assets/img/cap-silicon.jpg' },
    { id: 'sa15', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 107cm «Fructe Tropicale», 9+ ani, 3 culori', ru: '56261 Надувной круг 107см «Тропические фрукты» от 9 лет, 3 цвета', en: 'Inflatable Ring 107cm «Tropical Fruits», 9+ years, 3 colors' }, price: 120, oldPrice: 149, image: '../assets/img/ring-tropical-fruits.jpg' },
    { id: 'sa16', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil «GLAZED DONUT» 114cm', ru: '56263 НАДУВНОЙ КРУГ «ПОНЧИК ГЛАЗУРЬ» 114СМ', en: 'Inflatable Ring «GLAZED DONUT» 114cm' }, price: 139, oldPrice: null, image: '../assets/img/ring-donut-glazed.jpg' },
    { id: 'sa17', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil «DONUT» 107x99cm', ru: '56265 НАДУВНОЙ КРУГ «ПОНЧИК» 107X99СМ', en: 'Inflatable Ring «DONUT» 107x99cm' }, price: 109, oldPrice: null, image: '../assets/img/ring-donut.jpg' },
    { id: 'sa18', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil Intex «Micuța Stea»', ru: '56573 Надувной круг Intex «Маленькая звездочка»', en: 'Intex Inflatable Ring «Little Star»' }, price: 175, oldPrice: null, image: '../assets/img/ring-little-star.jpg' },
    { id: 'sa19', category: 'swim-accessories', title: { ro: 'Brațare Înot «Happy Kitten»', ru: '56665 НАРУКАВНИКИ "СЧАСТЛИВЫЙ КОТЕНОК" INTEX', en: 'Swim Armbands «Happy Kitten»' }, price: 35, oldPrice: null, image: '../assets/img/armbands-happy-kitten.jpg' },
    { id: 'sa20', category: 'swim-accessories', title: { ro: 'Jucărie Gonflabilă Călărire 170х86cm «Aligator»', ru: '57551 НАДУВНАЯ ИГРУШКА-НАЕЗДНИК 170Х86СМ «НАСТОЯЩИЙ АЛЛИГАТОР» ОТ 3 ЛЕТ', en: 'Inflatable Ride-On 170x86cm «Alligator» 3+ years' }, price: 189, oldPrice: null, image: '../assets/img/floatie-alligator.jpg' },
    { id: 'sa21', category: 'swim-accessories', title: { ro: 'Plută Gonflabilă «FLAMINGO» 142х137х97cm, 3+ ani', ru: '57558 НАДУВНОЙ ПЛОТ «ФЛАМИНГО» 142Х137Х97СМ, ОТ 3 ЛЕТ', en: 'Inflatable Raft «FLAMINGO» 142x137x97cm, 3+ years' }, price: 349, oldPrice: null, image: '../assets/img/raft-flamingo.jpg' },
    { id: 'sa22', category: 'swim-accessories', title: { ro: 'Plută Gonflabilă «UNICORN» 201x140x97cm', ru: '57561 НАДУВНОЙ ПЛОТИК «ЕДИНОРОГ»201X140X97СМ', en: 'Inflatable Raft «UNICORN» 201x140x97cm' }, price: 375, oldPrice: null, image: '../assets/img/raft-unicorn.jpg' },
    { id: 'sa23', category: 'swim-accessories', title: { ro: 'Plută Gonflabilă «LLAMA» 135х94х112cm, 3+ ani', ru: '57564 НАДУВНОЙ ПЛОТИК «ЛАМА», 135Х94Х112СМ, ОТ 3 ЛЕТ', en: 'Inflatable Raft «LLAMA» 135x94x112cm, 3+ years' }, price: 349, oldPrice: null, image: '../assets/img/raft-llama.jpg' },
    { id: 'sa24', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 97cm «Transparent» cu Mânere, 9+ ani, 3 tipuri', ru: '58263 НАДУВНОЙ КРУГ 97СМ «ПРОЗРАЧНЫЙ» С РУЧКАМИ, 3 ВИДА, ОТ 9 ЛЕТ', en: 'Inflatable Ring 97cm «Transparent» with Handles, 9+ years, 3 types' }, price: 99, oldPrice: 125, image: '../assets/img/ring-transparent-97.jpg' },
    { id: 'sa25', category: 'swim-accessories', title: { ro: 'Jucărie Gonflabilă Călărire 168х86cm «Crocodil»', ru: '58546 НАДУВНАЯ ИГРУШКА-НАЕЗДНИК 168Х86СМ «КРОКОДИЛ» ОТ 3 ЛЕТ', en: 'Inflatable Ride-On 168x86cm «Crocodile» 3+ years' }, price: 165, oldPrice: 185, image: '../assets/img/floatie-crocodile.jpg' },
    { id: 'sa26', category: 'swim-accessories', title: { ro: 'Jucărie Gonflabilă Călărire 193х119cm «Cosaț»', ru: '58561 НАДУВНАЯ ИГРУШКА-НАЕЗДНИК 193Х119СМ «КАСАТКА» ОТ 3 ЛЕТ', en: 'Inflatable Ride-On 193x119cm «Orca» 3+ years' }, price: 200, oldPrice: null, image: '../assets/img/floatie-orca.jpg' },
    { id: 'sa27', category: 'swim-accessories', title: { ro: 'Jucării Gonflabile Apă, 4 tipuri', ru: '58590 НАДУВНЫЕ ВОДНЫЕ ИГРУШКИ, 4 ВИДОВ', en: 'Inflatable Water Toys, 4 types' }, price: 35, oldPrice: null, image: '../assets/img/water-toys.jpg' },
    { id: 'sa28', category: 'swim-accessories', title: { ro: 'Brațare «DELUXE» 30х15cm, 6-12 ani', ru: '58641 НАРУКАВНИКИ 30Х15СМ «ДЕЛЮКС» ОТ 6 ДО 12 ЛЕТ', en: 'Armbands «DELUXE» 30x15cm, 6-12 years' }, price: 35, oldPrice: null, image: '../assets/img/armbands-deluxe-lg.jpg' },
    { id: 'sa29', category: 'swim-accessories', title: { ro: 'Brațare «DELUXE» 23х15cm, 3-6 ani', ru: '58642 НАРУКАВНИКИ 23Х15СМ «ДЕЛЮКС» ОТ 3 ДО 6 ЛЕТ', en: 'Armbands «DELUXE» 23x15cm, 3-6 years' }, price: 35, oldPrice: null, image: '../assets/img/armbands-deluxe-sm.jpg' },
    { id: 'sa30', category: 'swim-accessories', title: { ro: 'Brațare «UNDERWATER WORLD» 23х15cm, 3-6 ani', ru: '58652 НАРУКАВНИКИ 23Х15СМ «ПОДВОДНЫЙ МИР» ОТ 3 ДО 6 ЛЕТ', en: 'Armbands «UNDERWATER WORLD» 23x15cm, 3-6 years' }, price: 35, oldPrice: null, image: '../assets/img/armbands-underwater.jpg' },
    { id: 'sa31', category: 'swim-accessories', title: { ro: 'Vesta Înot 50х47cm «DELUXE» 3-6 ani', ru: '58671 ЖИЛЕТ ДЛЯ ПЛАВАНИЯ 50Х47СМ «ДЕЛЮКС» ОТ 3 ДО 6 ЛЕТ', en: 'Life Vest 50x47cm «DELUXE» 3-6 years' }, price: 75, oldPrice: null, image: '../assets/img/vest-deluxe.jpg' },
    { id: 'sa32', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Plajă 183х66х20cm «Rainbow Popsicle»', ru: '58766 Надувной матрас-плот для плавания 183х66х20см «Радужное эскимо»', en: 'Inflatable Beach Mat 183x66x20cm «Rainbow Popsicle»' }, price: 200, oldPrice: null, image: '../assets/img/mat-rainbow-popsicle.jpg' },
    { id: 'sa33', category: 'swim-accessories', title: { ro: 'Minge Plajă 51cm, 3+ ani', ru: '59020 ПЛЯЖНЫЙ МЯЧ 51СМ, ОТ 3 ЛЕТ', en: 'Beach Ball 51cm, 3+ years' }, price: 25, oldPrice: null, image: '../assets/img/beach-ball-51.jpg' },
    { id: 'sa34', category: 'swim-accessories', title: { ro: 'Minge Plajă 51cm, 3 tipuri, 3+ ani', ru: '59040 ПЛЯЖНЫЙ МЯЧ 51СМ, 3 ВИДА, ОТ 3 ЛЕТ', en: 'Beach Ball 51cm, 3 types, 3+ years' }, price: 35, oldPrice: null, image: '../assets/img/beach-ball-51-3types.jpg' },
    { id: 'sa35', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil «ANIMALS» Detașabil, 3 tipuri, 3-6 ani', ru: '59220 НАДУВНОЙ КРУГ «ЖИВОТНЫЕ» РАЗЪЕМНЫЙ, 3 ВИДА, ОТ 3 ДО 6 ЛЕТ', en: 'Inflatable Ring «ANIMALS» Detachable, 3 types, 3-6 years' }, price: 45, oldPrice: null, image: '../assets/img/ring-animals.jpg' },
    { id: 'sa36', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 51cm, 3 tipuri, 3-6 ani', ru: '59230 НАДУВНОЙ КРУГ 51СМ, 3 ВИДА, ОТ 3 ДО 6 ЛЕТ', en: 'Inflatable Ring 51cm, 3 types, 3-6 years' }, price: 29, oldPrice: null, image: '../assets/img/ring-51.jpg' },
    { id: 'sa37', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 61cm, 3 tipuri, 6-10 ani', ru: '59241 НАДУВНОЙ КРУГ 61СМ, 3 ВИДА, ОТ 6 ДО 10 ЛЕТ', en: 'Inflatable Ring 61cm, 3 types, 6-10 years' }, price: 35, oldPrice: null, image: '../assets/img/ring-61.jpg' },
    { id: 'sa38', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 61cm «TRANSPARENT RING» 3 tipuri, 6-10 ani', ru: '59242 НАДУВНОЙ КРУГ 61СМ «ПРОЗРАЧНОЕ КОЛЬЦО» 3 ВИДА, ОТ 6 ДО 10 ЛЕТ', en: 'Inflatable Ring 61cm «TRANSPARENT RING» 3 types, 6-10 years' }, price: 35, oldPrice: null, image: '../assets/img/ring-61-transparent.jpg' },
    { id: 'sa39', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 91cm «CLEAR COLOR» 3 culori, 9+ ani', ru: '59251 НАДУВНОЙ КРУГ 91СМ «ЯСНЫЙ ЦВЕТ» 3 ЦВЕТА, ОТ 9 ЛЕТ', en: 'Inflatable Ring 91cm «CLEAR COLOR» 3 colors, 9+ years' }, price: 65, oldPrice: null, image: '../assets/img/ring-91-clear.jpg' },
    { id: 'sa40', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 91cm «TIRE» 9+ ani', ru: '59252 НАДУВНОЙ КРУГ 91СМ «ШИНА» ОТ 9 ЛЕТ', en: 'Inflatable Ring 91cm «TIRE» 9+ years' }, price: 65, oldPrice: 75, image: '../assets/img/ring-91-tire.jpg' },
    { id: 'sa41', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 91cm «BRIGHT STARS» 3 culori, 9+ ani', ru: '59256 НАДУВНОЙ КРУГ 91СМ «ЯРКИЕ ЗВЕЗДЫ» 3 ЦВЕТА, ОТ 9 ЛЕТ', en: 'Inflatable Ring 91cm «BRIGHT STARS» 3 colors, 9+ years' }, price: 79, oldPrice: null, image: '../assets/img/ring-91-stars.jpg' },
    { id: 'sa42', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 76cm «GLOSSY» cu Mânere, 3 culori, 8+ ani', ru: '59258 НАДУВНОЙ КРУГ 76СМ «ГЛЯНЦЕВЫЙ» С РУЧКАМИ, 3 ЦВЕТА, ОТ 8 ЛЕТ', en: 'Inflatable Ring 76cm «GLOSSY» with Handles, 3 colors, 8+ years' }, price: 55, oldPrice: null, image: '../assets/img/ring-76-glossy.jpg' },
    { id: 'sa43', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 76cm «TRANSPARENT» 3 culori, 8+ ani', ru: '59260 НАДУВНОЙ КРУГ 76СМ «ПРОЗРАЧНЫЙ» 3 ЦВЕТА, ОТ 8 ЛЕТ', en: 'Inflatable Ring 76cm «TRANSPARENT» 3 colors, 8+ years' }, price: 39, oldPrice: null, image: '../assets/img/ring-76-transparent.jpg' },
    { id: 'sa44', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 91cm «NEON COLD» 3 culori, 9+ ani', ru: '59262 НАДУВНОЙ КРУГ 91СМ «НЕОНОВЫЙ ХОЛОД» 3 ЦВЕТА, ОТ 9 ЛЕТ', en: 'Inflatable Ring 91cm «NEON COLD» 3 colors, 9+ years' }, price: 55, oldPrice: null, image: '../assets/img/ring-91-neon.jpg' },
    { id: 'sa45', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil «Cute Animals»', ru: '59266 Надувной круг «Милые зверята»', en: 'Inflatable Ring «Cute Animals»' }, price: 59, oldPrice: null, image: '../assets/img/ring-cute-animals.jpg' },
    { id: 'sa46', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil cu Scaun și Spătar «ANIMALS» 3-4 ani', ru: '59570 НАДУВНОЙ КРУГ С СИДЕНИЕМ И СО СПИНКОЙ «ЖИВОТНЫЕ» ОТ 3 ДО 4 ЛЕТ', en: 'Inflatable Ring with Seat and Backrest «ANIMALS» 3-4 years' }, price: 139, oldPrice: null, image: '../assets/img/ring-seat-animals.jpg' },
    { id: 'sa47', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil cu Scaun și Spătar 67cm «MY BABY FLOAT», până 15kg, 1-2 ani', ru: '59574 НАДУВНОЙ КРУГ С СИДЕНИЕМ И СО СПИНКОЙ, 67СМ «MY BABY FLOAT» ДО 15КГ, ОТ 1 ДО 2 ЛЕТ', en: 'Inflatable Ring with Seat and Backrest 67cm «MY BABY FLOAT» up to 15kg, 1-2 years' }, price: 85, oldPrice: null, image: '../assets/img/ring-seat-baby.jpg' },
    { id: 'sa48', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil cu Scaun și Spătar 3 tipuri, 1-2 ani, până 11kg', ru: '59586 НАДУВНОЙ КРУГ С СИДЕНИЕМ И СО СПИНКОЙ 3 ВИДА, ОТ 1 ДО 2 ЛЕТ, ДО 11 КГ', en: 'Inflatable Ring with Seat and Backrest 3 types, 1-2 years, up to 11kg' }, price: 99, oldPrice: null, image: '../assets/img/ring-seat-3types.jpg' },
    { id: 'sa49', category: 'swim-accessories', title: { ro: 'Vâsle Plastic 122cm, set 2 buc', ru: '59623 ВЁСЛА ПЛАСТИКОВЫЕ 122СМ, КОМПЛЕКТ 2ШТ', en: 'Plastic Oars 122cm, set of 2' }, price: 179, oldPrice: null, image: '../assets/img/oars-plastic-122.jpg' },
    { id: 'sa50', category: 'swim-accessories', title: { ro: 'Kit Reparații', ru: '59631 РЕМОНТНЫЙ КОМПЛЕКТ', en: 'Repair Kit' }, price: 20, oldPrice: null, image: '../assets/img/repair-kit.jpg' },
    { id: 'sa51', category: 'swim-accessories', title: { ro: 'Brațare 25х17cm, 6-12 ani', ru: '59642 НАРУКАВНИКИ 25Х17СМ, ОТ 6 ДО 12 ЛЕТ', en: 'Armbands 25x17cm, 6-12 years' }, price: 29, oldPrice: null, image: '../assets/img/armbands-25x17.jpg' },
    { id: 'sa52', category: 'swim-accessories', title: { ro: 'Vesta Înot 41х30cm «TROPICAL FRIENDS» 3-5 ani', ru: '59661 ЖИЛЕТ ДЛЯ ПЛАВАНИЯ 41Х30СМ «ТРОПИЧЕСКИЕ ДРУЗЬЯ» ОТ 3 ДО 5 ЛЕТ', en: 'Life Vest 41x30cm «TROPICAL FRIENDS» 3-5 years' }, price: 55, oldPrice: null, image: '../assets/img/vest-tropical.jpg' },
    { id: 'sa53', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 183х69cm, 3 culori', ru: '59703 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 183Х69СМ, 3 ЦВЕТА', en: 'Inflatable Float Mat 183x69cm, 3 colors' }, price: 59, oldPrice: null, image: '../assets/img/mat-183x69.jpg' },
    { id: 'sa54', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 183х69cm, 3 tipuri', ru: '59720 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 183Х69СМ, 3 ВИДА', en: 'Inflatable Float Mat 183x69cm, 3 types' }, price: 99, oldPrice: 105, image: '../assets/img/mat-183x69-3types.jpg' },
    { id: 'sa55', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 188х71cm cu Fereastră, 14+ ani, 2 culori', ru: '59894 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 188Х71СМ С ОКНОМ, 2 ЦВЕТА, ОТ 14 ЛЕТ', en: 'Inflatable Float Mat 188x71cm with Window, 14+ years, 2 colors' }, price: 179, oldPrice: null, image: '../assets/img/mat-188x71-window.jpg' },
    { id: 'sa56', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 188х71cm cu Fereastră, 14+ ani, 2 culori', ru: '59895 НАДУВНОЙ МАТРАС ДЛЯ ПЛАВАНИЯ 188Х71СМ С ОКНОМ, 2 ЦВЕТА, ОТ 14 ЛЕТ', en: 'Inflatable Float Mat 188x71cm with Window, 14+ years, 2 colors' }, price: 179, oldPrice: null, image: '../assets/img/mat-188x71-window-alt.jpg' },
    { id: 'sa57', category: 'swim-accessories', title: { ro: 'Vâsle Aluminiu 137cm, set 2 buc', ru: '69625 ВЁСЛА АЛЮМИНИЕВЫЕ 137СМ, КОМПЛЕКТ 2ШТ', en: 'Aluminum Oars 137cm, set of 2' }, price: 379, oldPrice: null, image: '../assets/img/oars-aluminum-137.jpg' },
    { id: 'sa58', category: 'swim-accessories', title: { ro: 'Set Înot (Betuci și Clemă Nas) 8+ ani', ru: 'INTEX 55609 Набор для плавания (беруши и зажим для носа) от 8 лет', en: 'Swim Set (Earplugs and Nose Clip) 8+ years' }, price: 25, oldPrice: null, image: '../assets/img/swim-set-basics.jpg' },
    { id: 'sa59', category: 'swim-accessories', title: { ro: 'Bonete Înot Silicon, 8+ ani, 3 culori', ru: 'Intex 55992 Шапка для плавания из силикона, от 8 лет, 3 цвета', en: 'Silicon Swim Cap, 8+ years, 3 colors' }, price: 60, oldPrice: null, image: '../assets/img/cap-silicon-alt.jpg' },
    { id: 'sa60', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 94х89х25cm «Donut Heart», până 80kg, 9+ ani', ru: 'INTEX 56253 Надувной круг 94х89х25см «Пончик сердечком», до 80кг, от 9 лет', en: 'Inflatable Ring 94x89x25cm «Donut Heart» up to 80kg, 9+ years' }, price: 125, oldPrice: null, image: '../assets/img/ring-donut-heart.jpg' },
    { id: 'sa61', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 107х27cm «TRANSPARENT SHINE»', ru: 'INTEX 56274 Надувной круг 107х27см «Прозрачный блеск»', en: 'Inflatable Ring 107x27cm «TRANSPARENT SHINE»' }, price: 239, oldPrice: null, image: '../assets/img/ring-107-transparent-shine.jpg' },
    { id: 'sa62', category: 'swim-accessories', title: { ro: 'Brațare Gonflabile 23х15cm, 3-6 ani', ru: 'INTEX 56669 Надувные нарукавники 23×15см, 3-6л', en: 'Inflatable Armbands 23x15cm, 3-6 years' }, price: 35, oldPrice: null, image: '../assets/img/armbands-23x15.jpg' },
    { id: 'sa63', category: 'swim-accessories', title: { ro: 'Jucărie Gonflabilă Călărire 152х114cm «Cosaț» până 40kg, 3+ ani', ru: 'Intex 58523 Надувная игрушка-наездник 152х114см «Касатка» до 40кг, от 3 лет', en: 'Inflatable Ride-On 152x114cm «Orca» up to 40kg, 3+ years' }, price: 199, oldPrice: null, image: '../assets/img/floatie-orca-152.jpg' },
    { id: 'sa64', category: 'swim-accessories', title: { ro: 'Vesta Înot, 3-6 ani', ru: 'INTEX 58660 Жилет для плавания, 3-6 лет', en: 'Life Vest, 3-6 years' }, price: 79, oldPrice: null, image: '../assets/img/vest-intex.jpg' },
    { id: 'sa65', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 155х135х25cm «Sweet Heart»', ru: 'INTEX 58727 Надувной матрас для плавания 155х135х25см «Милое сердце»', en: 'Inflatable Float Mat 155x135x25cm «Sweet Heart»' }, price: 339, oldPrice: null, image: '../assets/img/mat-sweet-heart.jpg' },
    { id: 'sa66', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 178х91х23cm «Wind-Up Van»', ru: 'INTEX 58728 Надувной матрас для плавания 178х91х23см «Заводной фургон»', en: 'Inflatable Float Mat 178x91x23cm «Wind-Up Van»' }, price: 299, oldPrice: null, image: '../assets/img/mat-wind-up-van.jpg' },
    { id: 'sa67', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 175х117х20cm «Rainbow Clouds», până 100kg', ru: 'Intex 58729 Надувной матрас для плавания 175х117х20см «Облака на радуге», до 100кг', en: 'Inflatable Float Mat 175x117x20cm «Rainbow Clouds» up to 100kg' }, price: 285, oldPrice: null, image: '../assets/img/mat-rainbow-clouds.jpg' },
    { id: 'sa68', category: 'swim-accessories', title: { ro: 'Saltea Gonflabilă Înot 180х130х28cm «Cactus», până 100kg', ru: 'INTEX 58793 Надувной матрас для плавания 180х130х28см «Кактус», до 100кг', en: 'Inflatable Float Mat 180x130x28cm «Cactus» up to 100kg' }, price: 329, oldPrice: null, image: '../assets/img/mat-cactus.jpg' },
    { id: 'sa69', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil «Big Wonder», 3-6 ani, 3 tipuri', ru: 'INTEX 59221 Надувной круг «Большое чудо», от 3 до 6 лет, 3 вида', en: 'Inflatable Ring «Big Wonder» 3-6 years, 3 types' }, price: 65, oldPrice: null, image: '../assets/img/ring-big-wonder.jpg' },
    { id: 'sa70', category: 'swim-accessories', title: { ro: 'Cerc Gonflabil 81cm «Whimsical Magic» 8+ ani, 3 tipuri', ru: 'INTEX 59259 Надувной круг 81см «Причудливое волшебство» от 8 лет, 3 вида', en: 'Inflatable Ring 81cm «Whimsical Magic» 8+ years, 3 types' }, price: 55, oldPrice: null, image: '../assets/img/ring-81-whimsical.jpg' },
    { id: 'sa71', category: 'swim-accessories', title: { ro: 'Jucării Gonflabile Apă, 4 tipuri', ru: 'INTEX 59590 НАДУВНЫЕ ВОДНЫЕ ИГРУШКИ, 4 ВИДОВ', en: 'Inflatable Water Toys, 4 types' }, price: 35, oldPrice: null, image: '../assets/img/water-toys-intex.jpg' },
    { id: 'sa72', category: 'swim-accessories', title: { ro: 'Vesta Înot 41х30cm «Blue Lagoon» 3-5 ani', ru: 'INTEX 59663 Жилет для плавания 41х30см «Голубая лагуна» 3-5 лет', en: 'Life Vest 41x30cm «Blue Lagoon» 3-5 years' }, price: 55, oldPrice: null, image: '../assets/img/vest-blue-lagoon.jpg' },
    { id: 'sa73', category: 'swim-accessories', title: { ro: 'Mască Înot Panoramică Completă L/XL', ru: 'Полнолицевая панорамная маска для плавания.L/XL', en: 'Full Face Snorkel Mask L/XL' }, price: 450, oldPrice: null, image: '../assets/img/mask-full-face-lxl.jpg' },
    { id: 'sa74', category: 'swim-accessories', title: { ro: 'Mască Înot Panoramică Completă S/M', ru: 'Полнолицевая панорамная маска pentru pluvain.S/M', en: 'Full Face Snorkel Mask S/M' }, price: 450, oldPrice: null, image: '../assets/img/mask-full-face-sm.jpg' },
    { id: 'sa75', category: 'swim-accessories', title: { ro: 'Mască Înot Panoramică Completă XS', ru: 'Полнолицевая панорамная маска pentru pluvain.XS', en: 'Full Face Snorkel Mask XS' }, price: 450, oldPrice: null, image: '../assets/img/mask-full-face-xs.jpg' },

    // Inflatable-mattresses (Надувные матрасы Intex)
    { id: 'im1', category: 'inflatable-mattresses', title: { ro: 'Kit Reparații', ru: '59631 РЕМОНТНЫЙ КОМПЛЕКТ', en: 'Repair Kit' }, price: 20, oldPrice: null, image: '../assets/img/repair-kit-infl.jpg' },
    { id: 'im2', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă DELUXE SINGLE-HIGH 137х191х25cm', ru: '64102 НАДУВНОЙ МАТРАС DELUXE SINGLE-HIGH 137Х191Х25СМ', en: 'Inflatable Mattress DELUXE SINGLE-HIGH 137x191x25cm' }, price: 449, oldPrice: 499, image: '../assets/img/mattress-deluxe-137.jpg' },
    { id: 'im3', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă DELUXE SINGLE-HIGH 152х203х25cm', ru: '64103 НАДУВНОЙ МАТРАС DELUXE SINGLE-HIGH 152Х203Х25СМ', en: 'Inflatable Mattress DELUXE SINGLE-HIGH 152x203x25cm' }, price: 499, oldPrice: 599, image: '../assets/img/mattress-deluxe-152.jpg' },
    { id: 'im4', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă 99х191х25cm «Prestige» până 136kg', ru: '64107 Надувной матрас 99х191х25см «Prestige» до 136кг', en: 'Inflatable Mattress 99x191x25cm «Prestige» up to 136kg' }, price: 349, oldPrice: 399, image: '../assets/img/mattress-prestige-99.jpg' },
    { id: 'im5', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil 99х191х30cm cu Pernă, Pompă Încorporată 220V', ru: '64116 Надувная кровать 99х191х30см с подголовником, встр.насос 220В', en: 'Inflatable Bed 99x191x30cm with Pillow, Built-in Pump 220V' }, price: 849, oldPrice: null, image: '../assets/img/bed-pillow-99.jpg' },
    { id: 'im6', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil Dublu 152х203х30cm cu Pompă Încorporată 220V', ru: '64118 Двухспальная надувная кровать 152х203х30см со встроенным насосом 220v.', en: 'Double Inflatable Bed 152x203x30cm with Built-in Pump 220V' }, price: 1099, oldPrice: null, image: '../assets/img/bed-double-152.jpg' },
    { id: 'im7', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil PILLOW REST RAISED BED 99х191х42cm cu Pernă, Pompă 220V', ru: '64122 НАДУВНАЯ КРОВАТЬ PILLOW REST RAISED BED 99Х191Х42СМ С ПОДГОЛОВНИКОМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed PILLOW REST RAISED 99x191x42cm with Pillow, Pump 220V' }, price: 899, oldPrice: 1099, image: '../assets/img/bed-pillow-rest-99.jpg' },
    { id: 'im8', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil PILLOW REST RAISED BED 152х203х42cm cu Pernă, Pompă 220V', ru: '64124 НАДУВНАЯ КРОВАТЬ PILLOW REST RAISED BED 152Х203Х42СМ С ПОДГОЛОВНИКОМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed PILLOW REST RAISED 152x203x42cm with Pillow, Pump 220V' }, price: 1199, oldPrice: 1399, image: '../assets/img/bed-pillow-rest-152.jpg' },
    { id: 'im9', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil DELUXE PILLOW REST RAISED BED 99х191х42cm, Pompă 220V', ru: '64132 НАДУВНАЯ КРОВАТЬ DELUXE PILLOW REST RAISED BED 99Х191Х42СМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed DELUXE PILLOW REST RAISED 99x191x42cm, Pump 220V' }, price: 1099, oldPrice: null, image: '../assets/img/bed-deluxe-pillow-rest-99.jpg' },
    { id: 'im10', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil DELUXE PILLOW REST RAISED BED 152х203х42cm, Pompă 220V', ru: '64136 НАДУВНАЯ КРОВАТЬ DELUXE PILLOW REST RAISED BED 152Х203Х42СМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed DELUXE PILLOW REST RAISED 152x203x42cm, Pump 220V' }, price: 1299, oldPrice: null, image: '../assets/img/bed-deluxe-pillow-rest-152.jpg' },
    { id: 'im11', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă cu Pernă PILLOW REST CLASSIC BED FIBER-TECH 137х191х25cm', ru: '64142 НАДУВНОЙ МАТРАС С ПОДГОЛОВНИКОМ PILLOW REST CLASSIC BED FIBER-TECH, 137Х191Х25СМ', en: 'Inflatable Mattress with Pillow PILLOW REST CLASSIC BED FIBER-TECH 137x191x25cm' }, price: 549, oldPrice: null, image: '../assets/img/mattress-pillow-rest-classic-137.jpg' },
    { id: 'im12', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă PILLOW REST CLASSIC FIBER-TECH 152х203х25cm', ru: '64143 МАТРАС НАДУВНОЙ PILLOW REST CLASSIC FIBER-TECH, 152 Х 203 Х 25 СМ', en: 'Inflatable Mattress PILLOW REST CLASSIC FIBER-TECH 152x203x25cm' }, price: 639, oldPrice: 725, image: '../assets/img/mattress-pillow-rest-classic-152.jpg' },
    { id: 'im13', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă cu Pernă PILLOW REST CLASSIC BED FIBER-TECH 183х203х25cm', ru: '64144 НАДУВНОЙ МАТРАС С ПОДГОЛОВНИКОМ PILLOW REST CLASSIC BED FIBER-TECH, 183Х203Х25СМ', en: 'Inflatable Mattress with Pillow PILLOW REST CLASSIC BED FIBER-TECH 183x203x25cm' }, price: 699, oldPrice: 849, image: '../assets/img/mattress-pillow-rest-classic-183.jpg' },
    { id: 'im14', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil (Saltea) Intex 152х203х30cm', ru: '64179 Надувной матрас (кровать) Intex 152х203х30 см.', en: 'Inflatable Bed (Mattress) Intex 152x203x30cm' }, price: 859, oldPrice: null, image: '../assets/img/bed-intex-152-30.jpg' },
    { id: 'im15', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil COMFORT-PLUSH 99х191х46cm, Pompă 220V', ru: '64412 НАДУВНАЯ КРОВАТЬ COMFORT-PLUSH 99Х191Х46СМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed COMFORT-PLUSH 99x191x46cm, Pump 220V' }, price: 1149, oldPrice: 1450, image: '../assets/img/bed-comfort-plush-99.jpg' },
    { id: 'im16', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil COMFORT-PLUSH 152х203х46cm, Pompă 220V', ru: '64414 НАДУВНАЯ КРОВАТЬ COMFORT-PLUSH 152Х203Х46СМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed COMFORT-PLUSH 152x203x46cm, Pump 220V' }, price: 1599, oldPrice: null, image: '../assets/img/bed-comfort-plush-152.jpg' },
    { id: 'im17', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil COMFORT-PLUSH 152х203х56cm, Pompă 220V', ru: '64418 НАДУВНАЯ КРОВАТЬ COMFORT-PLUSH 152Х203Х56СМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed COMFORT-PLUSH 152x203x56cm, Pump 220V' }, price: 1799, oldPrice: 1999, image: '../assets/img/bed-comfort-plush-56.jpg' },
    { id: 'im18', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil Intex Ultra Plush Bed (Twin) 99х191х46cm, Pompă 220V', ru: '64426 Надувная кровать Intex Ultra Plush Bed (Twin), 99х191х46 см, со встроенным насосом 220V', en: 'Inflatable Bed Intex Ultra Plush (Twin) 99x191x46cm, Pump 220V' }, price: 1299, oldPrice: null, image: '../assets/img/bed-ultra-plush-twin.jpg' },
    { id: 'im19', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil ULTRA PLUSH BED 152х203х46cm, Pompă 220V', ru: '64428 НАДУВНАЯ КРОВАТЬ ULTRA PLUSH BED 152Х203Х46СМ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed ULTRA PLUSH 152x203x46cm, Pump 220V' }, price: 1599, oldPrice: null, image: '../assets/img/bed-ultra-plush-152.jpg' },
    { id: 'im20', category: 'inflatable-mattresses', title: { ro: 'Pat Gonflabil HEADBOARD AIRBED 152х236х86cm cu Spătar, Pompă 220V', ru: '64448 НАДУВНАЯ КРОВАТЬ HEADBOARD AIRBED 152Х236Х86СМ СО СПИНКОЙ, ВСТРОЕННЫЙ НАСОС 220V', en: 'Inflatable Bed HEADBOARD AIRBED 152x236x86cm with Backrest, Pump 220V' }, price: 2199, oldPrice: 2499, image: '../assets/img/bed-headboard-airbed.jpg' },
    { id: 'im21', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 183х203х25cm', ru: '64755 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 183Х203Х25СМ', en: 'Inflatable Mattress CLASSIC DOWNY BED 183x203x25cm' }, price: 549, oldPrice: 675, image: '../assets/img/mattress-classic-downy-183.jpg' },
    { id: 'im22', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 99х191х25cm', ru: '64757 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 99Х191Х25СМ', en: 'Inflatable Mattress CLASSIC DOWNY BED 99x191x25cm' }, price: 349, oldPrice: 399, image: '../assets/img/mattress-classic-downy-99.jpg' },
    { id: 'im23', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 137х191х25cm', ru: '64758 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 137Х191Х25СМ', en: 'Inflatable Mattress CLASSIC DOWNY BED 137x191x25cm' }, price: 419, oldPrice: 499, image: '../assets/img/mattress-classic-downy-137.jpg' },
    { id: 'im24', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 152х203х25cm', ru: '64759 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 152Х203Х25СМ', en: 'Inflatable Mattress CLASSIC DOWNY BED 152x203x25cm' }, price: 499, oldPrice: 575, image: '../assets/img/mattress-classic-downy-152.jpg' },
    { id: 'im25', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă DOWNY BED 99х191х25cm cu Pompă Picior Încorporată', ru: '64761 НАДУВНОЙ МАТРАС DOWNY BED, 99Х191Х25СМ, СО ВСТРОЕННЫМ НОЖНЫМ НАСОСОМ', en: 'Inflatable Mattress DOWNY BED 99x191x25cm with Built-in Foot Pump' }, price: 499, oldPrice: 549, image: '../assets/img/mattress-downy-foot-pump-99.jpg' },
    { id: 'im26', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă DOWNY BED 152х203х22cm cu Pompă Picior Încorporată', ru: '64763 НАДУВНОЙ МАТРАС DOWNY BED, 152Х203Х22СМ, СО ВСТРОЕННЫМ НОЖНЫМ НАСОСОМ', en: 'Inflatable Mattress DOWNY BED 152x203x22cm with Built-in Foot Pump' }, price: 649, oldPrice: null, image: '../assets/img/mattress-downy-foot-pump-152.jpg' },
    { id: 'im27', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă CLASSIC DOWNY BED 152х203х25cm cu Perne și Pompă', ru: '64765 НАДУВНОЙ МАТРАС CLASSIC DOWNY BED, 152Х203Х25СМ С ПОДУШКАМИ И НАСОСОМ', en: 'Inflatable Mattress CLASSIC DOWNY BED 152x203x25cm with Pillows and Pump' }, price: 599, oldPrice: 699, image: '../assets/img/mattress-classic-downy-pillows.jpg' },
    { id: 'im28', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă CAMPING MAT 72х189х20cm', ru: '67998 НАДУВНОЙ МАТРАС CAMPING MAT 72Х189Х20СМ', en: 'Inflatable Mattress CAMPING MAT 72x189x20cm' }, price: 400, oldPrice: null, image: '../assets/img/mattress-camping-72.jpg' },
    { id: 'im29', category: 'inflatable-mattresses', title: { ro: 'Saltea Gonflabilă 127х193х24cm «Camping» până 272kg', ru: '67999 Надувной матрас 127х193х24см «Camping» до 272кг', en: 'Inflatable Mattress 127x193x24cm «Camping» up to 272kg' }, price: 650, oldPrice: null, image: '../assets/img/mattress-camping-127.jpg' },
    { id: 'im30', category: 'inflatable-mattresses', title: { ro: 'Pernă Gonflabilă 43х28х9cm', ru: '68672 НАДУВНАЯ ПОДУШКА 43Х28Х9СМ', en: 'Inflatable Pillow 43x28x9cm' }, price: 50, oldPrice: null, image: '../assets/img/pillow-inflatable-43.jpg' },
    { id: 'im31', category: 'inflatable-mattresses', title: { ro: 'Pernă Gonflabilă pentru Gât 36х30х10cm', ru: '68675 НАДУВНАЯ ПОДУШКА ДЛЯ ШЕИ 36Х30Х10СМ', en: 'Inflatable Neck Pillow 36x30x10cm' }, price: 50, oldPrice: null, image: '../assets/img/pillow-neck-36.jpg' },

    // Pumps (Насосы)
    { id: 'pump1', category: 'pumps', title: { ro: 'Pompă Electrică QUICK-FILL 12V/220V cu Adaptor și 3 Dispozitive', ru: '66634 INTEX НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 12В/220В АДАПТЕР, 3 НАСАДКИ В КОМПЛЕКТЕ', en: 'Electric Pump QUICK-FILL 12V/220V with Adapter and 3 Nozzles' }, price: 379, oldPrice: null, image: '../assets/img/pump-quick-fill-adapter.jpg' },
    { id: 'pump2', category: 'pumps', title: { ro: 'Pompă Electrică QUICK-FILL 12V din Ciocan de Aprindere', ru: '66636 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 12В ОТ ПРИКУРИВАТЕЛЯ, 3 НАСАДКИ В КОМПЛЕКТЕ', en: 'Electric Pump QUICK-FILL 12V Car Lighter with 3 Nozzles' }, price: 279, oldPrice: null, image: '../assets/img/pump-quick-fill-12v.jpg' },
    { id: 'pump3', category: 'pumps', title: { ro: 'Pompă Electrică QUICK-FILL 220V de la Rețea', ru: '66640 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 220В ОТ БЫТОВОЙ СЕТИ, 3 НАСАДКИ В КОМПЛЕКТЕ', en: 'Electric Pump QUICK-FILL 220V AC with 3 Nozzles' }, price: 259, oldPrice: null, image: '../assets/img/pump-quick-fill-220v.jpg' },
    { id: 'pump4', category: 'pumps', title: { ro: 'Pompă Electrică QUICK-FILL 12V/220V cu Baterie Acumulatoare', ru: '66642 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 12В/220В, С АККУМУЛЯТОРОМ, 3 НАСАДКИ В КОМПЛЕКТЕ', en: 'Electric Pump QUICK-FILL 12V/220V with Battery and 3 Nozzles' }, price: 699, oldPrice: null, image: '../assets/img/pump-quick-fill-battery.jpg' },
    { id: 'pump5', category: 'pumps', title: { ro: 'Pompă Electrică QUICK-FILL 220V cu 3 Dispozitive și Furtun', ru: '66644 НАСОС ЭЛЕКТРИЧЕСКИЙ QUICK-FILL, 220В ОТ БЫТОВОЙ СЕТИ, 3 НАСАДКИ СО ШЛАНГОМ В КОМПЛЕКТЕ', en: 'Electric Pump QUICK-FILL 220V AC with 3 Nozzles and Hose' }, price: 419, oldPrice: 449, image: '../assets/img/pump-quick-fill-hose.jpg' },
    { id: 'pump6', category: 'pumps', title: { ro: 'Pompă Manuală DOUBLE QUICK III S 37cm', ru: '68605 НАСОС РУЧНОЙ DOUBLE QUICK III S, 37СМ', en: 'Manual Pump DOUBLE QUICK III S 37cm' }, price: 189, oldPrice: null, image: '../assets/img/pump-double-quick-iii-s.jpg' },
    { id: 'pump7', category: 'pumps', title: { ro: 'Pompă Manuală DOUBLE QUICK I 29cm', ru: '68612 НАСОС РУЧНОЙ DOUBLE QUICK I, 29СМ', en: 'Manual Pump DOUBLE QUICK I 29cm' }, price: 100, oldPrice: null, image: '../assets/img/pump-double-quick-i.jpg' },
    { id: 'pump8', category: 'pumps', title: { ro: 'Pompă Manuală DOUBLE QUICK III 48cm', ru: '68615 НАСОС РУЧНОЙ DOUBLE QUICK III, 48СМ', en: 'Manual Pump DOUBLE QUICK III 48cm' }, price: 229, oldPrice: 259, image: '../assets/img/pump-double-quick-iii.jpg' },
    { id: 'pump9', category: 'pumps', title: { ro: 'Pompă cu Picior 3L 28cm', ru: '69611 НАСОС НОЖНОЙ 3Л, 28СМ', en: 'Foot Pump 3L 28cm' }, price: 149, oldPrice: 160, image: '../assets/img/pump-foot-3l.jpg' },
    { id: 'pump10', category: 'pumps', title: { ro: 'Pompă Manuală DOUBLE QUICK MINI 29cm', ru: '69613 НАСОС РУЧНОЙ DOUBLE QUICK MINI, 29СМ', en: 'Manual Pump DOUBLE QUICK MINI 29cm' }, price: 39, oldPrice: null, image: '../assets/img/pump-double-quick-mini.jpg' }
];

// ==========================================
// 2. APPLICATION STATE MANAGEMENT
// ==========================================

const AppState = {
    currentCategory: null,
    currentSubcategory: null,
    currentPage: 1,
    itemsPerPage: 12,
    currentLanguage: 'ro',
    filteredProducts: [],
    
    // Metode pentru modificarea stării
    setState(updates) {
        Object.assign(this, updates);
        this.notifyStateChange();
    },
    
    // Observatori pentru schimbările de stare
    observers: [],
    
    subscribe(observer) {
        this.observers.push(observer);
    },
    
    notifyStateChange() {
        this.observers.forEach(observer => observer(this));
    }
};

// ==========================================
// 3. DOM REFERENCES
// ==========================================

const Elements = {
    productListContainer: null,
    productListGrid: null,
    categoryMenu: null,
        productListContainer: null,
    productListGrid: null,
    categoryMenu: null,
    currentCategoryTitle: null,
    subcategoryContainer: null,
    paginationContainer: null,
    
    // Inițializare referințe DOM
    init() {
        this.productListContainer = document.getElementById('productListContainer');
        this.productListGrid = document.getElementById('productListGrid');
        this.categoryMenu = document.getElementById('categoryMenu');
        this.currentCategoryTitle = document.getElementById('currentCategoryTitle');
        this.subcategoryContainer = document.getElementById('subcategoryContainer');
        this.paginationContainer = document.getElementById('paginationContainer');
        
        return this;
    }
};

// ==========================================
// 4. UTILITY FUNCTIONS
// ==========================================

const Utils = {
    // Obține limba curentă
    getCurrentLang() {
        return AppState.currentLanguage;
    },
    
    // Traduce un text pe baza cheii
    translate(key, fallback = '') {
        // Implementare bazată pe sistemul de i18n existent
        const translations = {
            ro: {
                // Adăugați traducerile în română aici
                'cat_boats': 'Bărci',
                'cat_playgrounds': 'Terenuri de joacă',
                'cat_transport': 'Transport copii',
                'cat_pools': 'Piscine',
                'cat_accessories': 'Accesorii',
                'cat_intex_pools': 'Bazine INTEX',
                'cat_kids_pools': 'Piscine pentru copii',
                'cat_swim_acc': 'Accesorii înot',
                'cat_infl_mattress': 'Saltele gonflabile',
                'cat_pumps': 'Pompe'
            },
            ru: {
                // Adăugați traducerile în rusă aici
                'cat_boats': 'Лодки',
                'cat_playgrounds': 'Игровые площадки',
                'cat_transport': 'Детский транспорт',
                'cat_pools': 'Бассейны',
                'cat_accessories': 'Аксессуары',
                'cat_intex_pools': 'Бассейны INTEX',
                'cat_kids_pools': 'Детские бассейны',
                'cat_swim_acc': 'Аксессуары для плавания',
                'cat_infl_mattress': 'Надувные матрасы',
                'cat_pumps': 'Насосы'
            },
            en: {
                // Adăugați traducerile în engleză aici
                'cat_boats': 'Boats',
                'cat_playgrounds': 'Playgrounds',
                'cat_transport': 'Kids Transport',
                'cat_pools': 'Pools',
                'cat_accessories': 'Accessories',
                'cat_intex_pools': 'INTEX Pools',
                'cat_kids_pools': 'Kids Pools',
                'cat_swim_acc': 'Swim Accessories',
                'cat_infl_mattress': 'Inflatable Mattresses',
                'cat_pumps': 'Pumps'
            }
        };
        
        return translations[this.getCurrentLang()][key] || fallback;
    },
    
    // Formatează prețul
    formatPrice(price) {
        return new Intl.NumberFormat('ro-RO', {
            style: 'currency',
            currency: 'MDL'
        }).format(price);
    },
    
    // Generează un ID unic
    generateId() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    },
    
    // Debounce pentru evenimente
    debounce(func, wait) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    }
};

// ==========================================
// 5. RENDERING FUNCTIONS
// ==========================================

const Renderer = {
    // Asigură existența containerului pentru subcategorii
    ensureSubcategoryContainer() {
        if (!Elements.productListContainer) return null;
        
        let subContainer = Elements.subcategoryContainer;
        if (!subContainer) {
            subContainer = document.createElement('div');
            subContainer.id = 'subcategoryContainer';
            subContainer.className = 'subcategory-wrapper';
            subContainer.style.display = 'grid';
            subContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
            subContainer.style.gap = '12px';
            subContainer.style.margin = '12px 0';
            
            const grid = Elements.productListGrid;
            if (grid) Elements.productListContainer.insertBefore(subContainer, grid);
            else Elements.productListContainer.appendChild(subContainer);
            
            Elements.subcategoryContainer = subContainer;
        }
        return subContainer;
    },
    
    // Randează subcategoriile pentru o categorie
    renderSubcategories(categoryId) {
        const subs = SUBCATEGORIES_DATA[categoryId];
        const subContainer = this.ensureSubcategoryContainer();
        
        if (!subContainer) return;
        
        // Curăță conținutul anterior
        subContainer.innerHTML = '';
        
        if (!subs || subs.length === 0) {
            subContainer.style.display = 'none';
            return;
        }
        
        subContainer.style.display = 'grid';
        
        // Ascunde grila de produse în timp ce afișează subcategoriile
        if (Elements.productListGrid) Elements.productListGrid.style.display = 'none';
        
        subs.forEach(sub => {
            const card = document.createElement('div');
            card.className = 'category-card subcategory-card';
            card.style.cursor = 'pointer';
            card.style.padding = '12px';
            card.style.borderRadius = '10px';
            card.style.boxShadow = '0 2px 6px rgba(0,0,0,0.08)';
            card.style.background = 'var(--card-bg, #fff)';
            
            // Numărătoarea produselor din subcategorie
            const productCount = PRODUCTS_DATA.filter(p => 
                p.category === categoryId && p.subcategory === sub.id
            ).length;
            
            card.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <div style="flex:1;">
                        <h4 style="margin:0; font-size:1rem;">${sub.title}</h4>
                        <p style="margin:6px 0 0 0; color:#666; font-size:0.9rem;">(${productCount} produse)</p>
                    </div>
                    <div style="align-self:center; font-size:1.2rem;">›</div>
                </div>
            `;
            
            card.addEventListener('click', () => {
                AppState.setState({
                    currentCategory: categoryId,
                    currentSubcategory: sub.id,
                    currentPage: 1
                });
                
                this.showSubcategory(categoryId, sub.id, sub.title);
            });
            
            subContainer.appendChild(card);
        });
    },
    
    // Afișează produsele dintr-o subcategorie
    showSubcategory(categoryId, subId, subTitle) {
        // Actualizează starea
        AppState.setState({
            currentCategory: categoryId,
            currentSubcategory: subId,
            currentPage: 1,
            filteredProducts: PRODUCTS_DATA.filter(p => 
                p.category === categoryId && p.subcategory === subId
            )
        });
        
        // Actualizează titlul
        if (Elements.currentCategoryTitle) {
            Elements.currentCategoryTitle.innerText = subTitle || subId;
        }
        
        // Ascunde subcategoriile
        if (Elements.subcategoryContainer) {
            Elements.subcategoryContainer.style.display = 'none';
        }
        
        // Afișează grila de produse
        if (Elements.productListGrid) {
            Elements.productListGrid.style.display = '';
        }
        
        // Afișează containerul de produse
        if (Elements.categoryMenu) Elements.categoryMenu.classList.add('hidden');
        if (Elements.productListContainer) Elements.productListContainer.classList.remove('hidden');
        
        // Adaugă stare în istoricul navigării
        if (typeof pushState === 'function') {
            pushState({ 
                view: 'products', 
                category: categoryId, 
                subcategory: subId, 
                page: 1 
            });
        }
        
        // Randează grila paginată
        this.renderPaginatedGrid();
    },
    
    // Randează grila de produse cu paginare
    renderPaginatedGrid() {
        if (!Elements.productListGrid) return;
        
        const { filteredProducts, currentPage, itemsPerPage } = AppState;
        
        // Calculează produsele pentru pagina curentă
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        
        // Curăță grila
        Elements.productListGrid.innerHTML = '';
        
        // Randează fiecare produs
        productsToShow.forEach(product => {
            const productCard = this.createProductCard(product);
            Elements.productListGrid.appendChild(productCard);
        });
        
        // Randează controalele de paginare
        this.renderPagination(filteredProducts.length);
    },
    
    // Creează un card de produs
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.productId = product.id;
        
        const currentLang = Utils.getCurrentLang();
        const title = product.title[currentLang] || product.title.ro || product.title.en || '';
        const price = Utils.formatPrice(product.price);
        const oldPrice = product.oldPrice ? Utils.formatPrice(product.oldPrice) : '';
        
        card.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${title}" class="product-image">
                ${product.oldPrice ? `<span class="product-discount">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${title}</h3>
                <div class="product-price-container">
                    ${oldPrice ? `<span class="product-old-price">${oldPrice}</span>` : ''}
                    <span class="product-price">${price}</span>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i> Adaugă în coș
                </button>
            </div>
        `;
        
        // Adaugă event listener pentru butonul de adăugare în coș
        const addToCartBtn = card.querySelector('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (typeof addToCart === 'function') {
                    addToCart(product.id);
                }
            });
        }
        
        return card;
    },
    
    // Randează controalele de paginare
    renderPagination(totalItems) {
        if (!Elements.paginationContainer) return;
        
        const { currentPage, itemsPerPage } = AppState;
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        
        // Curăță containerul de paginare
        Elements.paginationContainer.innerHTML = '';
        
        if (totalPages <= 1) return;
        
        // Creează containerul de paginare
        const pagination = document.createElement('div');
        pagination.className = 'pagination';
        
        // Butonul de pagină anterioară
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                AppState.setState({ currentPage: currentPage - 1 });
                this.renderPaginatedGrid();
            }
        });
        pagination.appendChild(prevBtn);
        
        // Butoanele de pagină
        for (let i = 1; i <= totalPages; i++) {
            // Afișează doar primele, ultimele și cele din jurul paginii curente
            if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
                const pageBtn = document.createElement('button');
                pageBtn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
                pageBtn.textContent = i;
                pageBtn.addEventListener('click', () => {
                    AppState.setState({ currentPage: i });
                    this.renderPaginatedGrid();
                });
                pagination.appendChild(pageBtn);
            } else if (i === currentPage - 2 || i === currentPage + 2) {
                const dots = document.createElement('span');
                dots.className = 'pagination-dots';
                dots.textContent = '...';
                pagination.appendChild(dots);
            }
        }
        
        // Butonul de pagină următoare
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                AppState.setState({ currentPage: currentPage + 1 });
                this.renderPaginatedGrid();
            }
        });
        pagination.appendChild(nextBtn);
        
        Elements.paginationContainer.appendChild(pagination);
    }
};

// ==========================================
// 6. EVENT HANDLERS
// ==========================================

const EventHandlers = {
    // Inițializează event handlers
    init() {
        // Event handler pentru schimbarea categoriei
        document.addEventListener('categoryChanged', (e) => {
            const categoryId = e.detail.categoryId;
            
            // Verifică dacă categoria are subcategorii
            if (SUBCATEGORIES_DATA[categoryId] && SUBCATEGORIES_DATA[categoryId].length > 0) {
                // Afișează subcategoriile
                Renderer.renderSubcategories(categoryId);
            } else {
                // Filtrează produsele direct pe categorie
                AppState.setState({
                    currentCategory: categoryId,
                    currentSubcategory: null,
                    currentPage: 1,
                    filteredProducts: PRODUCTS_DATA.filter(p => p.category === categoryId)
                });
                
                // Afișează produsele
                Renderer.showSubcategory(categoryId, null, Utils.translate(categoryId));
            }
        });
        
        // Event handler pentru schimbarea limbii
        document.addEventListener('languageChanged', (e) => {
            AppState.setState({ currentLanguage: e.detail.language });
            Renderer.renderPaginatedGrid();
        });
        
        // Event handler pentru redimensionarea ferestrei (debounced)
        window.addEventListener('resize', Utils.debounce(() => {
            Renderer.renderPaginatedGrid();
        }, 250));
        
        // Event handler pentru click pe butonul de back
        document.addEventListener('click', (e) => {
            if (e.target.matches('.back-to-categories-btn')) {
                if (Elements.categoryMenu) Elements.categoryMenu.classList.remove('hidden');
                if (Elements.productListContainer) Elements.productListContainer.classList.add('hidden');
            }
        });
    }
};

// ==========================================
// 7. INITIALIZATION
// ==========================================

const App = {
    // Inițializează aplicația
    init() {
        // Inițializează referințele DOM
        Elements.init();
        
        // Inițializează event handlers
        EventHandlers.init();
        
        // Abonează un observator pentru schimbările de stare
        AppState.subscribe((state) => {
            console.log('State changed:', state);
            // Aici se pot adăuga acțiuni suplimentare la schimbarea stării
        });
        
        // Setează starea inițială
        AppState.setState({
            currentCategory: null,
            currentSubcategory: null,
            currentPage: 1,
            filteredProducts: []
        });
        
        console.log('App initialized');
    }
};

// ==========================================
// 8. EXPORTS
// ==========================================

// Pentru compatibilitate cu codul existent
window.App = App;
window.Renderer = Renderer;
window.AppState = AppState;
window.Utils = Utils;

// Funcții pentru compatibilitate cu codul existent
window.renderSubcategories = Renderer.renderSubcategories.bind(Renderer);
window.showSubcategory = Renderer.showSubcategory.bind(Renderer);
window.ensureSubcategoryContainer = Renderer.ensureSubcategoryContainer.bind(Renderer);

// Inițializează aplicația când DOM-ul este gata
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});