const fs = require("fs")

const lectura = fs.createReadStream("./file.txt", "utf8")

const escritura = fs.createWriteStream("./nuevo.txt")
escritura.write('Hello world!\n');
escritura.write('Another line\n');
escritura.end();

lectura.pipe(escritura)

