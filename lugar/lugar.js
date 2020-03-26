const axios = require('axios');



const getDireccionLatLong = async(dir) => {
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(dir)}`,
        headers: { 'x-rapidapi-key': 'faf9c2fd66mshc5a017e5d37bbdbp11711djsn5d6385724b3a' }
    });

    const resp = await instance.get();


    if (resp.data.Results.length === 0) {
        throw new Error(`No ha resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getDireccionLatLong
}