const argv = require ("yargs")
    .command("create", "crear nueva tarea", {
        descripcion:{
            demand:true,
            alias: "d",
            desc: "descripción de la tarea"
        }
    })

    .command("update", "actualizar tarea", {
        descripcion:{
            demand:true,
            alias: "d",
            desc: "descripción de la tarea"
        },
        completado:{
            default: true,
            alias: "c",
            desc: "Tarea completada"
        }
    })

    .command("getList", "listar tareas", {
        descripcion:{
            demand:false,
            alias: "l",
            desc: "descripción de la tarea"
        },
        completado:{
            default: false,
            alias: "c",
            desc: "Tarea completada"
        }
    })

    .help()
    .argv;


 module.exports = {
     argv 
 }   