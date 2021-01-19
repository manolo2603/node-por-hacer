const argv = require('./config/yargs.js').argv;
const porHacer = require('./por-hacer/por-hacer.js');
console.log(argv);
const color = require('colors')

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        // console.log('aaa: ', tarea);
        break;
    case 'listarf':
        let listadoPorHacerq = porHacer.getListadoFiltro(argv.filtro);
        console.log(listadoPorHacerq.length);
        //console.log(porHacer.getListadoFiltro(argv.filtro));
        for (let tarea of listadoPorHacerq) {
            console.log('==================Por Hacer============='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=============================='.green);
        }

        break;
    case 'listar':
        let listadoPorHacer = porHacer.getListado();
        console.log(listadoPorHacer.length);
        //console.log(listadoPorHacer);
        for (let tarea of listadoPorHacer) {
            console.log('==================Por Hacer============='.green);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado}`);
            console.log('=============================='.green);
        }

        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('comando no reconocido');

}