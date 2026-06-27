//functions
//jo bhi code likha hay usay pacakage may band kar diya us pacak ki copies jaha marzi lay ja saktay

//func defination
function saymyname(){
    console.log("H");
     console.log("i");
      console.log("t");
       console.log("e");
        console.log("s");
         console.log("H");
}
//function call execution
saymyname//reference
saymyname()//execiution

//add two numbers
//paramerts
function addTwoNumbers(number1,number2){
   let sum=number1+number2;
   console.log(sum)
}
//arguments
addTwoNumbers(2,3)
addTwoNumbers(2,"6")
addTwoNumbers(2,"a")
const result=addTwoNumbers(4,5)
//will not print 9 in result
console.log(result)
//this can bhi done in this way
function addthreenumbers(number1,number2,number3){
   return number1+number2+number3;
}
const result2=addthreenumbers(2,3,4)
console.log(result2)

//or kitnay tarqay say values la skatya hay
//passing defaulvalue function loginusername(username="same"){
function loginusername(username){
    //if(!username){}
    if(username===undefined)
    {
        console.log("please enter ausername")
        return
    }
    return `${username} just logged in`

}
let message=loginusername("hitesh")
console.log(message)

//jb ap functioncall may value pass nai karty to wo undefined ata hay


//shopping cart
//pata nai ktnaychezeay logi nay select akrni hay
//kitnay arguments anay hy nai pataa
//for that we will use rest and spresad operator ...

function calculatecartprice(val1,val2,...num1){
    return num1
}
console.log(calculatecartprice(200,400,300))
//val1,val2 may phly do arguments chalay jataya hay or baqi array may aa jatay

//object bhi pas kar saktya hay functio may
const user={
    username:"ayesha",
    price:200
}
function handleobject(anyobject)
{
    console.log(`usernameis${anyobject.username} and its price is ${anyobject.price}`)

}
handleobject(user)
//function call ki dafa ap direct object bhi pass kartay 
handleobject({username:"aqsa",
    price:300})

    //array bhi pass ho skatya hay
    const arr1=["ayesha","aqsa"]
    function handlearray(anyarray){
        console.log(`candiated of mdcat are ${anyarray}`)
    }
    handlearray(arr1)
    //direct bhi array pass ho sakty hay
    handlearray(["neha","arooshay"])