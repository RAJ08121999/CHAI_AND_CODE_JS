//singleton


//object literals
//difining objects
const Jsuser={
    name:"raj",
    "full name":"md raj",
    age:24,
    location:"baruipur",
    email:"raj@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
//accessing objects;
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);//use this style in most of the cases
// console.log(Jsuser["full name"]);

Jsuser.email="raj@msuser.com"// to update any value of an object

//Object.freeze(Jsuser)//this will restrict to modify the values of any key;

Jsuser.grreting=function()
{
    console.log("Hello JS user");
}
console.log(Jsuser.grreting());

Jsuser.grreting2=function()
{
    console.log(`Hello JS user,${this.name}`);
}
console.log(Jsuser.grreting2());