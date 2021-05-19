const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (line) {
    const arr =  line.toUpperCase().split('')
    let number = 0 
    arr.slice(2).forEach((x,i,a)=>{
        number *= 16
        number += ( x >= 'A' ? x.charCodeAt() - 55 : Number(x))
    })
    console.log(number)
});