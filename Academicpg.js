const mongoose = require('mongoose');

// Define the schema
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    course: String
},{ collection: 'Academicpg' });

// Create a model from the schema
const Department = mongoose.model('Department27', departmentSchema);
module.exports = Department;