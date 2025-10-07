//importing mongoose so we can communicate with mongodb (freecodecamp.org, 2024):
import mongoose from 'mongoose';

//creating the vars that will be stored in the collection (freecodecamp.org, 2024):
const sicknessSchema = new mongoose.Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true},
    description: String,
    symptoms: String
});

const Sickness = mongoose.model('Sickness', sicknessSchema);

export default Sickness;

//Reference list:

//freecodecamp.org. 2024. MERN Stack Tutorial with Deployment – Beginner's Course. [video online] Available at: https://www.youtube.com/watch?v=O3BUHwfHf84 [Accessed 5 October 2025].