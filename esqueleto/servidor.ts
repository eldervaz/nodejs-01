import { Application } from "express"

import express = require("express")

const app:Application = express()

//app.get("/usuarios")


app.listen(3000, ()=>console.log("Servidor puerto 3000"))
