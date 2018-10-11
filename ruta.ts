import http = require("http")


const s = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/html" })
            res.write("<h1>Bienvenido al servido ;)</h1>")
            res.end("<p>Estamos para servirte</p>")
        }else{
            res.writeHead(200, { "content-type": "text/html" })
            res.write("<head><meta charset='UTF-8'></head>")
            res.write("<h1>¿estás perdido?</h1>")
            res.end("<p>Esta página no está disponible</p>")
        }
    }
)


s.listen(3000, () => console.log("Ejecutándose el servidor"))

