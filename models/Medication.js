//importing mongoose so we can communicate with mongodb (freecodecamp.org, 2024):
import mongoose from 'mongoose';

//creating the vars that will be stored in the collection (freecodecamp.org, 2024):
const medicationSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  description: [String],
  conditionsTreated: [String],
  dosageMin: Number,
  dosageMax: Number,
  dosageUnit: { type: String, default: 'mg per kg' },
  frequency: String,
  warnings: [String],
  prescriptionRequired: Boolean
});

const Medication = mongoose.model('Medication', medicationSchema);

//Get all medications
Medication.findAll = async () => {
  return await Medication.find({});
};
//finding by the medicine ID
Medication.findById = async (id) => {
  return await Medication.findOne({ id: parseInt(id) });
};
//finding by the coniditons treated
Medication.findByConditionsTreated = async (tempConditionsTreated) => {
  return await Medication.find({ conditionsTreated: tempConditionsTreated });
};

export default Medication;

//Reference list:

//freecodecamp.org. 2024. MERN Stack Tutorial with Deployment – Beginner's Course. [video online] Available at: https://www.youtube.com/watch?v=O3BUHwfHf84 [Accessed 5 October 2025].