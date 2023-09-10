const accountId= 12356;
let accountEmail="rajdeep98543231@gmail.com";
var accountPassword = "12345"
let accountState

accountCity = "jaipur"


//accountId=2   not allowed
accountEmail="hc@gmail.com"
accountPassword="21212121"
accountCity="bengaluru"

console.log(accountId);
console.log(accountEmail);

/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);