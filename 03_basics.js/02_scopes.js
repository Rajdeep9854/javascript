//var c = 300
let a =300
if(true){
    let a =10;
    const b =20;
     c = 30;
     //console.log("Inner" + a);
}

/*for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}*/
//console.log("outside"+a);
//console.log(b);
//console.log(c);

function one(){
    const username = "Rajdeep"

    function two(){
        const website ="tinder"
        console.log(username);
    }
    //console.log(website);

    two()
}
//one()

if(true){
    const username ="Rajdeep";
    if(username==="Rajdeep"){
        const website=" youtube"
        console.log(`${username}${website}`);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++++++++Intersting++++++++++++++++++++++++++++++++

addOne(5)// for this function this is possible to call the function before declaration and defination 
function addOne(num){
    return num++;
}

//for this function this is possible to call the function before declaration and defination
// this can give you problem 
const addTwo = function(num){
    return num+2

}



