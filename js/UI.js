class UI {
    constructor() {     
        // instancia la API
        this.api = new API();  

        // crear los markers con layerGroup
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();
    }

    inicializarMapa() {
    
      
         // Inicializar y obtener la propiedad del mapa
     
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);

         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);

         return map;

    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            // como es un promise
            .then(datos => {
                // console.log(datos);
                const resultado = datos.respuestaJSON.results;

                // ejecutar funcion para mostrar los pines
                this.mostrarPines(resultado);
            })
    }

    mostrarPines(datos){
        // console.log(datos)
        // limpiar los markers
        this.markers.clearLayers();

        // recorrer los establecimientos
        datos.forEach(dato => {
            // destructuring
            const{latitude, longitude, calle, regular, premium} = dato;

            // crear popup
            const opcionesPopup = L.popup().
                setContent(`
                    <p>Calle: ${calle}</p>
                    <p><b>Regular:</b> $ ${regular}</p>
                    <p><b>Premium:</b> $ ${premium}</p>
                `);

            // agregar el pint
            const marker = new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopup);
            // agregamos el marker a la capa de markers
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }
    // buscador
    obtenerSugerencias(){
        this.api.obtenerDatos()
            .then(datos => {
                // obtener datos
                const resultado = datos.respuestaJSON.results;

                // enviar el json y la busqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda);
            })
    }

    // filtra las sugerencias en base al input
    filtrarSugerencias(resultado, busqueda){
        // filtrar con .filter

        // mostrar pines
    }
}