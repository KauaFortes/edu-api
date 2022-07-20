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
//edita um curso
routes.patch('/courses/:id', CoursesController.update)
//busca todos os cursos
routes.get('/courses', CoursesController.find);
//busca um curso pelo id
routes.get('/courses/:id', CoursesController.findById)


// rotas para os insturtores 

//cria um instrutor
routes.post('/instructors', InstructorsController.create);
//editar um instrutor
routes.patch('/instructors/:id', InstructorsController.update);


// rotas para lessons

//cria uma lessons
routes.post('/lessons', LessonsController.create);
//busca uma lessons pelo id
routes.get('/lessons/:id', LessonsController.findById)

module.exports = routes;

// lessons
// courses
// instructors