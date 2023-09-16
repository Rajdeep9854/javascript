// array

// in javascript element of array can be of same type can be of different type 
const myArray = [0,1,2,3,4,5]
const heros = ['spider','bat','harry']

const myArray2 = new Array(1,2,3,4)
//console.log(myArray2[1]);

// array methods 

//myArray.push(6)
//myArray.pop()
myArray.unshift(0)
myArray.shift()
/*console.log(myArray);
console.log(myArray.includes(9));
console.log(myArray.indexOf(9));*/

const newArray=myArray.join();
//console.log(newArray);
//console.log(myArray);

// slice and splice 

console.log("a  " +myArray);


console.log(myArray.slice(1,3));
console.log("b   "+myArray);

// in splice the original array will be changed and the range of the array will be added and the range will be totally deleted 
console.log(myArray.splice(1,3));
console.log("c   "+myArray);

