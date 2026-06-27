const user={
    username:"hitesh",
    price:300,
    welcomeMessage :function(){
        console.log(`welcome ${this.username}, to this website`)
        console.log(this)//current sari values ko refer karnay ka liya this use hota

    }
}
user.welcomeMessage()
user.username="ayesha"
user.welcomeMessage()
console.log(this)//current conytext empty hay hm node envoirmant hay ku kay hm global ka andrr koi object nai hay
//current context to refer karnay ka liya this use hota

// function chai(){
//     let username="hitesh"
//     console.log(this.username)//undefined kyun kay function ka current context window hay or window mai username nai hay
// }
// chai()
//undefined hm function ka andr this function nai use kar saktay ku kay function ka current context window hay or window mai koi object nai hay
const chai=function(){
    let username="hitesh"
    console.log(this.username)//undefined kyun kay function ka current context window hay or window mai username nai hay
}
chai()
//arrow functina banna hay function keyword hata kay arrow laga do
const myfunction=()=>{
    let username="ayesha"
    console.log(this.username)
}
//basic syntax of arrow function () =>{}
    const myfunctioaddtwo=(num1,num2)=>{
        return num1+num2
    }
    console.log(myfunctioaddtwo(2,3))
    //implicit return may paraantheseis nai use karnay partay
    const myfunctionaddthree=(num1,num2,num3)=>num1+num2+num3
    console.log(myfunctionaddthree(1,2,3))//is tara say bhi returmn ma lata ku kay ak hi line ka function return karta hay
    //curly braces may wrap kiya agr function ko to return keywod likhna zaroori ho jata otherwise ap asay bhi kar saktay ho
    const myfunctionaddfour=(num1,num2,num3,num4)=>( num1+num2+num3+num4)//paranthesis bhi use kar saktay hay is liya bhi lagaty ku kay kabhi abhi object bhi return karna hota hay jo parenthsesis ka baghair return nai ho ga 
    console.log(myfunctionaddfour(1,2,3,4))
    //implict return hab ap return keyword use nai kr kartay ku ka curly braces ue ni kiya
    //explicit return jab ap return keyword use karty hy or curlybraces use karty hy
    const myfunctionaddfive=(num1,num2)=>({username:"hitesh"})
    console.log(myfunctionaddfive(1,2))