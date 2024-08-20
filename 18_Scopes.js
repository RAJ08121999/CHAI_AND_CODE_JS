let a=300;
console.log(a)//300
//global scope

if(true)
{//local scope
let a=10;
const b=20;
var c=30;
}


//console.log(a)// a is not defined; as a is defined under if's body so it can't be accessed from outside its body
// console.log(b) //b is not defined;as b is defined under if's body so it can't be accessed from outside its body
//console.log(c)//30 
// kisi k body jo { } se covered ho usko local scope bolte hai or uske bahar k environment ko global scope
// JS me main problem var keyword me hai jaise ki ye local scope me defined variable ko v bahar se access kar pata hai isiliye bugs ata hai
//  so var ko use nahi karna hai