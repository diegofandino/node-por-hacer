const { error } = require('console');
const fs = require('fs');

let listadoPorHacer = [];

const guardar = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err, data) => {
        if (err) {
            throw new error('No se pudo guardar la información', err);
        }
    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

};

const getListado = () => {
    return require('../db/data.json');
};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardar();

    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });
    console.log(index);

    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardar();
        return true;
    } else {
        return false;
    }

};

const borrar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardar();
        return true;
    } else {
        return false;
    }

};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};