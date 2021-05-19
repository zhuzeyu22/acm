const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const [head,tail] = String(line).split('.')
    let ret = Number(head)
    if(Number(tail.split('')[0]) >= 5){
       ret ++ 
    }
    console.log(ret)
});