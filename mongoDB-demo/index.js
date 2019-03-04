const mongoose = require('mongoose');
const Joi = require('joi');
mongoose.connect('mongodb://localhost/playground')  
        .then(result => console.log('connected..'))		 						    // connect return promise
        .catch(err => console.log('not connected'))
        
const MongooseSchema = {
    name : {type :String,required:true},
    author: String,
    tags:[String],
    date: {type:Date,default:Date.now},
    isPublished:Boolean
}

const JoiSchema = {
    name : Joi.string().required()
}

const courseSchema = mongoose.Schema(MongooseSchema);
const Course  = mongoose.model('Course',courseSchema); // singular name of collection,Document schema both in DB // compiling it to mode which gives a classl

const course = new Course({
    name:'coffeescript',
    author:'mosh',
    tags:['angular 2','fron0tend'],
    isPublished: false
});

async function createCourseByJoiVaidation(){
        const result = Joi.validate(course,JoiSchema);
        //console.log('result:');
        if(result.error)
        {
            resultinmongo =  await course.save();
            console.log(result);
        }
        else
            console.log('error in schema');
    }
//createCourseByJoiVaidation();

async function createCourseByMongooseVaidation(){
    //const result = Joi.validate(course,JoiSchema);
    //console.log('result:');
    try{
        result =  await course.save();
        console.log(result);
    }
    catch(ex)
    {
        console.log(ex.message);
    }
}
createCourseByMongooseVaidation();
/*
async function getCourses(){
    courses = await Course
                        .find()
                        .sort({name:1}) 
                        .count();
    console.log(courses);
}
getCourses();*/