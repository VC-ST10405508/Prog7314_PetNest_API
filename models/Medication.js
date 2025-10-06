// models/Medication.js
import mongoose from 'mongoose';

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

// Static methods
Medication.findAll = async () => {
  return await Medication.find({});
};

Medication.findById = async (id) => {
  return await Medication.findOne({ id: parseInt(id) });
};

Medication.findByPetType = async (petType) => {
  return await Medication.find({ petTypes: petType });
};

export default Medication;