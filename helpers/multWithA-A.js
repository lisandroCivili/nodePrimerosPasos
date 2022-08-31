const fs = require('fs');

let salida, forConsole = '';

const crearArchivo = async(base, listar, hasta=10) =>{

    try {
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            forConsole += `${base}`+'x'.yellow+`${i}`+ '='.green+ `${base * i}\n`.blue;
        }
        if (listar) {
            console.log('================='.rainbow);
            console.log('  Tabla del:'.random, base);
            console.log('================='.rainbow);        
            console.log(forConsole);  
        }
    
        fs.writeFileSync(`./resultadosMult/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}