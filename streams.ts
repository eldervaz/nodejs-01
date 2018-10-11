const fs = require("fs")

const texto = fs.readFileSync("./file.txt",{encoding:"utf8"})

console.log(texto)
