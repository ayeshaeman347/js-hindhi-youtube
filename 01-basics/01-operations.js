let value=3
let negvalue=-value
console.log(negvalue)

console.log(2*2)
console.log(2/2)
console.log(2**2)
console.log(2+2)
console.log(2-2)
console.log(2%2)

//cancatenation of strings

let str1="ayesha"
let str2= " eman"
let str3=str1+str2
console.log(str3)
// can string can be added with integer??

console.log(1+"2")
console.log("1"+2)
console.log("1"+2+2)
console.log(1+2+"2")
// agr phly string hay to sra ko string cancatenation kar day ga agr string last pay hay to phly mathematca;lay karaya ga 

console.log(+true)
console.log(+"");
let gamecounter=1000

console.log(gamecounter++);
console.log(++gamecounter)
//prefix postfix

//comparison
console.log(2>3);
console.log(2<3);
console.log(2==3);
console.log(2!=3);
console.log(2>=3);
console.log(2<=3);

//aitomaticallay convert kar kay compare kar data lakin ya achi adat nai ahy ku kay predictable result nai data sometime

console.log("2">3);
console.log(2>"3");

//null jo khudi convert karta predicatable result nia data ya use na karo

//avoid this type of conversion please 
console.log(null>0);
console.log(null==0);
console.log(null>=0);
//undefined
console.log(undefined>0);
console.log(undefined == 0);
console.log(undefined>=0);

//==== strict check tab autimaticallay convert ni ho ga ab datatype bhi checkankaray ga kay in ki datatype hi different hay to kasay barabaar ho//


console.log("2"===2)
