const userEmail= "rj@gmail.com"
if(userEmail)
{
    console.log("got the useremail");
}
else{
    console.log("dont get user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null , undefined , NaN;
// truthy values
// true, "0", 'false'," ",[],{},function(){}

// Nullish Coalescing Operator(??):null undefined

let val1;
val1=5??10;
console.log(val1);


//ternary operator:
// condition ? true: false

const iceTeaPrice=100;
iceTeaPrice<=80? console.log("less than 80"): console.log("more than 80");