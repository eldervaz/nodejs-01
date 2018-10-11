const fs = require("fs")

const lectura = fs.createReadStream("./file.txt", "utf8")

const escritura = fs.createWriteStream("./nuevo.txt")

lectura.pipe(escritura)

