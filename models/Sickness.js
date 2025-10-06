import mongoose from 'mongoose';

const sicknessSchema =  mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    description: String,
    symptoms: String
});

const Sickness = mongoose.model('Sickness', sicknessSchema);

Sickness.findBySymptoms = async ();