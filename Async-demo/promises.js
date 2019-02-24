var p = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{            //Async call can be to database or to any another async operation
        resolve(1);             // reolve is used to returned  the result from async call
        reject(new Error('message')); // reject is used return error 
    },2000);

});

p
    .then((result)=>{console.log(result)})      // then handle the situation 
                                                //when promise oject is in fullfilled state o resolve state
    
  .catch( (err)=>console.log('err:',err.message) )  // catch is to handle when 
                                                    //promise object is in rejected state i,e 