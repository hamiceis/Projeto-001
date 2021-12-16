const btnMobile = document.getElementById('btn-mobile')


function menu() {
    const navList = document.getElementById('navlist')
    navList.classList.toggle('active')
}

function toggleMenu() {
    const nav =  document.getElementById('nav')
    nav.classList.toggle('ativo')
}

btnMobile.addEventListener('click', menu)
btnMobile.addEventListener('click',toggleMenu)

