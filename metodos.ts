import http = require("http")

const servidor = http.createServer((req:http.IncomingMessage, res:http.ServerResponse)=>{

    res.writeHead(200, {"content-type":"text/plain"})
    res.end(req.method)
})

servidor.listen(3000, ()=>console.log("Ejecutándose puerto 3000"))