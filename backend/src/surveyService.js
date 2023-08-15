var surveyModel = require('./surveyModel');
var surveyResponseModel = require('./surveyResponseModel');

module.exports.saveSurveyService = (surveyDetails) => {
    return new Promise(function saveSurveyFun(resolve, reject){
        var surveyModelData = new surveyModel(surveyDetails);  // you can pass the entire body if it aligns with your model
        console.log("Saving the following data:", surveyModelData);

        surveyModelData.save(function resultHandle(error, result){
            if(error){
                console.error("Error while saving to MongoDB:", error.message);
                reject(error);
            } else {
                console.log("Saved survey successfully:", result);
                resolve(true);
            }
        });
        
    });
}

// Add more functions as required, e.g., to fetch all surveys, get a survey by ID, etc.
module.exports.getAllSurveysService = () => {
    return new Promise((resolve, reject) => {
        surveyModel.find({}, (error, surveys) => {
            if (error) {
                console.error("Error fetching all surveys:", error.message);
                reject(error);
            } else {
                console.log("Fetched all surveys successfully.");
                resolve(surveys);
            }
        });
    });
};

module.exports.saveSurveyResponseService = (responseDetails) => {
    return new Promise(function saveSurveyResponseFun(resolve, reject){
        var surveyResponseData = new surveyResponseModel(responseDetails);

        console.log("Saving the following response:", surveyResponseData);

        surveyResponseData.save(function resultHandle(error, result){
            if(error){
                console.error("Error while saving response to MongoDB:", error.message);
                reject(error);
            } else {
                console.log("Saved survey response successfully:", result);
                resolve(true);
            }
        });
        
    });
}