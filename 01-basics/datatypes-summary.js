//kis tara data ko memeory may rkhna or access karna is basis pay 2 types
//primitive nonprimitove/reference type
//primitive have 7 categories they are call by value (changes copy may hoty)
//1.string,2.number,3.boolean,4.null,5.undefined,6.symbol9value ko unique bbnnay  kay liya ),7.big int
//nonprimitive datape/reference type (arrays,objects ,functions )

//jAVASCRipt sttacually typed hay ya dynamically typed hay ??
//typescript const score:number=100
// decimal kay liya bhi datatuype nuber hi hay
//symbol 
let id=Symbol('123')
let anotherid=Symbol('123')
console.log(id===anotherid)
//bigint
const bigNumber=12345678n
//array
const heroes=["ayesha","aqsa","ahsan"];
//object
let myobj={
    name:"ayesha",
    age:13,
}
//function
const myFunction =function(){
    console.log("hello");
    
}
// null ka datatype typeof say object ata ahay
//nonprimitive ka data type object hi hota
console.log(typeof myFunction)
