const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 0
let buf = []
rl.on('line', function (line) {
    if(count > 0){
        buf[Number(line)] = 1
        if(count == 1){
            buf.forEach( (i,index) =>{
                if( i===1){
                    console.log(index)
                }
            })
            buf = []
        }
        count --
    }else{
        count = Number(line)
    }
});

// rl.on('close', function () {
//     buf.forEach( (i,index) =>{
//         if( i===1){
//             console.log(index)
//         }
//     })
// });