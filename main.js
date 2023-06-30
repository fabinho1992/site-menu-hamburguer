const menuHamburguer = document.querySelector('.hamburguer');

menuHamburguer.addEventListener('click',()=>{
     let menuMobile = document.querySelector('.menu__hamburguer')
    if(menuMobile.style.display == 'none'){
        menuMobile.style.display = 'block';
    }else{
        menuMobile.style.display = 'none';
    }
    
})