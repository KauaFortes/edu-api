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
//delete o curso pelo id
routes.delete('/courses/:id', CoursesController.delete)


// rotas para os insturtores 

//cria um instrutor
routes.post('/instructors', InstructorsController.create);
//edita um instrutor
routes.patch('/instructors/:id', InstructorsController.update);
//deleta um instrutor
routes.delete('/instructors/:id', InstructorsController.delete)
//busca todos os intrutor
routes.get('/instructors', InstructorsController.find);
//busca um intutor por id
routes.get('/instructors/:id', InstructorsController.findById)


// rotas para lessons

//cria uma lessons
routes.post('/lessons', LessonsController.create);
//busca uma lessons pelo id
routes.get('/lessons/:id', LessonsController.findById)
//edita um lessons pelo id
routes.patch('/lessons/:id', LessonsController.update)
//deleta uma lesson pelo id
routes.delete('/lessons/:id', LessonsController.delete)
//busca todos as lessons
routes.get('/lessons', LessonsController.find);

module.exports = routes;

// lessons
// courses
// instructors