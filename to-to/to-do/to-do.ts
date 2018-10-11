const fs = require("fs")

let list = []

const saveData = ()=>{

    let data = JSON.stringify(list);

    fs.writeFile("db/data.json", data, (error)=>{
        if(error)throw new Error(error)
    })

}

const loadData = () => {
    list = require("../db/data.json")
}

const create =  (descripcion)=>{

    try {
        loadData()    
    } catch (error) {
        list = []
    }
    

    let toDo = {
        descripcion,
        completado: false
    }

    list.push ( toDo )
    saveData()
    return toDo;
}

const getList = ()=>{
    console.log("call getList")
}

module.exports = {
    create, getList
}