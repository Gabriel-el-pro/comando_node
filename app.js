// recuareds
const argv = require('./confi/yargs').argv;
//const colors = require('colors');
const colors = require('colors/safe');

// esto es lo mismo a lo anterior solo lo pasamos para otra carpeta
/*require('yargs')
    .command('listar', 'imrpimir por consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'genera un archivo con la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
             default: 10
        }
    })
    .help()
    .argv;*/
//const fs = require('fs');
const { crearArchivos, listarTabla } = require('./multiplicar/multiplicar');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivos(argv.base, argv.limite).then(respuesta => console.log(`Archivo creado:`, colors.green(respuesta)))
            .catch((e) => console.log(e));
        break;
    default:
        console.log('comando no reconocido');

}





//let base = "abc";

//console.log(process.argv)

//let argv2 = process.argv;

//console.log(argv2);
//console.log(argv.base)

//console.log('limite', argv.limite)


//let parametro = argv[2]
//let base = parametro.split('=')[1];

//console.log(base)





//crearArchivos(base).then(respuesta => console.log(`Archivo creado: ${respuesta} `))
//   .catch((e) => console.log(e));
/*
let data = "";
for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${base*i}\n`;

}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

    if (err) throw err;

    console.log(`el archivo tabla-${base}.txt ha sido creado`);
});

*/