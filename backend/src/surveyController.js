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

module.exports = { saveSurveyController /*, other exported functions */ }
