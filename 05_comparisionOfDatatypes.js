// console.log(2>1)//true
// console.log(2<1)//false
// console.log(2>=1)//true
// console.log(2<=1)//false
// console.log(2==2)//true
// console.log(2!=2)//false


// console.log("2">1)//true
// console.log("02">1)//true

//it is recommended not to compare two different datatypes as it can return unpredictable results ,

// console.log(null>0)//false
// console.log(null==0)//false
// console.log(null>=0)//true

//the reason is that an equality check == and comparision > < >= <= work differently
//comparisions covert null to a number ,treating it as 0.
// That's why (3) null>=0 is true and (1)null>0 is false.


// console.log(undefined==0)//false
// console.log(undefined>0)//false
// console.log(undefined<0)//false

console.log("2"===2)// false   ;ye strict check hai isme value or datatype dono check hoga agar dono datatype same hua tab hi comparision hoga


// do different datatypes wala values k sath koi comparision operation operation na karna hi better hai 

