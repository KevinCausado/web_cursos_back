require("dotenv").config();

const express = require("express");
const app = express();
const PORT = process.env.PORT;
const course = require("./models/course");
const mongoose = require("mongoose");

app.use(express.json());

app.get("/", () => {
  console.log("testing");
});

mongoose.connect(process.env.MONGO_DB_URL).then(() => {
  console.log("Conectado a la base de datos");
  
  app.listen(PORT, async () => {
    console.log(`Escuchando puerto en ${PORT}`);
  });
});


app.post("/courses", async (req, res) => {
  const { name } = req.body;
  if (name === undefined) {
    res.status(500).json({ ok: false, error: "Debe enviar un name" });
  }

  try {
    await course.create({
      name,
    });
    res.status(201).json({ ok: true });
  } catch (error) {
    res.status(400).json({ ok: false, error });
  }
});

app.get("/courses", async (req, res) => {
  try {
    const courses  = await course.find();
    res.status(200).json({ ok: true, data: courses });
  } catch (error) {
    res.status(404).json({ ok: false, error });
  }
});
