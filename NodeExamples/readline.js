var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
//var x = readline.createInterface(process.stdin,process.stdout);
var realPerson = {
    name: '',
    sayings: []
};



rl.question("What is the name of a real person? ", (answer)=> {

    realPerson.name = answer;
    rl.setPrompt(`What would ${realPerson.name} say? `);
    rl.prompt();

    rl.on('line', function(saying) {
        
        if (saying.toLowerCase().trim() == 'exit') {
            rl.close()
        } else {
            realPerson.sayings.push(saying.trim());
            rl.setPrompt(`what else would ${realPerson.name} say? ('exit' to leave)`);
            rl.prompt();
        }
        
    });

});

rl.on('close', function() {
    console.log ("%s is a real person that says %j", realPerson.name, realPerson.sayings);
    process.exit();
});




