var waittime=3000;
var x1 = 500;
var ctime = 0;
console.log("wait time");
setInterval(function()
{
ctime = ctime + x1;
console.log('waiting ${ctime/1000} seconds....');
},x1);
setTimeout(function()
{
    console.log("done");

},
waittime);

