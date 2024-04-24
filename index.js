require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const router = require ('./routes');
const cors = require ('cors');

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Conectado a la base de datos");

    app.listen(process.env.PORT, () => {
      console.log(`Escuchando en puerto: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error al conectarse: ${err.message}`);
  });

//CORS
  const corsOptions = {
    origin:'http://localhost:3000',
    optionSuccessStatus:200
  }

  app.use(cors(corsOptions));


  //Midleware
  app.use(express.json());

  //Rutas
  app.use('/api',router);
  

 