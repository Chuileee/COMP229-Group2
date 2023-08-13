var surveyModel = require('./surveyModel');
console.log("Constructed survey data for saving:", surveyModelData);

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
