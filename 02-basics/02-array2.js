const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]

//push kiy hy ak array ko sosry may
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
//problem: array kay andr array a agaya arrray koi bi data lay lata hay isis liya array array ko hi asa element lay lata hay
// console.log(marvel_heroes[3][1])

//agr hm nay 2 arrays ka ellemnts ak may hi karnay hay to push nai use karaya ga
//hm concatenate ka istamala karay gain jo ak new array bananaya ga jis may doni ho gi

const allHeroes=marvel_heroes.concat(dc_heroes)
console.log(allHeroes)

//spread operator bi isi kay liay kam karta hya spread kar data hay element ko
//spread say hm 2 say ziada arrays ko bhi concatenate karwa saktay hy
const all_new_heroes=[...marvel_heroes,...dc_heroes];
console.log(all_new_heroes);

//flat sab array ko ak array bana data spread

const anotherarray=[1,2,3,4 ,[4 ,5,6],7,8,[6,7,[8,9,10]]]
const real_another_array=anotherarray.flat(Infinity);
console.log(real_another_array);

// hm poch sakty hy ky ya arra hy ya ni//
console.log(Array.isArray("hitesh"))

// or wo array bana bhi dy ga agr koi cheze array ni hy to
console.log(Array.from("hitesh"));

//interesting case hy lay ap direclty agr key value pair my say array cteate do to noi kr saky ga to empty array run ksaty ga
console.log(Array.from({name:"ayesha"}))

//.of say bhi array create ho sakty hy
let score1=90
let score2=80
let score3=70
console.log(Array.of(score1,score2,score3));