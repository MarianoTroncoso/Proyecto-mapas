const ui = new UI();

// DOCUMENT READY
document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
});

// habilitar busqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    // console.log(buscador.value.length)
    if(buscador.value.length > 5){
        // buscar en la API
        ui.obtenerSugerencias(buscador.value);
    }else{
        // si buscas, y borras el contenido del buscador
        // que te muestre todos de nuevo
        ui.mostrarEstablecimientos();
    }

})