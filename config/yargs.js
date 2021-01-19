const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion por hacer'
};

const filtro = {

    alias: 'm',
    desc: 'Marca como completado o pendiente la tarea'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs').command('crear', 'crear una tarea por hacer', {
        descripcion
    }).command('actualizar', 'Actualizar el estado de una tarea', {
        descripcion,
        completado
    }).command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    }).command('listarf', 'filtar completadas y no completadas', {
        filtro
    })
    .help().argv;

module.exports = {
    argv
}