var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    text: String,
    questiontype: String,
    options: [String]
});

var surveySchema = new Schema({
    surveyName: String,
    questions: [questionSchema],
    startDate: String,
    endDate: String
}, { collection: "surveys" });

module.exports = mongoose.model('Survey', surveySchema);
