const fs = require("fs")

let list = []

const saveData = ()=>{

    let data = JSON.stringify(list);

    fs.write("db/data.json", data, (error)=>{
        if(error)throw new Error(error)
    })

}

const create =  (descripcion)=>{

    let toDo = {
        descripcion,
        completado: false
    }

    list.push ( toDo )
    saveData()
    return toDo;
}

module.exports = {
    create
}