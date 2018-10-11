//const argv = require ("yargs").argv
const argv = require ("./config/yargs").argv
const toDo = require ("./to-do/to-do")


 let comando = argv._[0]

 switch(comando){

    case "create":
        //console.log("crear tarea")
        let tarea = toDo.create(argv.descripcion);
        //console.log(tarea)
        break

    case "list":
        //console.log("listar tareas")
        let list = toDo.getList();
        break

    case "update":
        console.log("update")
        break

        default:
        console.log("Comando no diponible");

 }