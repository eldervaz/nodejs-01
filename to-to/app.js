//const argv = require ("yargs").argv
const argv = require ("./config/yargs").argv
const toDo = require ("./to-do/to-do")
const colors = require("colors")

 let comando = argv._[0]

 switch(comando){

    case "create":
        let tarea = toDo.create(argv.descripcion);
        break

    case "getList":
        let list = toDo.getList();

        for (let tarea of list){
            console.log ("========================".green)
            console.log( "Tarea: " ,tarea.descripcion );
            console.log( "Estado: " , tarea.completado );
            console.log ("========================".green)
        }
        break

    case "update":
        let update = toDo.update(argv.descripcion, argv.completado);
        console.log(update);
        break

        default:
        console.log("Comando no diponible");

 }