// for loop
for (let index = 0; index < 10; index++) {
    const element = index;
    //console.log(element)
    
}

for(let i=0;i<=10;i++)
{   //console.log(`outer loop value ${i}`);
    for(let j=0;j<=10;j++)
    {
       // console.log(`inner loop value ${j}`);
    }
}

let myArray =["ram","shyam","karan"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element)
    
}

// break and continue

for(let i=1;i<=20;i++)
{   if(i==5)
    {
        console.log(`detected 5`)
        break;
    }
    console.log(`value of i :${i}`);
}
console.log("out of the loop")

for(let i=1;i<=20;i++)
{   if(i==5)
    {
        console.log(`detected 5`)
        continue;
    }
    console.log(`value of i :${i}`);
}
console.log("out of the loop")