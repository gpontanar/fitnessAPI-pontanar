const express = require("express");
const mongoose = require("mongoose");

//Routes Middleware
const workoutRoutes = require("./routes/workout");
const userRoutes = require("./routes/user");


// [SECTION] Environment Setup
require('dotenv').config(); 

const app = express();

// Connecting to MongoDB Atlas
mongoose.connect(process.env.MONGODB_STRING);

// If the connection is successful, output in the console
mongoose.connection.once("open", () => console.log("We're connected to the cloud database"));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

//[SECTION] Backend Routes 
app.use("/workouts", workoutRoutes);
app.use("/users", userRoutes);

if(require.main === module){
    app.listen(process.env.PORT || 4000, () => {
        console.log(`API is now online on port ${ process.env.PORT || 4000 }`)
    });
}

module.exports = {app,mongoose};