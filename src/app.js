// this file is used to create the server

const express = require('express');

const app = express(); //server instance is created

app.use(express.json()); //to parse the json data sent by the client

//notes array vanishes as soon as sever restarts, use database to store permanently
const notes = []

//api of post method with the name /notes
app.post('/notes', (req, res) => {
    //console.log(req.body); //to see the data sent by the client
    notes.push(req.body); //to add the data sent by the client to the notes array

    res.status(201).json({ message: 'Note created successfully' }); //to send a response to the client
})

//api of get method with the name /notes
app.get('/notes', (req, res) => {
    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes //to send the notes array to the client
    })
})

//api of delete method with the name /notes/:index
//:index denotes a parameter that will be passed in the url (dynamic)
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index; //to get the index from the url

    delete notes[index]; //to delete the note at the given index from the notes array

    res.status(200).json({
        message: 'Note deleted successfully',
    })
})

//api of patch method with the name /notes/:index
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const description = req.body.description; //to get the description from the request body

    notes[index].description = description; //to update the description of the note at the given index

    res.status(200).json({
        message: 'Note updated successfully',
    })
})


module.exports = app;