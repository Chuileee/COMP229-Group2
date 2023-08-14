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


// Survey routes
router.post('/survey', surveyController.saveSurveyController);  // Changed route to be more RESTful

//Define the POST route for saving a survey
router.post('/saveSurvey', async (req, res) => {
    try {
        const survey = new Survey(req.body);
        await survey.save();
        res.status(200).send(survey);
    } catch (error) {
        res.status(500).send({ message: 'Error saving survey', error: error.message });
    }
});

router.get('/allSurveys', surveyController.getAllSurveysController);
router.get('/survey/:id', surveyController.getSurveyByIdController);

module.exports = router;
