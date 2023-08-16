//import libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/routes');
const cors = require('cors');

// Allow cross-origin requests
app.use(cors({
    origin: "http://localhost:4200"
}));

// Parse incoming JSON
app.use(express.json());

// Add routes middleware
app.use('/', routes);


//connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/survey", { useNewUrlParser: true, useUnifiedTopology: true }, function checkMongoDBconnection(error) {
    if (error) {
        console.log("Error in MongoDB Connection");
    } else {
        console.log("Connected to MongoDB")
    }
});

// Error handling middleware (this should be last)
app.use((err, req, res, next) => {
    console.error('Caught an error: ', err);
    res.status(500).send({ message: 'Internal Server Error' });
});

//start server
app.listen(4000, function check(error) {
    if (error) {
        console.log('Error');
    } else {
        console.log("Server Started");
    }
});
