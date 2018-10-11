const fs = require("fs")

let list:any = []

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
    loadData();
    return list;
}

const update = (descripcion, completado = true)=>{

    loadData();

    let index = list.findIndex( tarea => tarea.descripcion === descripcion)

    if(index >= 0){
        list[index].completado = completado;
        saveData();
        return true
    }else{
        return false;
    }


}

module.exports = {
    create, getList, update
}