const debug1  = require('debug')('app:startup');
const debug2  = require('debug')('app:debug')
const express = require('express');
const Joi = require('joi');
const morgan = require('morgan');
const log = require('./logger');
const app = express();


console.log(`node env : ${process.env.NODE_ENV}`);
console.log(`app : ${app.get('env')}`);

if(app.get('env') === 'development'){
    app.use(morgan('tiny'));
    debug1('morgan enabled..');
}
debug2('debug2 is here');

app.use(express.json());    

if(app.get('env') == 'production')
    console.log(app.get('env'));

app.use(log.logger);

const courses = [ {Id :1 ,Name: 'chemistry' },
                {Id :2 ,Name: 'physics1' },
                {Id :3 ,Name: 'physics2' }
]

app.get('/',(req,res) => {
    res.send('Hello World!!');
});

app.get('/api/customer/:id',(req,res)=>{
    const course = courses.find(c=>c.Id === parseInt(req.params.id));
    if(!course)
        res.status(404).send('course with the given id is not present');
        res.send(course);
        res.send(req.params.id);

});

app.post('/api/courses',(req,res)=>{
    const schema = {
        Name:Joi.string().min(3).required()
    }
    const result = Joi.validate(req.body,schema);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    const course = {
        id : courses.length+1,
        Name : req.body.Name
    };
    courses.push(course);
    res.send(course);
});


app.listen(3000,()=>{console.log('listening on port 3000...')});