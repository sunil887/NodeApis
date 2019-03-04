
const express = require('express');
const router = express.Router();
const Joi = require('Joi');


const schema =  {
    GenreName:Joi.string().required()
}

const genres = [  
    {id:1, GenreName:'Action'},
    {id:2, GenreName:'Comedy'},
    {id:3, GenreName:'Drama'},
    {id:4, GenreName:'Thriller'}
    ];

router.use(express.json());


router.get('/',(req,res)=>{
    res.send(genres);
});

router.get('/:id',(req,res)=>{
    const genre = genres.find((c)=>c.id == parseInt(req.params.id));
    if(!genre)
    res.status(404).send(`genre wih id: ${req.params.id} is not present`);
    res.send(genre);
});

router.post('/',(req,res)=>{
    const validInput = Joi.validate(req.body,schema)

    if(validInput.error)
    res.status(400).send(validInput.error.details[0].message);

    const genre = {
    id: genres.length+1,
    GenreName : req.body.GenreName
    };
    genres.push(genre);
    res.send(`Genre Id: ${genre.id} is added to the Genres with name : ${genre.GenreName}`);
});

router.put('/change/:id',(req,res)=>{
//validate Input
    const validInput = Joi.validate(req.body,schema);

    if(validInput.error)
    res.status(404).send(validInput.error.details[0].message);

    const genre = genres.find(c=>c.id == parseInt(req.params.id));
    if(!genre)
    res.status(400).send(`Bad request... no gnre with id : ${req.param.id} is present`);

    const oldGenreName = genre.GenreName;
    genre.GenreName = req.body.GenreName;

    res.send(`${oldGenreName} is  changed to ${genre.GenreName}`);

});

router.delete('/delete/:id',(req,res)=>{
    const genre = genres.find(c=>c.id == req.params.id);
    if(!genre)
    res.status(404).send(`genre with id : ${req.params.id} is not present`);

    const index = genres.indexOf(genre);
    genres.splice(index,1);
    res.send(genres);
});

module.exports = router;