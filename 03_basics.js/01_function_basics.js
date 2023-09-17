function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


/*function loginUserMessage(name="piyali"){ // this is default value 
    if(name===undefined){
        console.log("please enter a username");
        return 
    }
    return `${name} just logged in `
}
//console.log(loginUserMessage());*/

/*function calculateCarPrice(...num){// user of rest operator 
    
    return num
}
console.log(calculateCarPrice(200,500,700));

function calculateCarPrice1(val1,val2,...num1){
     return num1
}
console.log(calculateCarPrice1(200,300,700,2000));*/

const user = {
    userName :"rajdeep",
    price : 299
}

function handleObject(anyObject){
    console.log(`name of the user is ${anyObject.userName} and the price is ${anyObject.price}`);
}
handleObject(user);