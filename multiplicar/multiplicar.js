// recuareds

const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('======================='.red);
    console.log(`listar tabla ${base}`.green);
    console.log('======================='.blue);
    let data = "";
    for (let i = 1; i <= limite; i++) {
        console.log(data = `${base} * ${i} = ${base*i}\n`);

    }
}





let crearArchivos = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido ${base} no es un numero`);
            return;
        }


        let data = "";
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;

        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
            //console.log(`el archivo tabla-${base}.txt ha sido creado`);
        });
    })
}

module.exports = {
    crearArchivos,
    listarTabla
}