var surveyModel = require('./surveyModel');

module.exports.saveSurveyService = (surveyDetails) => {
    return new Promise(function saveSurveyFun(resolve, reject){
        var surveyModelData = new surveyModel(surveyDetails);  // you can pass the entire body if it aligns with your model

        surveyModelData.save(function resultHandle(error, result){
            if(error){
                reject(false);
            }else{
                resolve(true);
            }
        });
    });
}

// Add more functions as required, e.g., to fetch all surveys, get a survey by ID, etc.
