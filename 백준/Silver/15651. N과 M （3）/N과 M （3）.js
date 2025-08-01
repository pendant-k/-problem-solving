const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
// Current : 15651 (N과 M (3))
function solution() {
    const input = getInput();
    const lines = input.split("\n");
    // console.log(lines[0]);
    const [N, M] = lines[0].split(" ").map((value) => {
        return parseInt(value);
    });

    // 현재 수열
    const cur = [];
    const rst = [];

    const go = (count) => {
        // base case
        if (count === M) {
            rst.push(cur.join(" "));
            return;
        }

        // 모든 정점 탐색
        for (let i = 1; i < N + 1; i++) {
            cur.push(i);
            go(count + 1);
            cur.pop();
        }
    };

    go(0);
    console.log(rst.join("\n"));
}

// Execute
solution();
