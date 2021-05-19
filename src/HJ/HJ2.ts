const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let index = 0
const tokens = []

rl.on('line', function (line) {
    tokens[index] = line;
    if(index ===1){
        let count = 0;
        let x = tokens[1].toUpperCase();
        let str = tokens[0].toUpperCase();
        for(let i = 0;i < str.length ; i++){
            if(str[i] == x){
                count++
            }
        }
        console.log(count)
    }
    index++;
});