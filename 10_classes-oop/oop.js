const user={
    username: "hitesh",
    login: 8,
    signedin:true, 
    getUserDetails: function(){
console.log(this.username)
console.log(this)
    }
}//object literal ya sarii properties hay 
const user2={
    username: "hitesh",
    login: 8,
    signedin:true, 
    getUserDetails: function(){
console.log(this.username)
console.log(this)
    }
}//bar bar kam ko roknay ka liya cinstruvctor ka aistamal karayg gain

console.log(user.username)
console.log(user.getUserDetails())
//kasay pata lagao ka current context kiya hay un ka liya this keyword use hota hay
console.log(this)//yaha empty parantheseis aya gi ku aky abh global may khuch nai ahy
const promiseone=new promise()
const date=new Date()
//new cnstructor fun hay ak ho ibjevt literal say mutlple function bana dakatay hao 
//new naya context bannaya ka liya kam ata hay isi ko constructor function khty hay
function user(username,logincunt,isloggedin,){
    //function ka ak hi globak exe cintect hota hay
    //myusername=username; left(variablee)=value
    this.username=username
    this.logincount=logincount
    this.isloggedin=isloggedin
    thsi.greeting=function(){
        console.log("hello")
    }
    return this //
}
// const userOne=user("hitesh",4,true)
// const userTwo=user("hiteshaurcode",5,false)
console.log(userOne)//user two isay override kar dainn ku ka ap nay new nai abnaya
//best const functio ap ko ak naya function data hay

const userOne= new user("hitesh",4,true)
const userTwo=new user("hiteshaurcode",5,false)
console.log(userOne)

//return this likhoo ya na likho ya imlpicity define hota hay
//new
//new keyword likhat hiu empy object create hota hay 
//const function cal hota hay new say arguments pack kar datah hay
//arguments inject hotay hay
//ap ko mil jatay hay

//cons suer ka baraya may refrence hay 
console.log(userOne.constructor)//refrence dtaa hay

//instanceof ya js may sinstanace check karta hay

//  siis amy ap ko encapsulation abstraction dukh raha ahya

