// immediately invoked function expressions 

(function chai(){
    // named iife
    console.log("Db connected ");
})();// this semicolon has extra importance to the code . 

// immediately invoked function is used to execute a function immediately and to save our exexution of function from global noise 
((name)=>{
    //unnamed iife
    console.log(`${name}`);
})('rajdeep')
