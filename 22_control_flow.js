//if statement
// //syntax:
// if(condition)
// {
//        scope of if statement
// }

// const isUserLoggedin= true;

// if(isUserLoggedin)
// {
//     console.log("online");
// }

//conditional operators:
{/* < greater than
> lesser than
== equal to
!= not equal to
<= greater than or equal to
>= lesser than or equal to
=== strict equals it checks not with value but with datatype also */}

// const score=200;
// if(score>100)
// {
//     const power="fly";
//     console.log(`User power: ${power}`);//fly
// }

// const number=3;
// if(number>0)
// {
//     console.log("its a positive number");
// }
// else if(number<0)
// {
//     console.log("its a negative number");
// }
// else
// {
//     console.log("its a nutral number that is 0");
// }

// const userLoggedin=true;
// const debitCard=true;

// if(userLoggedin && debitCard)
// {
//     console.log("allow user to buy course");
// }

// const loggedInusingGoogle=true;
// const loggedInusingEmail=false;
// if(loggedInusingEmail || loggedInusingGoogle)
// {
//     console.log("allow logging in");
// }

// switch case;

// switch(key)
// {
//     case value:
//         break;
//     case value:
//         break;
//     default:
// }
const month=4
switch(month)
{
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Februaury");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("you have entered a wrong option");  
}