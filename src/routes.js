const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const InstructorsController = require('./controllers/InstructorsController');
const LessonsController = require('./controllers/LessonsController');

routes.get('/', IndexController.index);

// rotas para cursos

//cria o curso
routes.post('/courses', CoursesController.create);
//busca todos os cursos
routes.get('/courses', CoursesController.find);
//busca um curso pelo id
routes.get('/courses/:id', CoursesController.findById)



routes.post('/instructors', InstructorsController.create);

routes.post('/lessons', LessonsController.create);

module.exports = routes;

// lessons
// courses
// instructors