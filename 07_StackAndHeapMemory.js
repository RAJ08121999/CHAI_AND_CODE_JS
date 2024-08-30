//Memory
//1.Stack memory
//2.Heap memory


// jitna v primitive data types hai sara stack memory me space leta hai
// jitna v non primitive data types hai wo sara heap memory me space leta hai

//jab v koi memory stack k andar define hoti hai to hume uska ek copy milta hai
// or jab v koi memory heap k andar define hoti hai to hume original value ka reference milta hai

let myName="raj";//ye stack memory me space lega
let anotherName=myName;
console.log(anotherName);//raj

anotherName="Rajesh"
console.log(myName)//raj
console.log(anotherName)//Rajesh

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo=userOne
console.log(userTwo)//{ email: 'user@gmail.com', upi: 'user@ybl' }
console.log(userOne)//{ email: 'user@gmail.com', upi: 'user@ybl' }

userTwo.email="raj@gmail.com"
console.log(userTwo)//{ email: 'raj@gmail.com', upi: 'user@ybl' }
console.log(userOne)//{ email: 'raj@gmail.com', upi: 'user@ybl' }
