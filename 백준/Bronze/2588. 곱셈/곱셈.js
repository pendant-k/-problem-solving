const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
function solution() {
    const input = getInput();
    const lines = input.split("\n");

    const x = parseInt(lines[0]);
    const y = lines[1];

    for (let i = 2; i >= 0; i--) {
        console.log(x * parseInt(y[i]));
    }

    console.log(x * parseInt(y));
}

// Execute
solution();