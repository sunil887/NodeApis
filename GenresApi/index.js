const express = require('express');
const app = express();
const genres = require('./genres');
const mongoose = require('mongoose');

const uri = 'mongodb://localhost/genres'

mongoose.connect(uri,{ useNewUrlParser: true }) // better method
    .then(result => console.log('connected..'))		 						    // connect return promise
    .catch(err => console.log('not connected'))



app.use('/api/genres/',genres);

var port = process.env.port || 3000;
app.listen(port,()=>{
    console.log('listening on port...... :',port);
})
