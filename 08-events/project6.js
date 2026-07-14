//genetarete a random color
const randomColor=function(){
    const Hexvalue="0123456789ABCDEF";
    let color="#"
    for (let i=0;i<6;i++){
        color+=Hexvalue[Math.floor(Math.random()*16)];

    }
    return color;
}
let intervalId;
const startChangingColor=function(){
    intervalId=setInterval(changeBgColor,1000)
    
    function changeBgColor(){
        document.body.style.backgroundColor=randomColor();
    }
}
    const stopChangingColor=function(){
        clearInterval(intervalId);
        intervalId=null;
    }
console.log(randomColor());//0 sya lay kay 16 tak random values milay gi ap ko
document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)