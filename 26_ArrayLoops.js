// for of 

const arr=[1,2,3,4,5,6]
for (const num of arr) {
    //console.log(num);
}

const greetings ="hello world!"
for (const i of greetings) {
    //console.log(`each character is ${i}`);
}

// Maps

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America");
map.set('PAK',"Pakistan");
map.set('IN',"India")
//console.log(map)
//'IN' => 'India',
//'USA' => 'United States Of America',
//'PAK' => 'Pakistan'
// map only unique values ko hi print karta hai

for (const [key,value] of map) {
    //console.log(key,':-', value);
}

// const myObject={
//     game1:'NFS',
//     game2:'GTAV'
// }
// for (const [key,value] of myObject) 
// {
//     console.log(key,':-',value) ;   //myObject is not iterable
//     // hence objects are not iterateable using for of loop
// }


const myObj={
    js:'JavaScript',
    cpp:'C++',
    rb:"ruby",
    swift:'swift in apple'

}
for (const key in myObj) {
    //console.log(`${key} is shortcut for ${myObj[key]}`);
}

// js is shortcut for JavaScript
// cpp is shortcut for C++
// rb is shortcut for ruby
// swift is shortcut for sswift in apple

// so for in loop use hota hai object ko iterate karne k liye


const programming=["js","c","c++","python"];
for (const key in programming) {
    //console.log(key);//sirf key ya index print kar raha hai 
    //console.log(programming[key]);// isse key and value dono print ho raha hai
}



// for each loop

const coding=["js","ruby","java","python","cpp"];
// coding.forEach( function(index){
//     console.log(index)
// })

// coding.forEach((index)=>{
//     console.log(index);
// })

// function printMe(item)
// {
//     console.log(item);
// }
// coding .forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding=[
    {
        languageName:"javascript",
        languFileName:"js",
    },
    {
        languageName:"java",
        languFileName:"js",
    },
    {
        languageName:"C sharp",
        languFileName:"j#",
    }
]
myCoding.forEach((item)=> {
    console.log(item.languageName);
})