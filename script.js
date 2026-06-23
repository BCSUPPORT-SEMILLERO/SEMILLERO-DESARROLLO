const boton = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
    // 1. Abre o cierra el menú visualmente (tu código original)
    menu.classList.toggle("active");

    // 2. NUEVO: Verifica si el menú quedó abierto (contiene la clase 'active')
    const isOpen = menu.classList.contains("active");

    // 3. NUEVO: Le avisa a los lectores de pantalla el estado real del menú
    boton.setAttribute("aria-expanded", isOpen);
});