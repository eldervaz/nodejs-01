//const argv = require ("yargs").argv
const argv = require ("./config/yargs").argv
const toDo = require ("./to-do/to-do")


 let comando = argv._[0]

 switch(comando){

    case "create":
        let tarea = toDo.create(argv.descripcion);
        break

    case "getList":
        let list = toDo.getList();

        for (let tarea of list){
            console.log( tarea);
        }
        break

    case "update":
        console.log("update")
        break

        default:
        console.log("Comando no diponible");

 }