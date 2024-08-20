//Arrays:- javascript me arraysmultiple data type ka values store kar sakte hai
//array ka size fix nahi hota matlab ekbar size define karne k bad v modify/expand kar skte hai
//

//types of defining an Array in js
const myArray=[0,1,2,3,4,5]
const myHeros=["shaktiman","bheem"]
const myArr=new Array(1,2,3,4,5,6)

//console.log(myHeros[0])

//Array methods

myArray.push(6);//[0, 1, 2, 3,4, 5, 6] method to insert elements at the end of the array
myArray.push(7);//[0, 1, 2, 3,4, 5, 6, 7]
//console.log(myArray);
//myArray.pop()//[0, 1, 2, 3,4, 5, 6]ye last element ko pop/delete karta hai


//myArray.unshift(8)//method to insert element at the begining of the array
//console.log(myArray);//[8, 0, 1, 2, 3,4, 5, 6]
//myArray.shift()//method to delete first element from the array
//console.log(myArray);//[0, 1, 2, 3,4, 5, 6]

// console.log(myArray.includes(9));// false    i am asking that does this array contains 9 and it returns a boolean value false i.e no
// console.log(myArray.indexOf(19));//-1 that means i don't know as the array does not contained this much indices
// console.log(myArray.indexOf(5));// 5    5th index


// const newArray=myArray.join()//
// console.log(myArray) // [0, 1, 2, 3,4, 5, 6, 7]
// console.log(newArray)//0,1,2,3,4,5,6,7   array ko string me change kar diya

