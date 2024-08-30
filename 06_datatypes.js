//Datatypes has only two categories i.e Premitive and NonPremitive or reference type


// Premitive Datatypes
//7 types : String, Number, Boolean, Null, Undefined,Symbol,BigInt;

//JS ek dynamically typed language hai matlab isme variables ka datatype define nahi karna padta hai wo compiler automatically pehchan leta hai

//ex:-const score=100
//const scoreValue=100.3 
//100 and 100.3 dono hi number considered hoga qki js me int float do alag chiz nahi hai dono ko eksath number me hi rakha gaya hai


//const isLoggedIn=false;
//const outsideTemp=null;
//let email//undefined


// symbol datatype kisi v value ko uniquely recognize karne k liye use hota hai
//let id=Symbol('123')
//let anotherId=Symbol('123')
//console.log(id===anotherId)//false dono me same value hone k bad v Symbol datatype use karne k karan dono ko uniquely identify kiya jaa raha hai


//prmitive data types ko ram ke stack memory me save kiya jata hai jabki nonprimitive data types ko ram k heap memory me space milta hai




//NonPremitive or Reference type
// ex:-
arrays,objects,functions

const heros=["shaktiman","nagraj","bheem"]//arrays

let myObj={
    name:"hitesh",
    age=22,
}//curly braces k andr jo hai wo object hai ye various datatype values ko store kar sakta hai


const myfun=function(){
console.log("hello jaan");
}