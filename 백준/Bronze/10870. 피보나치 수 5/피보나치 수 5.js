const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
function solution() {
    const input = getInput();
    const lines = input.split("\n");
    // console.log(lines);

    // target n (order n)
    const n = parseInt(lines[0]);

    const arr = [0, 1];
    let cnt = 0;
    while (cnt <= n) {
        const currentSum = arr[cnt] + arr[cnt + 1];
        arr.push(currentSum);
        cnt++;
    }

    console.log(arr[n]);
}

// Execute
solution();
