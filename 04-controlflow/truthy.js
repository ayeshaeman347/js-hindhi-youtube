
//truthy vale
let useremail="user@example.com"
if(useremail){
    console.log("User email is valid");
}
else{
    console.log("User email is invalid");
}
//falsy value
//false=.0,-0,bigint0n,"",null,undefined,nan=.these are falsy value
//truthy values=> "0","false"," ",[],{},function(){} these are truthy values
// const emptyobject={}
// if(Object.keys(emptyobject).length===0){
//     console.log("Object is empty");
// }
//Nullish coalescing operator?
let val1;
val1=5 ?? 10
val1=null??10
val1=undefined??20
val1=null??50??60
console.log(val1);

//terniary operator
condition ? value1:value2
let iceprice=90
isiceprice>100 ? console.log("yes") :console.log("n0");