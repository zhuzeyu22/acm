const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const patch = (8 - (line.length % 8)) % 8
    const p = new Array(patch).fill('0')
    let arr = line + p.join('')
    arr.split('').forEach((x,i,a)=>{
        if( i % 8 == 0){
            console.log( a.slice(i,i + 8).join('') );
        }        
    })
});