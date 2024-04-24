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

  async getCourse(req, res) {
    try {
      const result = await Course.findById(req.params.id);
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

  async UpdateCourse(req, res) {
    try {
      const result = await Course.findByIdAndUpdate(req.params.id,req.body,{new:true})
      res.status(200).json({message:'Registro actualizado exitosamente',data:result});
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
