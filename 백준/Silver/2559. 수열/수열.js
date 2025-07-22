const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
function solution() {
    const input = getInput();
    const lines = input.split("\n");

    const [N, K] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);
    // console.log(N, K);
    // console.log(arr);

    // start point
    let rst = arr.slice(0, K).reduce((acc, val) => acc + val, 0);
    let current = rst;
    for (let i = 1; i < N - K + 1; i++) {
        current = current - arr[i - 1] + arr[i + K - 1];
        rst = Math.max(rst, current);
    }

    console.log(rst);
}

// Execute
solution();
