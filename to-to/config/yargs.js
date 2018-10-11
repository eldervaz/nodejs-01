const descripcion ={
    demand:true,
    alias: "d",
    desc: "descripción de la tarea"
}

const completado = {
    default: true,
    alias: "c",
    desc: "Tarea completada"
}


const argv = require ("yargs")
    .command("create", "crear nueva tarea", {
        descripcion: descripcion,
        completado: completado
    })

    .command("update", "actualizar tarea", {
        descripcion: descripcion
    })

    .command("getList", "listar tareas", {
        descripcion:{
            demand:false,
            alias: "d",
            desc: "descripción de la tarea"
        }
    })

    .command("remove", "Eliminar tareas", {
        descripcion: descripcion
    })

    .help()
    .argv;


 module.exports = {
     argv 
 }   