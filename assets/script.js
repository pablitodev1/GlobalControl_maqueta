
//Funciones para Ocultar/mostrar sidebar en movil
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

// Para mini menu de productos Cerraduras
document.addEventListener('DOMContentLoaded', () => {
    const botonesAbrir = document.querySelectorAll('.btn_abrir');
    const botonesCerrar = document.querySelectorAll('.btn_cerrar');
    const overlays = document.querySelectorAll('.modal_overlay');

    botonesAbrir.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-target');
            document.getElementById(modalId).classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita scroll al fondo
        });
    });

    
    botonesCerrar.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal_overlay').classList.remove('active');
            document.body.style.overflow = 'auto'; // Devuelve el scroll
        });
    });

  
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal_overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});