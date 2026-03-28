const mongoose = require('mongoose'); //connect server to database

async function connectDB() {
    await mongoose.connect("mongodb+srv://bruh:P4RhqjF50Hy6N8lm@backenddemo.jonavi5.mongodb.net/halley")

    console.log("Connected to database")
}

module.exports = connectDB;