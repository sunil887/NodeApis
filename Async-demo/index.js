console.log('before');

async function getRepos(){
    const user = await getuser(1);
    const getRepos = await getRepository(user.username);
    console.log('repos are :',getRepos);
}    

getRepos();

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

