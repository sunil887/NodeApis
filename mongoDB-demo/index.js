const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')  
        .then(result => console.log('connected..'))		 						    // connect return promise
        .catch(err => console.log('not connected'))
        
const MongooseSchema = {
    name : String,
    author: String,
    tags:[String],
    date: {type:Date,default:Date.now},
    isPublished:Boolean
}

const courseSchema = mongoose.Schema(MongooseSchema);

const Course  = mongoose.model('Course',courseSchema); // singular name of collection,Document schema both in DB // compiling it to mode which gives a classl

async function createCourse(){
        const course = new Course({
            name:'coffeescript',
            author:'mosh',
            tags:['angular 2','frontend'],
            isPublished: false
            
        });

        const result =  await course.save();
        //console.log(result._id);
    }
createCourse();

async function getCourses(){
    courses = await Course
                        .find()
                             
                        .sort({name:1}) //-1 for descending 
                        //.select({name:1,tags:1});
                        .count();
    console.log(courses);
}
getCourses();