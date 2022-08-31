const { describe } = require('yargs');

const argv = require('yargs')//Aqui requiero la dependencia 'yargs'
                .options( {//'options' sirve para darle indicaciones a 'yargs' de opciones que podrian existir
                    'b':{//Aca le digo que yo al poner "b" hago referencia a ↓↓↓
                        alias: 'base',//"base", que significa lo mismo que "b"
                        type: 'number',//Que esta opcion es de tipo numero
                        demandOption: true,//Y que es obligatorio que es esté
                        describe: 'Es la base con la que se hace la multiplicacion'
                    },
                    'l':{
                        alias: 'listar',
                        type: 'boolean',
                        default: false,//Valor por defecto, en este caso, false 
                        describe: 'Muestra la tabla completa'
                    },
                    'h':{
                        alias:'hasta',
                        type: 'number',
                        describe: 'El numero hasta cual se hace la multiplicacion'
                    }
                }
                )
                .check((argv) =>{//'check' verifica que se cumplan ciertas condiciones en los argumentos proporcionados
                    if (isNaN(argv.b)) {//Si no es un numero, que largue un error y escriba lo siguiente↓↓↓
                        throw 'La base debe ser un numero';
                    }
                    return true;//Si no, que siga todo como si nada.
                })
                .argv;

module.exports = argv;