const fs = require("fs")

const lectura = fs.createReadStream("./file.txt", "utf8")

const escritura = fs.createWriteStream("./nuevo.txt")

var data = "Hello, World!\n";
escritura.write(data, function() {
  // Now the data has been written.
  console.log("update file");
});

lectura.pipe(escritura)

