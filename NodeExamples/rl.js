const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  var x = answer;
  console.log(`Thank you for your valuable feedback: ${x}`);
console.log(`${x}`);
  rl.close();
});
