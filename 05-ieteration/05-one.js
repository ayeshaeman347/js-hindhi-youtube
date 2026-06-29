//for
for(let i=0;i<10;i++){
    console.log(i)
}
//arrayy specific loops

//for of
const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i)
}
const greet="hello worls"
for(const i of greet){
    console.log(i)
}
//map hold key value pair order yad rakhat hya no duplicate values
const newmap=new Map()
    newmap.set('key1', 'value1')
    newmap.set('key2', 'value2')
    newmap.set('key3', 'value3')

for (const [key, value] of newmap){
    console.log(key, value)
}
//for in
const obj={
    name:'john',
    age:30,
    city:'new york'
}
for(const key in obj){
    console.log(key, obj[key])
}
//for in is for objects