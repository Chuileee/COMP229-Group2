var surveyService = require('./surveyService');

var saveSurveyController = async(req, res) => {
    console.log("saveSurveyController called!");
    
    // Get user's email from request
    const userEmail = req.user.email;

    // Add the email to the survey details
    req.body.createdBy = userEmail;

    // Check if _id is an empty string and remove it
    if (req.body._id === "") {
        console.log("Removing empty _id");
        delete req.body._id;
    }
    
    try{
        var status = await surveyService.saveSurveyService(req.body);

        if(status){
            res.send({"status": true, message: "Survey saved Successfully."});
        }else{
            res.send({"status": false, message: "Error in saving Survey."});
        }
    }catch(error){
        console.log(error);
        res.send({"status": false, message: "Exception occurred while saving survey."});  // Added this line to ensure a response is sent to the client even on exceptions
    }
    console.log("Received survey data:", req.body);
}


// Add more functions as required, e.g., to handle requests to fetch all surveys, get a survey by ID, etc.
var getAllSurveysController = async(req, res) => {
    try {
        // Extracting user email from request. Adjust this line if you store user info differently.
        

        // Query the database for surveys created by this user
        const surveys = await surveyService.getAllSurveys();

        res.status(200).send(surveys);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching user surveys', error: error.message });
    }
}




// Inside surveyController.js
const Survey = require('./surveyModel.js');  // Update the path if necessary

var getSurveyByIdController = async (req, res) => {
    try {
        const survey = await Survey.findById(req.params.id);
        if (!survey) {
            return res.status(404).send({ message: 'Survey not found' });
        }
        res.status(200).send(survey);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching survey', error: error.message });
    }
};

var saveSurveyResponseController = async(req, res) => {
    console.log("saveSurveyResponseController called!");
    
    try{
        var status = await surveyService.saveSurveyResponseService(req.body);

        if(status){
            res.send({"status": true, message: "Response saved Successfully."});
        }else{
            res.send({"status": false, message: "Error in saving response."});
        }
    }catch(error){
        console.log(error);
        res.send({"status": false, message: "Exception occurred while saving response."});
    }
    console.log("Received survey response:", req.body);
}

var getSurveysByEmailController = async (req, res) => {
    try {
        // Assuming req.user.email contains the currently logged-in user's email
        const userEmail = req.user.email;

        // Query the database for surveys created by this user
        const surveys = await surveyService.getSurveysByEmailService(userEmail);

        res.status(200).send(surveys);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching surveys by email', error: error.message });
    }
};


module.exports = { saveSurveyController, getAllSurveysController, getSurveyByIdController, saveSurveyResponseController, getSurveysByEmailController };

