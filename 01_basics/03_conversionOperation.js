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
//console.log(number);


// **********************************operation************************************************************

let value =3
let negValue = -value;
//console.log(negValue);

/*console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);// first string converts all in string
console.log(1+2+"2");// last string do all the calculation and add it with the string */

/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);*/

/*console.log("2">1);
console.log("02">1);*/


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// strict check  ===
// check value + datatype