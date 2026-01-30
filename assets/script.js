const navbar = document.getElementById('navbar')
const overlay = document.getElementById('overlay')

function openSidebar(){
    navbar.classList.add('show')
    overlay.classList.add('overlay_show')
}

function closeSidebar(){
    navbar.classList.remove('show')
    overlay.classList.remove('overlay_show')
}