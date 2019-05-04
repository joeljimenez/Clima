/*
 * 
 * 
 * 
 */

const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./climaApi/clima');

const getInfo = async(direccion) => {

    try {
        let cord = await lugar.getLugar(direccion);
        let climax = await clima.getClima(cord.latitud, cord.logintud);
        console.log(`El clima para ${direccion} es ${climax.temp} C°`);
    } catch (error) {
        console.log('No se Encontro resultados para ', direccion);
    }

}

getInfo(argv.direccion);