const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
// Current : 15649 (N과 M (1))
function solution() {
    const input = getInput();
    const lines = input.split("\n");
    // console.log(lines[0]);
    const [N, M] = lines[0].split(" ").map((value) => {
        return parseInt(value);
    });

    // 현재 수열을 담는 배열
    const rst = [];
    const visited = Array(N + 1).fill(false);

    // console.log(visited);

    // dfs
    const go = (count) => {
        // 재귀 종료 조건
        // 수열을 다 채운 경우
        if (count === M) {
            console.log(rst.join(" "));
            return;
        }

        for (let i = 1; i < N + 1; i++) {
            if (!visited[i]) {
                // 수열에 추가
                rst.push(i);
                visited[i] = true;
                go(count + 1);
                rst.pop();
                visited[i] = false;
            }
        }
    };

    go(0);
}

// Execute
solution();