const argv = requiere("yargs").options({
    direccion:{
        alias: "d",
        desc: "direccion de la ciudad",
        demand: true
    }
}).argv;



