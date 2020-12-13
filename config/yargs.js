const opt = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
};

const argv = require('yargs')
    .command('crear', 'Se crea una nueva nota', opt)
    .command('borrar', 'Se eliminar una nota existente', opt)
    .command('actualizar', 'Actualizará el estado del objeto', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            demand: true,
            alias: 'c',
            default: true
        }
    }).argv;

module.exports = {
    argv
};