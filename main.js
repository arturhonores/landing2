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



// //menú responsive
// const menuMobile = document.querySelector('.menu-mobile');


// //hamburger button animation
// const menuBtn = document.querySelector('.menu-btn');
// let menuOpen = false;

// menuBtn.addEventListener('click', () => {
//     if (!menuOpen) {
//         menuBtn.classList.add('open');
//         // menuMobile.classList.add('h-full')
//         menuMobile.classList.remove('top-[-100%]')
//         menuOpen = true;

//     } else {
//         menuBtn.classList.remove('open');
//         // menuMobile.classList.remove('h-full')
//         menuMobile.classList.add('top-[-100%]')
//         menuOpen = false;
//     }
// })

// menuBtn.addEventListener('click', () => {
//     menuMobile.classList.toggle('transition-all');
// });