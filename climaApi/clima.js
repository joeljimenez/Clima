/**
 * 
 * @param {*} latitud 
 * @param {*} logintud 
 */
const axios = require('axios');

const getClima = async(latitud, logintud) => {
    const key = 'f369635965b00ad16ced5da4da4b9f3b';

    const URLAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${logintud}&units=metric&appid=${key}`

    let data = await axios.get(URLAPI);
    const resp = data.data.main;
    const temp = resp.temp;
    const temp_min = resp.temp_min;
    const temp_max = resp.temp_max;
    return {
        temp,
        temp_min,
        temp_max
    };
}

module.exports = {
    getClima
}