const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    let number = Number(line)
    let x = 2
    const arr = []
    while( x < number){
        if(number % x === 0){
            arr.push(x)
            number /= x
        }else{
            x++
        }
    }
    arr.push(x)
    console.log(arr.join(' '))
});