const menuToggle = document.querySelector('.hamburger');
menuToggle.addEventListener('click', menu);

function menu() {
    let showMenu = document.querySelector('.navigation');
    showMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    if(menuToggle.classList.contains('active')){
        menuToggle.src = './images/icon-close.svg';
    }else{
        menuToggle.src = './images/icon-hamburger.svg';
    }
}