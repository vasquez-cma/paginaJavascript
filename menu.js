const hamburger = document.querySelector('.header__icon');
const menu = document.querySelector('.navegacion');

hamburger.addEventListener('click',()=>{
    menu.classList.toggle('spread');
});

// window.addEventListener('click', e=>{
//     if(menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
//         menu.classList.toggle('spread');
//     }
// })