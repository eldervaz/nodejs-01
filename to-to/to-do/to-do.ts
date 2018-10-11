const fs = require("fs")

let list = []

const create =  (descripcion)=>{

    let toDo = {
        descripcion,
        completado: false
    }

    list.push ( toDo )

    return toDo;
}

module.exports = {
    create
}