//nested scope

function one()
{
    const username="raj";
    function two()
    {
        const website="youtube"
        console.log(username);
    }
    //console.log(website);//website is not defined; function two ka scope se bahaar jake isko access nahi kiya jaa sakta
    two();//raj  ; username jo function one ka local scope me hai wo access kar paa rahe hai function two se v qki function two k liye function one global scope hai
}
one();

// jab v nested function ya if-else ya switch ya loop etc hoga to child function parent function ka variables ko access kar payega 




