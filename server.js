import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/database.js";
import Sickness from './models/Sickness.js';
import medicationRoutes from "./routes/medication.route.js"
const app = express();
//res - response req- request
app.get("/", (req,res) => {
res.send("server is ready :D")
});

//allowing the app to receive json from the body (freecodecamp.org, 2024):
app.use(express.json())
//routes - uses the routes class thaat you provide it to determine the route/action (freecodecamp.org, 2024):
app.use("/api/medication" , medicationRoutes);


app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 heelo")
})

//Reference list:

//freecodecamp.org. 2024. MERN Stack Tutorial with Deployment – Beginner's Course. [video online] Available at: https://www.youtube.com/watch?v=O3BUHwfHf84 [Accessed 5 October 2025].