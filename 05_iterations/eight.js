const myArray=[1,2,3,4,5,6,7,8,9,10]

const newArray = myArray.reduce((acc,curr)=>{
    //console.log(`acc -> ${acc} curr -> ${curr}`);
    return acc+curr
},3)

//console.log(newArray);

const shoppingCart =[
    {
        courseName:"javascript course",
        price:2999
    },
    {
        courseName:"web dev course",
        price:3999
    },
    {
        courseName:"Data science course",
        price:9999
    },
    {
        courseName:"Mobile dev  course",
        price:6999
    },
    {
        courseName:"java backend dev course",
        price:8999
    }
]

const totalPrice=shoppingCart.reduce((acc,curr)=>acc+curr.price,0)

console.log(totalPrice);