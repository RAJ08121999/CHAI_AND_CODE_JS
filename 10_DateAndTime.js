//Dates:- Date ek object hai js me

// let myDate=new Date()//Date ka ek object bana
// console.log(myDate)//2024-02-25T16:48:30.493Z
// console.log(myDate.toString())//Sun Feb 25 2024 22:18:30 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString())//2024-02-25T16:48:30.493Z
// console.log(myDate.toJSON());//2024-02-25T16:48:30.493Z
// console.log(myDate.toDateString());//Sun Feb 25 2024
// console.log(myDate.toLocaleDateString());//25/2/2024
// console.log(myDate.toTimeString());//22:18:30 GMT+0530 (India Standard Time)
// console.log(myDate.toUTCString())//Sun, 25 Feb 2024 16:48:30 GMT

let myCreatedDate= new Date(2023,0,23)
//console.log(myCreatedDate.toDateString())//Mon Jan 23 2023 js me months 0 se start hota hai so month range=0-11

let myTimeStamp=Date.now()
// console.log(myTimeStamp)//1708880664376 ye 01-Jan-1970 se av tak ka exact time millisecond me return karta hai 1jan1970 by default fixed hai js me
// console.log(myCreatedDate.getTime())//
// console.log(Math.floor(Date.now()/1000))//1708880970 ye seconds me convert ho gya


let newDate=new Date()
console.log(newDate)//2024-02-25T17:12:28.059Z
console.log(newDate.getDate());//25 aaj k date
console.log(newDate.getMonth());//1 present month feb hai isiliye 1 qki js me months range 0 se start hota h
console.log(newDate.getMonth()+1);//2    +1 kiye taki end user ko samajhne me problem n ho
console.log(newDate.getFullYear());//2024 present year
console.log(newDate.getDay());//0 qki aaj sunday hai



