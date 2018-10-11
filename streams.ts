const fs = require("fs")

const lectura = fs.createReadStream("./file.txt", "utf8")
const escritura = fs.createWriteStream("./nuevo.txt")

lectura.on("data", chunk => {
    escritura.write(chunk)
    escritura.write("Hola Mundo \n")
})

lectura.on("end", () => {
	console.log("streaming completo")
})

/*


var data = "Hello, World!\n";
escritura.write(data, function() {
  // Now the data has been written.
  console.log("update file");
});

lectura.pipe(escritura)
*/
