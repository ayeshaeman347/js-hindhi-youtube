// //sigleton
// //jb hm object ko literal ka zariya create kartay hay to singelton nahi banta 
// //jab hm kisi object ko constructor say create kartay hay to singleton banta hay 
// //Object.create(through consructor)


// //object may key and values hotty hay
// //object may hm keys or valyue dono accaress kar sakatya hay
// let mysym=Symbol("key1")
// const jsuser={
//     name:"hitesh",
//     age:13,
//     [mysym]:"mykey1",
//     "full name":"ayesha eman",
//     location:"sialkot",
//     islogggedin:false,
//     lastlogin: ["monday","tuesday"]
// }
// //access object
// console.log(jsuser.age);
// console.log(jsuser["location"])
// //agr ap . use karta hyabto full ame ko access nai kar paya gain
// console.log(jsuser["full name"]);

// //symbol 
// console.log(jsuser[mysym]);
// console.log(typeof mysym);

// //values ko change karna
// jsuser.email="ayesha347@gmail.com"

// //lock karna agr change na karna ho to
// // Object.freeze(jsuser);
// //ab is ka bad changes possible nai
// jsuser.greetings=function (){
//     console.log("hello users")
// }
// console.log(jsuser.greetings())


// //string interputaion 
// jsuser.greetingTwo = function() {
//     console.log(`hello users, ${this.name}`)
// }
// console.log(jsuser.greetingTwo())  // ✅ same naam



let mysym = Symbol("key1")

const jsuser = {
    name: "hitesh",
    age: 13,
    [mysym]: "mykey1",
    "full name": "ayesha eman",
    location: "sialkot",
    islogggedin: false,
    lastlogin: ["monday", "tuesday"]
}

console.log(jsuser.age);
console.log(jsuser["location"])
console.log(jsuser["full name"]);
console.log(jsuser[mysym]);
console.log(typeof mysym);

jsuser.email = "ayesha347@gmail.com"

jsuser.greetings = function() {
    console.log("hello users")
}
jsuser.greetings()  


/
jsuser.greetingTwo function greetinTtwo() {
    console.log(`hello users, ${this.name}`)
};
jsuser.greetingTwo()  // hello users, hitesh

