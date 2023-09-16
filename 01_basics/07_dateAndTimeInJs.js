const myDate = new Date();
/*console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(typeof myDate);*/

//const myUpdatedDate = new Date(2023,2,23);
//const myUpdatedDate = new Date(2023,2,23,5,3);
//const myUpdatedDate = new Date("2023-01-22");// year-month-data
// in india we follow month date year

//const myUpdatedDate = new Date("01-22-2023");
const myUpdatedDate = new Date("12-11-2023");
//console.log(myUpdatedDate.toDateString());

let timeStamp = Date.now();
/*console.log(timeStamp);
console.log(myUpdatedDate.getTime());

console.log(Math.floor(Date.now()/1000));*/


const newDate1 = new Date();
console.log(newDate1.getDay());
console.log(newDate1.getMonth());

newDate1.toLocaleDateString('default',{
    weekday:"long",
    
})
console.log(newDate1);