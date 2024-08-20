const name="raj"
const repoCount=50
//console.log(name + repoCount + "value")//raj50value it is not recommended to use as it is outdated 

// console.log(`Hello my name is ${name} and my repository count is ${repoCount}`)//Hello my name is raj and my repository count is 50...this syntax is most recommended to use as it is more readable


//another way to define a string in js
const gameName=new String('rajnish-osho-philosopher')

// console.log(gameName[0])//r .... it is contained in a key value list where 0:r 1:a and 2:j and so one
// console.log(gameName.__proto__)//{}...it returns an empty object

// console.log(gameName.length)//12
// console.log(gameName.toUpperCase())//RAJNISH OSHO
// console.log(gameName.charAt(4))//i
// console.log(gameName.indexOf('i'))//4

// const newStr = gameName.substring(0, 4)//it does not take negative values
// console.log(newStr)//rajn

// const anotherStr=gameName.slice(0,4)
// console.log(anotherStr)//rajn   slice method can also take negative values
const anotherStr1=gameName.slice(-2,1)
console.log(anotherStr1)//
//console.log(anotherStr)//


const newString1="   raj   "
// console.log(newString1)//   raj
// console.log(newString1.trim())//raj  trim function removes extra or unwanted special characters like white space amd line terminators(\n)

const url="https://hitesh.com/hitesh%20choudhry"
console.log(url.replace('%20','_'))//https://hitesh.com/hitesh_choudhry %20 is replaced by _

console.log(gameName.split('-'));//[ 'rajnish', 'osho', 'philosopher' ] on the basis of - it is splitted in arrays 

