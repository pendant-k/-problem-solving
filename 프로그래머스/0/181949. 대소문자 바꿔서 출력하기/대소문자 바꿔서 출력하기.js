const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    const ret = str.split('').map((c)=> {
        if(c.toLowerCase() === c){
            return c.toUpperCase();
        } else {
            return c.toLowerCase();
        }
    }).join("");
    
    console.log(ret);
});