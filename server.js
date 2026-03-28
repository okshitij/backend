//this file starts the server

const { connect } = require('mongoose');
const app = require('./src/app'); //importing the server instance
const connectDB = require('./src/db/db'); //importing the database connection function

connectDB(); //connect to the database

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

