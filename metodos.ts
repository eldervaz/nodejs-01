import http = require("http")


const metodosValidos = (metodo):boolean => {
    const metodos = ["get", "post", "put", "delete"]

    if(metodos.indexOf(metodo.toLowerCase() )) return true

    return false
}

const servidor = http.createServer((req:http.IncomingMessage, res:http.ServerResponse)=>{

    const metodo = req.method.toLocaleLowerCase()

    if(metodosValidos(metodo)){

        const ruta = req.url.toLocaleLowerCase()

        if(ruta == "/usuarios"){
            if( metodo == "get"){
                res.writeHead(200, {"content-type":"application/json"})
                res.end([
                    {nombre:"user1", apellido:"p1"},
                    {nombre:"user2", apellido:"p2"}
                ])
            }

            if( metodo == "post"){
                res.writeHead(200, {"content-type":"text/plain"})
                res.end("Usuario insertado")
            }

            if( metodo == "put"){
                res.writeHead(200, {"content-type":"text/plain"})
                res.end("Usuario actualizado")
            }

            if( metodo == "delete"){
                res.writeHead(200, {"content-type":"text/plain"})
                res.end("Usuario eliminado")
            }


        }else{
            res.writeHead(404, {"content-type":"text/plain"})
            res.end("Ruta no encontrada")
        }
        

    }else{
        res.writeHead(405, {"content-type":"text/plain"})
        res.end("Método no permitido")
    }

    
})

servidor.listen(3000, ()=>console.log("Ejecutándose puerto 3000"))
