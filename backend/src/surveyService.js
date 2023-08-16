var surveyModel = require('./surveyModel');
var surveyResponseModel = require('./surveyResponseModel');

module.exports.saveSurveyService = (surveyDetails, userEmail) => {
    return new Promise(function saveSurveyFun(resolve, reject){
        surveyDetails.createdBy = userEmail;  // Add the user's email to the survey details
        var surveyModelData = new surveyModel(surveyDetails);
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
//for surveys by a specific user
module.exports.getSurveysCreatedByUser = (userEmail) => {
    return new Promise((resolve, reject) => {
        surveyModel.find({ createdBy: userEmail }, (error, surveys) => {
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



//for all surveys
// Add more functions as required, e.g., to fetch all surveys, get a survey by ID, etc.
module.exports.getAllSurveys = () => {
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

module.exports.getSurveysByEmailService = (email) => {
    return new Promise((resolve, reject) => {
        surveyModel.find({ createdBy: email }, (error, surveys) => {
            if (error) {
                console.error("Error fetching surveys by email:", error.message);
                reject(error);
            } else {
                console.log("Fetched surveys by email successfully.");
                resolve(surveys);
            }
        });
    });
};
