//immediately function ko run karan ahay globbaly pollute kiya baghair?/
//ya syntaxx hota hay iife ka
//ya hm is liya use karty hy kai bar global scope ka polution say problem hoty hay
//named iife
(function chai(){
    console.log("Hello, World!");
})();//ya invoke to ho gaya lakin isay nai pata end kaha karna hay isis liya iska bad end karna zarroori hay ; say
//() phla parantheseis iife ka hay dosra ()parenthsesis execution ka hay
//implicit function banya
//phly walay iife ka agay end seorator laga lo phir agla chalay ga 

//unnamed iife
((name)=>{
    console.log(`helo ayesha ${name}`)
})("Alice")