const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
function solution() {
    const input = getInput();
    const lines = input.split("\n");

    const [M, N] = lines[0].split(" ").map(Number);
    const arr = lines[1].split(" ").map(Number);
    // console.log(M, N, arr);

    const prefixSum = arr.reduce(
        (acc, val) => {
            acc.push(acc[acc.length - 1] + val);
            return acc;
        },
        [0]
    );

    // console.log("누적합 배열:", prefixSum);

    // 각 쿼리 처리
    for (let x = 2; x < N + 2; x++) {
        const [i, j] = lines[x].split(" ").map(Number);
        console.log(prefixSum[j] - prefixSum[i - 1]);
    }
}

// Execute
solution();