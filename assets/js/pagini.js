// pagini.js — page-specific initialization

function initializeAccordion() {
    document.querySelectorAll('.accordion-header').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.parentNode;
            const content = button.nextElementSibling;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                    activeItem.querySelector('.accordion-content').style.maxHeight = 0;
                }
            });

            item.classList.toggle('active', !isActive);
            content.style.maxHeight = isActive ? 0 : content.scrollHeight + "px";
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeAccordion();
});
