// this file is used to create the server

//P4RhqjF50Hy6N8lm

const express = require('express');
const noteModel = require('./models/note.model');

const app = express(); //server instance is created

app.use(express.json()); //to parse the json data sent by the client

//notes array vanishes as soon as sever restarts, use database to store permanently
//const notes = []

//api of post method with the name /notes
app.post('/notes', async (req, res) => {
    //console.log(req.body); //to see the data sent by the client
    //notes.push(req.body); //to add the data sent by the client to the notes array

    const data = req.body; 
    await noteModel.create({
        title: data.title,
        description: data.description,
    }); 

    res.status(201).json({ message: 'Note created successfully' }); //to send a response to the client
})

//api of get method with the name /notes
app.get('/notes', async (req, res) => {

    const notes = await noteModel.find();

    res.status(200).json({
        message: 'Notes retrieved successfully',
        notes: notes //to send the notes array to the client
    })
})

//api of delete method with the name /notes/:index
//:index denotes a parameter that will be passed in the url (dynamic)
app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id; //to get the index from the url

    await noteModel.findOneAndDelete({
         _id: id 
    });

    res.status(200).json({
        message: 'Note deleted successfully',
    })
})

//api of patch method with the name /notes/:index
app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const description = req.body.description; //to get the description from the request body

    await noteModel.findOneAndUpdate({_id: id}, {description: description});

    res.status(200).json({
        message: 'Note updated successfully',
    })
})


module.exports = app;