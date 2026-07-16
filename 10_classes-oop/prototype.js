let myname="hitesh"
console.log(myname.length)//give 6
let myname2="hitesh      "
console.log(myname2)//give also include space
//may chahty ho truelengh property ho jis jis eter k count dain  last space say nai milay ya to trim say bhi  kar sakty hay lakin hm ana ak proptype bana latay hay
//hm nay propert nai mehthod banana ayya truelength ka 

let myheroes=['thar','spiderman']
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`spidy power ${this.spiderman}`)}
        //mthod kasay access karoo
}


// kiya may khuch asa add kar d ka kay koi bhi object declare ho us ka sath ay access ho jaya ??
Object.prototype.hitesh=function(){
    console.log("hitesh opwer is present in every obj");
}
heropower.hitesh()
let heroes="jdhbhxvh"
heroes.hitesh()//access hoa ga

// agr power sirf array ko do to kiya wo power object k bhi milay gi ya nai
Array.prototype.arrayhitesh=function(){
    console.log("hi hitesh")
}

myheroes.arrayhitesh()
// nai array ko hi kilay gi bass baqi objects ko nai milay gi 



//inheritence
const Teacher={
    makevideo:true
}
const TeacherSupport={
    isAvailable:false
}
const user={
    username:"chai",
    email:"chai@gmail.com"
}
const TAsupport={
    makeAssignment:"js assigment",
    fulltime: true,
    __proto__:TeacherSupport//ap ko Teachersupport may access mil jaya ga 
}
Teacher.__proto__=user
//every obj has instance default properties are avaiable 


//modren syntax
Object.setPrototypeOf(TeacherSupport,Teacher)//inheritence access kar lo


let anotherusername="chaiorcode         "
String.prototype.TrueLength=function(){
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`)
}
anotherusername.TrueLength()
"hitesh" .TrueLength()