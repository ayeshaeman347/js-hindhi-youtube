const promiseone=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise one is reolved");
        resolve()//resolve ko then ka sath connect kiya 
    },200)
})
    //
//promise ak object hay
//promise consume ho jata hay consume karna hay
//.then ka relation resolve ka sath 
promiseone.then(function(){
    console.log("promise consumed")
})
//abhi tak resole or then ko connect nai kiya
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("promise two is resolved");
        resolve();

    },1000)
}).then(()=>{
    console.log("promise two is consumed")
})//ab directly isay .then kar sakty ho ku ka kisi variable may stor nai kiay hm nay\
const promisethree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise three is resolved");
        resolve({username:"chain",password:"123"})//resolve say data kar skatay hay .then ko ta kay data miley
    },3000)
})
promisethree
.then((user)=>{
//yaaha reove wlaa data lo gii kasya?
console.log(user)
})
//4th kam
const promisefour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false;//file access nahi ho pai o kiay bolo
        if(!error){
            resolve({username:"hitesh",password:"12345@"})
        }
        else{
            reject('error: something went wrong')
        }
    },1000)

    })
    //promise kasay consume karna 
// const username=promisefour.then((user)=>{
//     console.log(user);
//     return user.username;//ya return kaha ja raha hay kiys may yaaha ak cvoiarable declare karoo 
// }).catch()//nai hm nay kar ka  dajha ap asa nai kar sakta variable ysername  may store nai kara skatay
//sah kam .then ki chaniang kar skatya ho
promisefour
.then((user)=>{
    console.log(user);
    return user.username;
})//.then apnay aglay .then() ko khuch return karaya ga 
.then((username)=>{
    console.log(username)

})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("finally promise is resolved o rejected")
})
const promisefive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;//file access nahi ho pai o kiay bolo
        if(!error){
            resolve({username:"javascript",password:"12345@"})
        }
        else{
            reject('error: JS went wrong')
        }
    },1000)
})
//.then ka ilawa koi or approch async await
async function consumePromisefive(){
    try{
    const response=await promisefive
    console.log(response)
    }
    catch(error){
        console.log(error);

    }
}
consumePromisefive()//yaaha function ko call karna hay
//async await errors ko handle nai lkar saktyy

// async function getAllUser(){
//     try{
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data=await response.json()
//     console.log(data)
//     }
//     catch(error){
// console.log('E: ',error);
//     }
// }
// getAlluser()//ya kam is liya nai kar raha ku kay khuch chezay time latty hay
// async function getAllUser() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");

//         const data = await response.json();

//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUser();
fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
//fetc ku phly kam kar raha