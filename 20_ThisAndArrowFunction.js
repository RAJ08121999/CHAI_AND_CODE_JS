const user={
    username: "raj",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username}, welcome to website`);
    }
    // this keyword current context ko refer karta hai
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage();


// function chai()
// {
//     let username="raj"
//     console.log(this.username)//undefined
// }
// chai()//undefined

// kisi function k andar se this ko use nahi kiya jaa sakta


//2nd type of function declaration:

// const chai=function()
// {
//     let username="raj"
//     console.log(this.username)//undefined
// }


//Arrow function declaration:-

const chai = () =>{
    let username ="raj"
    console.log(this)//undefined
}
console.log("RAJ")


//arrow function syntax:
// () => {}

const addTwoNum=(num1,num2)=>{
    return num1+num2;
}
console.log(addTwoNum(5,3))//8

//implicit return: another type of writing arrow function

const subTwo=(num1,num2) => num1-num2;

console.log(subTwo(5,3))//2

