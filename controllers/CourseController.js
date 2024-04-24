const Course = require("../models/course");

module.exports = {
  async getCourses(req, res) {
    try {
      const result = await Course.find();
      res.status(200).json({data:result});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async saveCourses(req, res) {
    try {
      const result = await Course.create(req.body);
      res.status(201).json({message:'Registro creado exitosamente',data:result});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
