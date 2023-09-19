const user = {
    username : "Rajdeep",
    price :999,


    welcomeMessage:function(){
       // console.log(`${this.username} , welcome to website `);
        //console.log(this);
    }
}

/*user.welcomeMessage()
user.username= "samrat"// current context is changed 
user.welcomeMessage()*/

function coffe(){
    const username="Rajdeep"
    console.log(this.username);// i can not user this in function i can use it in object 
}

//coffe()

/*const chai= ()=>{
    let username="rajdeep"
    console.log(username);
}
chai();*/

/*const addtwo =(num1,num2)=>{
    return num1+num2
}

console.log(addtwo(500,9));*/

//const addtwo =(num1,num2)=>  num1+num2
//const addtwo =(num1,num2)=>  (num1+num2)
const addtwo =(num1,num2)=>  ({username:"rajdeep"})


console.log(addtwo(500,9))