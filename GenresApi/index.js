const express = require('express');
const app = express();
const genres = require('./genres');
const mongoose = require('mongoose');

const uri = 'mongodb://localhost/genres'

mongoose.connect('mongodb://localhost/vidly') // better method
    .then(result => console.log('connected..'))		 						    // connect return promise
    .catch(err => console.log('not connected'))

     
//const genres = Genre
app.use('/api/genres/',genres);

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log('listening on port...... :',port);
})
