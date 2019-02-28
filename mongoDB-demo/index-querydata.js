const mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
                .then(result=> console.log('connected....'))
                .catch(result=> console.log('not connected connected....'))


const schema = {
    name : String,
    author: String,
    tags:[String],
    date: {type:Date,default:Date.now},
    isPublished:Boolean
}

const MongooseSchema = mongoose.Schema(schema);
const Course = mongoose.model('Course',MongooseSchema);

async function updateCouse(id){
    const course = await Course.findById(id);
    if(!course)
        return;

    course.isPublished = true;
    course.author = 'another author';

    const result = await course.save();
    console.log(result);
}

async function updateCouseUpdateFirst(id){
    const result = await Course.update({_id:id},{   // second arguement is update object
        $set: {
            author:'mosh after changed',
            isPublished:true
        }
    })
     console.log(result);
}

updateCouseUpdateFirst('5c746cec790c090a10158891');



