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
    // input
    const [N, M] = lines[0].split(" ").map((value) => {
        return parseInt(value);
    });

    // 현재 만드는 중인 수열
    const cur = [];
    const rst = [];

    // dfs
    const go = (cnt) => {
        // base line
        if (cnt === M) {
            rst.push(cur.join(" "));
            return;
        }

        for (let i = 1; i < N + 1; i++) {
            if (cur[cur.length - 1] > i) {
                continue;
            } else {
                cur.push(i);
                go(cnt + 1);
                cur.pop();
            }
        }
    };

    go(0);

    console.log(rst.join("\n"));
}

// Execute
solution();
