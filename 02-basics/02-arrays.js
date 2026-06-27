//javascript ki array may mixed datae types ho saktay
//array resizweable hotay ak dafa bannay ka bad dobara add kar saktay 
//index start with 0 access rtgrough index
//


//arrays may copy operataion may shallow copy bannata hay
//shallow copy(copy whose prpoperty share the smae reference point cahnage originalnarray may ho ga )

let myArr=[0,1,2,3,40]
let Heroes=["ayesha","smaya"]

//snother declsration method
//here is syntax may [] ki zarooorat nai
const myArr2=new Array(1,2,3,4)

//impoetanat cheze inspect pay array declare karoo to 
//const number=[1,23,24] jb expaand nkroo gain to further proptype bhi atya hay acces .length bhi ,ilty
console.log(myArr2[2]);

//methods of array
//push array may value add karta hay end may
myArr2.push(6)
console.log(myArr2)

//pop last value ko remove kar data hay array may say no need of arguments
myArr2.pop()
console.log(myArr2)

//unshift (array kay start my add hota hay unshift say baqi sab ko ak step agay shift kar data hay)
myArr2.unshift(9)
console.log(myArr2)

//shift(element ko first say remove karta hay first elemet remove kr data)
myArr2.shift()
console.log(myArr2)

//include() kiya ya elelmennt arraya may majood hay?? is ka ans boolean may aya ga 
console.log(myArr2.includes(9));

//agr koi cheze array ay nai hay hm us ka index poch rahay hay to -1 aya ga 
console.log(myArr2.indexOf(9));

//.join kiya karta hay?/ myArr2 to array ki form may hi aya ga join ny hmaraya array ko bind hui kar diya or string may convert ho gayi hay

let newarray=myArr2.join()
console.log(myArr2)
console.log(newarray)

//slice,splice
console.log("A",myArr2)
const myn1=myArr2.slice(1,3)
console.log(myn1)
//jis say hm nay li wo original as it is rahay gi
//slice original array ko as it is rhnay data hay bass copy kar kay new array ,may dalta hay
console.log("B",myArr2)
//splice last wala (1,3) may 3 wala bhi include karta hay jb kay slice nai karta tha
//splice original array ,ay say kat kar neww array may dalta hay
const myn2=myArr2.splice(1,3)
console.log(myn2)
console.log("c",myArr2)
