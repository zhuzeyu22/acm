const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let arr = []
let index = 0
rl.on('line', function (line) {
    const [i,x] = line.split(' ')
    if(index === 0){
        index = line
    } else if(index === 1){
        arr[i] =  (arr[i]|0) + (x|0)
        arr.map( (xx,ii) => { console.log(ii + ' ' + xx)} )
    } else {
        index --
        arr[i] =  (arr[i]|0) + (x|0)
    }
});