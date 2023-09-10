let score = undefined;
//console.log(typeof (score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);// NaN -> not a number 

// conversion to number from other data types 
// "33" -> 33
// "33abc" -> NaN type of NaN is number 
// null -> 0
// undefined -> NaN 
// true - > 1
// false -> 0

let isLoggedIn = 1;
//console.log(isLoggedIn);

let bolleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(bolleanIsLoggedIn);

// 1 => true // 0 => false // "hitesh" => true 

let stringNumber = 33;
let number = String(stringNumber)
console.log(number);