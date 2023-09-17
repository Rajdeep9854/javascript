// if objects were made from constructor then it is singleton 
// if objects were made from literals then it is not singleton object

// objects singleton 
//Object.create

// object literals
const mysym = Symbol("key");
const jsUser={
    name :"hitesh",// bydefault name is understood by javascript as a string . but we do not use "" to define that
    age:18,
    "full name" :"Rajdeep chowdhury",
    [mysym]:"newSym",
    location:"habra",
    email:"rajdeep98543231@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}

// accessing object elements 
/*console.log(jsUser.email);
console.log(jsUser["email"]);// better way of accessing object elements 
console.log(jsUser["full name"]);*/

//console.log( typeof jsUser[mysym]); // have to read symbol in object care fully 

//console.log(typeof Symbol("raj"));

/*jsUser.email = "rajdeep123@gmail.com"
console.log(jsUser);

//Object.freeze(jsUser)
jsUser.email="piyali@gmail.com"
console.log(jsUser);*/

jsUser.greeting = function(){
    console.log("hello world");
}
jsUser.greetingTwo = function(){
    console.log(`hello world ${this["full name"]}`);
}
console.log(jsUser.greeting);// we get the reference of a anonomous function 
console.log(jsUser.greeting());// in thus way the function also be executed 
console.log(jsUser.greetingTwo());



