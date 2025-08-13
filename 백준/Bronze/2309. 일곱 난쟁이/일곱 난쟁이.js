// 문제 정보 : 15657번 - N과 M (8)

const [...numbers] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s+/)
    .map((v) => +v);

numbers.sort((a, b) => a - b);

// Solution body
function solution() {
    let visited = Array(9).fill(false);
    let ret = [];

    const go = (cur) => {
        if (cur.length === 7) {
            const tmp = cur.reduce((acc, val) => acc + val, 0);
            if (tmp == 100) {
                // console.log(ret);
                ret = cur;
            }
            return;
        }

        for (let i = 0; i < 9; i++) {
            if (visited[i]) {
                continue;
            } else {
                visited[i] = true;
                go([...cur, numbers[i]]);
                visited[i] = false;
            }
        }
    };

    go([]);

    ret.sort((a, b) => a - b);
    console.log(ret.join("\n"));
}

// Execute
solution();
