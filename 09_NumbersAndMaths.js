//Numbers

// const score=400;
// console.log(score)
// const balance=new Number(100)//[Number: 100]    restrict kar rahe hai taki iska datatype Number hi ho
// console.log(balance)

// console.log(balance.toFixed(2))//100.00     ye balance k value k bad 2 decimal tak precision return karega.

// const otherNumber=123.8966
// console.log(otherNumber.toPrecision(3));//124    ye round off karke 3 digits me value return karega

// const numbers=1000000;
// console.log(numbers.toLocaleString('en-IN'));// 10,00,000 ye readability ko easy karne k liye comma laga k return karega

// Maths:- ye ek library hai jo by default js k sath ata hai

// console.log(Math)

// console.log(Math.abs(-4))//4 ye absolute value return karga matlab kisi v number ka mode '||' value ex:-|-4|=4
// console.log(Math.round(4.6))// 5 ye round off karke return karega
// console.log(Math.ceil(4.2))// 5 ye ceiling value return karega matlab agr 4 se ek v point jyada hua to uska 5 return karega
// console.log(Math.floor(4.9))// 4 ye floor value return karega matlab jab tak 5.0 na ho wo uska 4 hi retun karga 
// console.log(Math.sqrt(25))//5
// console.log(Math.pow(2,3))//8
// console.log(Math.min(3,0,-12,67,5))//-12
// console.log(Math.max(23,45,68,0,12,84));//84

console.log(Math.random())//0.5222007751964768 ye hamesa har ek executin me 0 se 1 k bich ek random value return karta hai
// Math.random function dice games me bht use hota hai qki usme 1-6 tak hi value hota hai to waha humlog is function k sath 10 multiply karke use kar sakte hai harbar random number pane k liye
// lekin isme 0 v to return karega to usko avoid karne k liye pehle random function ko 10 se multiply karne k bad 1 add kar denge to 0 return nahi hoga

console.log((Math.random()*10)+1);//1.6039563310108065 to yaha se 1 mil gaya isko roundoff krke use ho jayega
console.log(Math.floor(Math.random()*(6-1 +1 )+1))// isse har bar 1 se 6 k bich hi random value return hoga

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min +1 )+min))// isse har execution me 10 se 20 k bich har bar random value return karega
//console.log("hello raj")