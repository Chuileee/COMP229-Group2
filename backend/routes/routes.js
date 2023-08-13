var express = require('express');
var userController = require('../src/userController');
var surveyController = require('../src/surveyController');
const router = express.Router();

router.route('/user/save').post(userController.saveUserInfoController);
router.route('/user/login').post(userController.loginUserInfoController);

router.post('/saveSurvey', surveyController.saveSurveyController);

module.exports = router;
