function sayMyName()
{
    console.log("R")
    console.log("a")
    console.log("j")
}
//sayMyName();

// function addTwoNumbers(num1,num2)//parameters
// {
//     num3=num1+num2;
//     console.log(num3);
// }
addTwoNumbers(2,5)//arguments
//jab function define kiya jata hai to pass kiye jane wala value ko parameters bolte hai;
//or jab function call kiya jata hai to pass kiye jane wala value ko arguments bolte hai;

function addTwoNumbers(num1,num2)//parameters
{
    // let num3=num1+num2;
    // return num3;

    return num1+num2;// return k niche likha koi v code execute nahi hoga so return must be the last line;
}
const num3=addTwoNumbers(5,7)
//console.log("Result: ",num3);



function loginUserMessage(username)
{
    if(username===undefined)
    {
        console.log("Please enter a user name:")
        return;
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("raj"));//raj just logged in

console.log(loginUserMessage())//agar user koi value pass hi na kare to ........Please enter a user name:
//undefined


function loginUserMessage(username="raj")//agar user koi value pass na kare to by default raj hoga
{
    // if(username===undefined)
    // {
    //     console.log("Please enter a user name:")
    //     return;
    // }
    return `${username} just logged in`
}
console.log(loginUserMessage())//raj just logged in