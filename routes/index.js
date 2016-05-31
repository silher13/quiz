var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');

//Autoload de rutas que usen :quizId
router.param('quizId', quizController.load); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/author', function(req, res, next) {
  res.render('author');
});
router.get('/quizzes.:format?', quizController.index);
router.get('/quizzes/:quizId(\\d+).:format?', quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);
router.get('/quizzes/new', quizController.new);
router.post('/quizzes', quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);

module.exports = router;
