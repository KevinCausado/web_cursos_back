const CourseController = require ('./controllers/CourseController');
const express = require ('express');
const router = express.Router();


router.get('/getcourses',CourseController.getCourses);
router.post('/savecourse',CourseController.saveCourses);
router.get('/getcourse/:id',CourseController.getCourse);
router.put('/updatecourse/:id',CourseController.UpdateCourse);

module.exports = router;

