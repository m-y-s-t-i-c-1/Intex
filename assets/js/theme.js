// theme.js — theme toggling

function applyTheme(isDark) {
    try {
        let preferred = typeof isDark === 'boolean' ? isDark : null;
        if (preferred === null) {
            const stored = localStorage.getItem('darkMode');
            if (stored !== null) preferred = (stored === 'true' || stored === '1');
            else preferred = document.body.classList.contains('dark-mode');
        }
        document.body.classList.toggle('dark-mode', preferred);
        localStorage.setItem('darkMode', preferred ? 'true' : 'false');
        if (domElements.themeIcon) {
            domElements.themeIcon.classList.remove('fa-moon', 'fa-sun');
            domElements.themeIcon.classList.add(preferred ? 'fa-moon' : 'fa-sun');
        }
    } catch (err) {
        console.error('applyTheme error:', err);
    }
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-mode');
    applyTheme(!isDark);
}
