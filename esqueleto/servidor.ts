import { Application, Request, Response } from "express"

import express = require("express")

const app:Application = express()

app.get("/usuarios", (req:Request, res:Response)=>{
    res
        .json([
            {nombre: "user1"}
        ])
})


app.listen(3000, ()=>console.log("Servidor puerto 3000"))
