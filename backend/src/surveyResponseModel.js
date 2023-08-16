var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var responseSchema = new Schema({
    surveyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Survey',
        required: true
    },
    responses: {
        type: Map,
        of: String,
        required: true
    },
    responseDate: {
        type: Date,
        default: Date.now
    }
}, { collection: "surveyResponses" });

module.exports = mongoose.model('SurveyResponse', responseSchema);
