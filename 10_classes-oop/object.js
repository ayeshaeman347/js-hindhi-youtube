function mulbyfive(num){
    return mul*5

}
mylbyfive.power=2//kiya ya ho skata hay?? . access to obkect sath lagta ahy
console.log(mulbyfive(5))
console.log(mulbyfive.power)//yes ya kar sakta ho 2 milta hay
console.log(mulbyfive.prototype)// yes {} return karta 
//hm nay seekha function behave as a function and also as a object
//protype function i bhi propertoed bhi data hay
function createuser(username,score){
    this.username=username
    this.score=score
}
//meray functions declare karna
createuser.prototype.increment=function(){
    this.score++//ya har kisis  ka apss chala jaya ga jo isay bulaya ag ajis any bhi ulaya hay us ak pass jao
}
createuser.prototype.printme=function(){
    console.log(`sore is:${this.score}`);
}
const chai=new createuser("chai",20)
const tea=new createuser("ayesha",40)//new ka baghair property access nai ho gi new ka yahi kam hay
chai.printme()
tea.increment()//yaha problrem ayi hay properties ayi ahy lakin
/*Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/