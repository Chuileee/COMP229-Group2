var surveyService = require('./surveyService');

var saveSurveyController = async(req, res) => {
    console.log("saveSurveyController called!");
    
    try{
        var status = await surveyService.saveSurveyService(req.body);

        if(status){
            res.send({"status": true, message: "Survey saved Successfully."});
        }else{
            res.send({"status": false, message: "Error in saving Survey."});
        }
    }catch(error){
        console.log(error);
    }
    console.log("Received survey data:", req.body);
}

// Add more functions as required, e.g., to handle requests to fetch all surveys, get a survey by ID, etc.
var getAllSurveysController = async(req, res) => {
    try {
        const surveys = await surveyService.getAllSurveysService();
        res.status(200).send(surveys);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching all surveys', error: error.message });
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

module.exports = { saveSurveyController, getAllSurveysController, getSurveyByIdController };

