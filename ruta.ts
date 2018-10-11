import http = require("http")


const s = http.createServer(
    (req: http.IncomingMessage, res: http.ServerResponse) => {
        if (req.url === "/") {
            res.writeHead(200, { "content-type": "text/plain" })
            res.end("Bienvenido al servido ;)")
        }
    }
)


s.listen(3000, () => console.log("Ejecutándose el servidor"))

