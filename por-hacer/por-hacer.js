const fs = require('fs');


let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new error('NO se pudo grabar', err)

    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (erro) {
        listadoPorHacer = [];
    }


}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}



const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        if (completado == ('true')) {
            listadoPorHacer[index].completado = true;
        } else {
            listadoPorHacer[index].completado = false;
        }

        guardarDB();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    /* MI SOLUCION
    cargarDB();
    //let elementoEliminado = frutas.splice(pos)
    let borra = listadoPorHacer.findIndex(elemen => elemen.descripcion === descripcion);
    if (borra >= 0) {
        listadoPorHacer.splice(borra, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }*/
    cargarDB();
    let nuevoLIstado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (listadoPorHacer.length === nuevoLIstado.length) {
        return false;
    } else {

        listadoPorHacer = nuevoLIstado;
        guardarDB();
        return true;

    }
}

const getListadoFiltro = (completado) => {
    cargarDB();
    try {
        if (completado == 'true') {
            let listadoFiltrado = listadoPorHacer.filter(com => {
                return com.completado === true
            });
            listadoPorHacer = listadoFiltrado;

            return listadoPorHacer;
        } else if (completado == 'false') {


            let listadoFiltrado = listadoPorHacer.filter(com => {
                return com.completado === false
            });
            listadoPorHacer = listadoFiltrado;

            return listadoPorHacer;
        }
    } catch (err) {
        return err
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
    getListadoFiltro
}