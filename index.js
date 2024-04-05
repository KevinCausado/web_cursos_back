const dotenv = require ('dotenv').config();
const express = require ('express');
const app = express();
const port = process.env.PORT;

app.get('/',(req,res)=>{
  res.send('Puerto Funcionando');
});

app.listen(port,()=>{
  console.log(`Escuchando puerto en: ${port}`);
});


