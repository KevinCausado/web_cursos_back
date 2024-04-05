require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const course = require("./models/course");

app.get("/", (req, res) => {
  res.send("Puerto Funcionando");
});

//Conexion base de datos
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  console.log("Conectado a la base de datos");
  app.listen(PORT,async ()=>{
    try {
        const result = await course.create({
          name : "Curso 2 de Programación"
        });
        console.log('Campo subido con exito');
    } catch (error) {
      console.log(error);
    }
    
  })
}).catch(()=> {
  console.log('Error al conectarse a la base de datos')
});


