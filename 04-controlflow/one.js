//control flow
//if

const userloogedin=true
const userdebitcard=true
if(userloogedin && userdebitcard){
    console.log("User can make a purchase");
}
//+++++++++++++++++++++++++++switches+++++++++++++++++++++++++++
let month=2
switch (month) {
    case 1:
        console.log("January");
        // code to be executed if expression === value1
        break;
    case 2:
        console.log("February");
        // code to be executed if expression === value2
        break;
    default:
        console.log("Invalid month");
        // code to be executed if expression doesn't match any case
}
let day="Monday"
switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's some other day");
}