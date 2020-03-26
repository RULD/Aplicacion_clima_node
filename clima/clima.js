const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6d6af59905eb6938b175e46150cf9bbf&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}