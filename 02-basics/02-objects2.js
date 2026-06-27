const tinderUser={}
tinderUser.name="ayesha"
tinderUser.id="123"
console.log(tinderUser)
const regularUser={
    name:"ayeshaeman",
    fathername:{
        fullfathername:{
            firstname:"arij",
            lastname:"khan"
        }
    }

}
console.log(regularUser)
console.log(regularUser.fathername.fullfathername.lastname)
//objects ko combine karna
const obj1={
    1:"a",2:"b",3:"c"
}
const obj2={
    4:"d",5:"e",6:"f"
}
//do objects ko jornay ka liya asisgn istamala hota
//assign(target,source)
const fullobj=Object.assign(obj1,obj2)
console.log(fullobj)
console.log(obj1)
const fullobj1={...obj1, ...obj2}

const user=[
    {
        id:1,
        name:"ayesha"
    },
    {

        id:2,
        name:"aqsa"
    }
]
console.log(user[1].id);
console.log(tinderUser);
//keys nikalna
console.log(Object.keys(tinderUser));
//entries
console.log(Object.entries(tinderUser))

//ya feature hay ya nai?

console.log(tinderUser.hasOwnProperty('isloggedin'))
//isenumerable matlab lop laga skatay hay ya ani?
