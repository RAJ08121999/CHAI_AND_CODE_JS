let score="33abc"
//console.log(typeof score)

let valueInNumber=Number(score)//the string value of score variable is now converted into number
//console.log(typeof valueInNumber)
//console.log(valueInNumber)//it returns Nan i.e not a number so whether it converted the string into number but its not a pure number because abc is also there
//if null is converted into number then it returns 0
//if undefined is converted into number then it returns NaN i.e not a number
//if boolean value=true is converted into number then it returns 1 and for false it returns 0
// if a string which can't be converted into a number then it returns NaN 

//"33"=>33
//"33abc"=>NaN
//true=>1
//false=>0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)//true

//1=>true
//0=>false
//""=>false
//"raj"=>true

let someNumber=33
let stringNumber=String(someNumber)//33
console.log(stringNumber)
console.log(typeof(stringNumber))//yes 33 is now converted into"33"

