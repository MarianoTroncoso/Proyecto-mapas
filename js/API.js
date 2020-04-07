class API{
    // COMO ES ASYNC TENES QUE PONER .THEN DONDE LO LLAMES
    async obtenerDatos(){
        const total = 11000;
        // obtener los datos desde la API
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // retornar datos como json
        const respuestaJSON = await datos.json();

        return {
            respuestaJSON
        }
    }
}