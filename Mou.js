<<<<<<< HEAD
// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    username: String,
    researchAreas: String // Example field
},{ collection: 'Mou' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Details4', detailSchema);

=======
// Assuming this is your Mongoose model definition
const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    username: String,
    researchAreas: String // Example field
},{ collection: 'Mou' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Details4', detailSchema);

>>>>>>> 08d45ae64c344504e4eb8f124945bf7901e0d92d
module.exports = Detail;