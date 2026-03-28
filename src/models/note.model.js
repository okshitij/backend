const mongoose = require('mongoose');

//schema defines the structure of the document in the database
const noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

const noteModel = mongoose.model('Note', noteSchema); //to create a model based on the schema, it will be used to perform CRUD operations on the notes collection in the database

module.exports = noteModel; 