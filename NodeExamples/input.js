var questions = [
    "What is your name? ",
    "what is your fav hobby",
    "What is preferred programming language?",
    "job",
    "position"
];

var answers = [];

function ask(i) {
    process.stdout.write(`\n\n\n\n ${questions[i]}`);
    process.stdout.write("  >  ");

}

process.stdin.on('data', function(data) {
    // process.stdout.write('\n' + data.toString().trim() + '\n');
    answers.push(data.toString().trim());
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function() {
    process.stdout.write ("\n\n\n\n");
    process.stdout.write (`Go ${answers[1]} ${answers[0]} you can finish writting ${answers[2]} later you get ${answers[3]} with ${answers[4]}`);
    process.stdout.write ("\n\n\n\n");

})


ask(0);
