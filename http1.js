var http = require("http");
var server = http.createServer(function(request,response){
    
    response.end("hello noble\n");
});
console.log("cvbn");
server.listen(7000);