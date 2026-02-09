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

document.addEventListener('DOMContentLoaded', () => {
    const botonesAbrir = document.querySelectorAll('.btn_abrir');
    const botonesCerrar = document.querySelectorAll('.btn_cerrar');
    const overlays = document.querySelectorAll('.modal_overlay');

    // Abrir modal
    botonesAbrir.forEach(btn => {
        btn.addEventListener('click', () => {
            const modalId = btn.getAttribute('data-target');
            document.getElementById(modalId).classList.add('active');
            document.body.style.overflow = 'hidden'; // Evita scroll al fondo
        });
    });

    // Cerrar modal al hacer click en el botón (X)
    botonesCerrar.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal_overlay').classList.remove('active');
            document.body.style.overflow = 'auto'; // Devuelve el scroll
        });
    });

    // Cerrar modal al hacer click fuera de la caja blanca
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal_overlay')) {
            e.target.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});