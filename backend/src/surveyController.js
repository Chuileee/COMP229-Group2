var surveyService = require('./surveyService');

var saveSurveyController = async(req, res) => {
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
}

// Add more functions as required, e.g., to handle requests to fetch all surveys, get a survey by ID, etc.

module.exports = { saveSurveyController /*, other exported functions */ }
