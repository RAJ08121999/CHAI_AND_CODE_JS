//Immediately Invoked Function Expression


(function chai()
{
    console.log("Database connected");
})();//Database connected

(
    (name) => {
        console.log(`DB connected ${name}`);
    }
)("raj");