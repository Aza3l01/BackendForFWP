const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId, // Ensure _id field is defined
    username:String,
    researchAreas: String // Example field
},{ collection: 'Laboratory' });

// Create a Mongoose model based on the schema
const Detail = mongoose.model('Details2', detailSchema);
module.exports = Detail;