import express from 'express';
import Medication from '../models/medication.js';
import mongoose from 'mongoose';
const router = express.Router();


//creating the post for medication (freecodecamp.org, 2024):
router.post("/", async (req,res) => {
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

//creating a method to get all medications (freecodecamp.org, 2024):
router.get("/", async (req, res) => {
    try
    {
    const medications = await Medication.find({});
    res.status(201).json({success:true, data: medications })
    }
    catch(error){
        res.status(500).json({success: false, message: "Error occured: " +error})
    }
});

// Get medication(s) by partial name (freeCodeCamp, 2024)
router.get("/:medicationName", async (req, res) => {
  try {
    const medicationName = req.params.medicationName;

    // Use case-insensitive regex for partial match
    const medications = await Medication.find({
        //i = ignore case so that we can find it regardless of capital/lower letters
      name: { $regex: medicationName, $options: "i" } 
    });

    if (!medications || medications.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No medications found matching "${medicationName}".`
      });
    }

    res.status(200).json({
      success: true,
      count: medications.length,
      data: medications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error occurred: " + error.message
    });
  }
});

// Dosage calculator for specific medication
router.get("/:medicationName/dosage", async (req, res) => {
    try {
        const medicationName = req.params.medicationName;
        // weightUnit defaults to 'kg'
        const { weight, weightUnit = 'kg' } = req.query; 
        
        // Validate required parameters
        if (!weight) {
            return res.status(400).json({
                success: false,
                message: "Weight parameter is required"
            });
        }

        const weightNum = parseFloat(weight);
        if (isNaN(weightNum) || weightNum <= 0) {
            return res.status(400).json({
                success: false,
                message: "Weight must be a positive number"
            });
        }

        // Find medication (freecodecamp.org, 2024):
        const medication = await Medication.findOne({ name: medicationName });
        if (!medication) {
            return res.status(404).json({
                success: false,
                message: "Medication not found"
            });
        }

        // Check if medication has dosage information
        if (!medication.dosageMin || !medication.dosageMax) {
            return res.status(400).json({
                success: false,
                message: "Dosage information not available for this medication"
            });
        }

        // Convert weight to kg if needed. Medicine gives dosage recommendations on mg/kg from db(NIST, 2025):
        let weightInKg = weightNum;
        if (weightUnit.toLowerCase() === 'lb' || weightUnit.toLowerCase() === 'lbs') {
            weightInKg = weightNum * 0.453592;
        }

        // Calculate dosage range 
        const minDosage = (medication.dosageMin * weightInKg).toFixed(2);
        const maxDosage = (medication.dosageMax * weightInKg).toFixed(2);
        //getting the dosage recommendation from the database 
        const dosageUnit = medication.dosageUnit || 'mg';

        //sending the response back to the user if succesful
        res.status(200).json({
            success: true,
            data: {
                medication: medication.name,
                animalWeight: {
                    value: weightNum,
                    unit: weightUnit
                },
                calculatedDosage: {
                    min: `${minDosage}`,
                    max: `${maxDosage}`,
                    frequency: medication.frequency,
                    dosagePerKg: {
                        min: medication.dosageMin,
                        max: medication.dosageMax,
                        unit: medication.dosageUnit
                    }
                },
                warnings: medication.warnings,
                prescriptionRequired: medication.prescriptionRequired
            }
        });
        //catching any errors and returning them
    } catch(error) {
        console.error("Dosage calculation error:", error);
        res.status(500).json({
            success: false,
            message: "Error occurred during dosage calculation: " + error.message
        });
    }
});

export default router;

//Reference list:

//freecodecamp.org. 2024. MERN Stack Tutorial with Deployment – Beginner's Course. [video online] Available at: https://www.youtube.com/watch?v=O3BUHwfHf84 [Accessed 5 October 2025].

//NIST. 2025. SI Units. [Online]. Available at: https://www.nist.gov/pml/owm/metric-si/si-units [Accessed 6 October 2025].
//MongoDB. 2025. $regex. [Online]. Available at: https://www.mongodb.com/docs/manual/reference/operator/query/regex/ [Accessed 6 October 2025].