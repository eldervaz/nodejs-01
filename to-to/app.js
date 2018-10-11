//const argv = require ("yargs").argv

const argv = require (" ./config/yargs").argv

 console.log(argv)


 let comando = argv._[0]

 switch(comando){

    case "create":
        console.log("crear tarea")
        break

    case "list":
        console.log("listar tareas")
        break

    case "update":
        console.log("crear")
        break

        default:
        console.log("Comando no diponible");

 }