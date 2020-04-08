const ui = new UI();

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
});

// habilitar busqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    if(buscador.value.lenght > 5){
        // buscar en la API
        ui.obtenerSugerencias(buscador.value);
    }
})