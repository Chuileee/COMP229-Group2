var express = require('express');
var userController = require('../src/userController');
var surveyController = require('../src/surveyController');
const router = express.Router();
const Survey = require('../src/surveyModel.js');

// Middleware for logging requests
router.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

// User routes
router.post('/signup', userController.saveUserInfoController);
router.post('/login', userController.loginUserInfoController);
router.post('/profile', userController.getUserInfoController);
router.put('/update-profile', userController.updateUserProfileController);

// Survey routes
router.post('/survey', surveyController.saveSurveyController);
router.get('/allSurveys', surveyController.getAllSurveysController);
router.get('/survey/:id', surveyController.getSurveyByIdController);
router.post('/submitResponse', surveyController.saveSurveyResponseController);
router.get('/my-Surveys', surveyController.getSurveysByEmailController);

module.exports = router;
