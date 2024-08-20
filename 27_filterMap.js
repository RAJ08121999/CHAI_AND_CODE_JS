// const coding=["js","ruby","java","python","cpp"]
// const values=coding.foreach((item)=>
// {
//     console.log(item);
// })
// console.log(values);//undefined that means foreach does not return anything

 const myNums=[1,2,3,4,5,6,7,8,9,10]
// const result=myNums.filter((num)=>num>4)
// console.log(result)//[ 5, 6, 7, 8, 9, 10 ]

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4)
//     {
//         newNums.push(num)
//     }
// })
// console.log(newNums)//[ 5, 6, 7, 8, 9, 10 ]

const res=myNums.map((num)=> num+10)
//console.log(res)
//[11, 12, 13, 14, 15,16, 17, 18, 19, 20]


//chaining 


// const newNums = myNums
//     .map((num)=> num*10)
//     .map((num)=>num+1)
//     .filter((num)=> num>=40)
//console.log(newNums)
//[
  //  41, 51,  61, 71,
  //  81, 91, 101
 // ]


// reducer

// const total=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval

// },0)
// console.log(total)
// acc:0 and currval: 1
// acc:1 and currval: 2
// acc:3 and currval: 3
// acc:6 and currval: 4
// acc:10 and currval: 5
// acc:15 and currval: 6
// acc:21 and currval: 7
// acc:28 and currval: 8
// acc:36 and currval: 9
// acc:45 and currval: 10
// 55


const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)