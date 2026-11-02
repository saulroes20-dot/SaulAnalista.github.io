function abrirModal(rutaImagen) {
    const modal = document.getElementById("modalGlobal");
    const imagenGrande = document.getElementById("imagenGlobalContenido");
    
    if (modal && imagenGrande) {
        imagenGrande.src = rutaImagen;
        modal.style.display = "flex";
    }
}

function cerrarModal(event) {
    // Si el navegador pasa el evento del clic, detenemos cualquier acción por defecto
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const modal = document.getElementById("modalGlobal");
    const imagenGrande = document.getElementById("imagenGlobalContenido");
    
    if (modal) {
        modal.style.display = "none";
        if (imagenGrande) {
            imagenGrande.src = ""; // Limpia la imagen
        }
    }
}

// Cerrar si el usuario hace clic en el fondo oscuro
window.addEventListener("click", function(event) {
    const modal = document.getElementById("modalGlobal");
    if (modal && event.target === modal) {
        cerrarModal(event);
    }
});