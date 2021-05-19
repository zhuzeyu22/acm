const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const tokens = line.split(' ');
    console.log(tokens[tokens.length - 1].length)
});