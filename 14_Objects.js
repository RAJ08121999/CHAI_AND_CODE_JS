const tinderUser=new Object()
//console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="sanny"
tinderUser.isLoggedIn=false;
//console.log(tinderUser)

const regularUser={
    email:"raj@google.com",
    fullname:{
        userfullname:{
            firstname:"MD",
            lastname:"Raj"
        }
    }
}
//console.log(regularUser.fullname)


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign(obj1,obj2);
//console.log(obj3);


const obj3={...obj1, ...obj2}
console.log(obj3);

const users={
    
}
