//dates

let myDate=new Date()
console.log(myDate);
// dates ko readlable bannay kay liya string may cinvert kar kay dakhty hay
console.log(myDate.toString());
//todatestring
console.log(myDate.toDateString());
//to iso string
console.log(myDate.toISOString());
//check type of date is object 
console.log(typeof myDate);
//created specific date
//javascript may month 1 say nai 0 say shuru hotay hay 0 janauary
let myCreatedDate=new Date(2023,0,23);
console.log(myCreatedDate);
//showo time also
let myCreatedDate2=new Date(2023,0,23,5,3);
console.log(myCreatedDate2);
console.log(myCreatedDate2.toLocaleString());
//syntax yy/mm/dd
let myCreatedDate3=new Date("2023-02-02");
console.log(myCreatedDate3.toLocaleString());

//timestam in dates
let myTimeStamps=Date.now()
console.log(Math.floor(myTimeStamps/100));

//mazid information
let newDate=new Date()
console.log(newDate.getDay());

//isis tara date ya seprately sirf year bhi print karwa saktay hay 
//or bihi method hay localestring ka default
console.log(newDate.toLocaleString('default',{
    weekday:'long',
}))



