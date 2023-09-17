//const tinderUser = new Object();// this is singleton object this is non singleton object 

const tinderUser={};
tinderUser.id= "sabby123"
tinderUser.name= "sammy"
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser={
    email:"rajdeep123@gmail.com",
    fullName :{
        userFullName:{
            name :"rajdeep",
            title:"chowdhury"
        }
    }
}
//console.log(regularUser.fullName.userFullName.name);

// merging two objects 
const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
const obj4={...obj1,...obj2}
console.log(obj3);

// array of objects 
const users =[ {
    id:1,
    email :'h@gmail.com'
},
{
    id:1,
    email :'h@gmail.com'
},
{
    id:1,
    email :'h@gmail.com'
}
]

users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));// returns all keys of the object as a form of array 
console.log(Object.values(tinderUser));// returns all values of the object as a form of array 
console.log(Object.entries(tinderUser)); // make a array of array where key and value is in a array 
// output
/**[ [ 'id', 'sabby123' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ] */

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
