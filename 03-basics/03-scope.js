// let a=10
// const b=20
// var c=30
// if(true){
//     let a=10
//     const b=20
//     var c=30}
//     //ya jb function ya ifelse ka sath ata hay to ya us ka asciope hoat hay
//     //if ka bahir use nai ho sakata

// console.log(a);
// console.log(b);
// console.log(c);

//dakahy var scope ka bahir bhi use ho sakta nuqsan
if(true){
    // let a=10
    // const b=20
    var c=30}
    console.log(c);
    //isis liya var nai use karna chahiya
    //if ka nadar block scope hay
    //if ka bahir waha globe scope hay
    a=10
    if(true){
        console.log(a);
    }

//global scope cod emay or inspect mau alg alag hay


//global scope
function one(){
    username="hitesh"
    console.log(username)
    function two(){
        website:"youtube"
        console.log(username);
    }
    // console.log(website);
    // two()//agr ya call nai ho gi to callone bhi nao chalay gi 
}
one()
//chotay baroo say icecream lay akty baray chootay say nai lay salkty
//andr wala function bahir walay ka andr hl sakta bahir wala andar walay ka varaiable nai lay 
//funstion declaration ka liya alg call stack banta hay scope bnta hy isis ko closure kaha jata
//closure parent child ka varaiables access nai kar saktay but child functiioion ka can access parent functiona
// yahai kam ifelse may bhi hota hay

//++++++++++++++++++++++interesting++++++++++++++++++
console.log(addone(7))
function addone(num){
    return num+1

}
// console.log(addone(5))

//expression ki tara variable ki tara hay
console.log(addtwo(7)) //yaha problem aya gi hoisting how to declare functions
//error is liya aya ga ku kay varaiable kaandr declare hay ya
const addtwo=function(num2){
return num2+2
}
// console.log(addtwo(5))
//hoisting execuation context declaration sat phlay access nai kar kar saktay