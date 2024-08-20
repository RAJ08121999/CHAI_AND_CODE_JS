function calculateCartPrice(num1)
{
    return num1;
}
//console.log(calculateCartPrice(200));//200 
//but agar user multiple value insert kare to uss case ko handle karne k liye rest operator ko use karte hai jo sara input ko ek array me save karke return krta hai\


function calculateCartPrice(...num1)
{
    return num1;
}
console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ]

const user={
    username:"raj",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
console.log(handleObject(user));//Username is raj and price is 199

handleObject(
    {
        username:"sam",
        price:399
    })//Username is sam and price is 399 iss tarah se immediately object bana k v pass kar sakte hai


const myNewArray=[200,400,500,600]
function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));//400