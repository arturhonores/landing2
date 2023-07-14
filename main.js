const menuMobile = document.querySelector('.menu-mobile');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuMobile.classList.remove('oculto');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuMobile.classList.add('oculto');
        menuOpen = false;
    }
});