var index;
var x = "hai";
function grab(flag) {
     index = process.argv.indexOf(flag);
    return (index === -1) ? null : process.argv[index+1];
    
    
}

var greeting = grab('greeting');
var user = grab('--user');
console.log(user);
if (!user || !greeting) {
    console.log("you blew it");
} else {
    console.log ('welcome   ' +user, +greeting);
}