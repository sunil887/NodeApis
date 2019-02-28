const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
            .then(result=>console.log('connected..'))
            .catch(err=>console.log('not conneted...'))

const schema = {

    id:String,
    tags:[String],
    date: {type:Date,default:Date.now},
    name:String,
    author: String,
    isPublished: Boolean,
    price : Number,
    _v : Number
};
const mongooseSchema = mongoose.Schema(schema);
const Courses = mongoose.model('Courses',mongooseSchema);

async function displayCourses(){
    const Course =  await Courses
                                .find({isPublished:true})
                                .or([{price:{$gte:15}},{name:/.*by.*/i}])
                                //
                                .select({name:1,author:1,tags:1})
                                
    console.log('courses are ',Course);
}

displayCourses();


