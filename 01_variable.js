const accountId=144553
let accountEmail="rajmd1800@gmail.com"
var accountPassword="12345"
accountCity="purulia"//it is also allowed to make a variable without using any keyword like var or let but it is not recommended to use
let accountState;
// accountId=2 //constants can't be modified
console.log(accountId);
accountEmail="hs@hc.com"
accountPassword="116313"
accountCity="baruipur"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
Prefer not to use var
because of issue in block scope and functional scope
*/