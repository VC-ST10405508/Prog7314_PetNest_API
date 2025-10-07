import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/database.js";
import Medication from './models/medication.js';
import Sickness from './models/Sickness.js';

const app = express();

//allowing the app to receive json from the body (freecodecamp.org, 2024):
app.use(express.json())
//res - response req- request
app.get("/", (req,res) => {
res.send("server is ready :D")
});

app.post("/api/medication", async (req,res) => {
    const medication = req.body;
    if(!medication.name && !medication.description && !medication.conditionsTreated && !medication.dosageMin && !medication.dosageMax && !medication.frequency && !medication.warnings && !medication.prescriptionRequired)
    {
        res.send = "All fields are required";
    }

    const newMedicine = new Medication(medication);

    try
    {
        await newMedicine.save();
        res.status(201).json({ success: true, data: newMedicine});
    }
    catch(error)
    {
        console.log("Error occured: " + error);
        res.status(500).json({success: false, message: "server error"});
    }
});
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000 heelo")
})