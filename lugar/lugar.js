const axios = require('axios');


const getLugar = async(direccion) => {
    let direccionURI = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionURI}`,
        headers: { 'X-RapidAPI-Key': 'f724b6dfbamshfb5492d04d385eap12169djsn5a35a8032d7b' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const name = data.name;
    const latitud = data.lat;
    const logintud = data.lon;

    return {
        name,
        latitud,
        logintud

    }
}

module.exports = {
    getLugar,
}