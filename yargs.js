const {crearArchivo} = require('./helpers/multWithA-A');
const argv = require('./helpers/yargsConfig');
require('colors');
console.clear();

crearArchivo(argv.b, argv.l, argv.h )
                .then(tabla => console.log(`${tabla}, creado`.white.bgGreen))
                .catch(err => console.log(err.black.bgRed));    