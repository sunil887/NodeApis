console.log('before');

        getuser(1)
                    .then( result =>{console.log('hello');getRepository(result.username)})
                    .then( repos =>console.log('repos are :',repos))
                    .catch(err=> console.log(err));
    


function getuser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('reading from database........')
            resolve({id:id , username:"sunil"});
        }, 5000);
    });
}


function getRepository(username){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('reading from repository')
            resolve(['repos1','repos2','repos3']);  
        }
         ,3000);
    })
}

console.log('after');

