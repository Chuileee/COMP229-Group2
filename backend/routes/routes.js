var express = require('express');
var userController = require('../src/userController');
var surveyController = require('../src/surveyController');
const router = express.Router();

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

module.exports = router;
