const fs = require("fs")

const lectura = fs.createReadStream("./file.txt", "utf8")
const escritura = fs.createWriteStream("./nuevo.txt")

lectura.on("data", chunk => {
    escritura.write(chunk)
    escritura.write("Hola Mundo \n")
    escritura.write("Esta es una prueba \n")
})

lectura.on("end", () => {
	console.log("streaming completo")
})

/*
lectura.pipe(escritura)
*/
