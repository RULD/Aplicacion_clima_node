const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// console.log(argv.direccion);

const getInfo = async direccion => {
    try {

        let coordenadas = await lugar.getDireccionLatLong(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);
        console.log(`El clima de ${direccion} es de ${temp}ºC`);

    } catch (error) {
        console.log(`Ha ocurrido un error al consultar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion);