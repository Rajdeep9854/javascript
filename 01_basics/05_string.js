const name = "Rajdeep"
const repoCount = 50;

//console.log(name +repoCount+" value");
console.log(`My name is ${name} and my repo count is ${repoCount}`);// this is string interpolation 

// Another type of string declearation 
const gameName = new String("     RajdeepRc     ")
//console.log(gameName[1]);
//console.log(gameName.__proto__);

/*console.log(gameName.substring(0,4));
console.log(gameName.slice(0,4));// it also takes negative values in the begining 
console.log(gameName.trim());*/

const url = "https://rajdeep.com/hitesh%20chowdhury"
//console.log(url.replace("%20","-"));

//console.log(url.includes("hitesh"));

const name2 = "Rajdeep-Piyali-Pali-Shyamal"
console.log(name2.split("-"));