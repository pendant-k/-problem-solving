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

    // 현재 수열
    const cur = [];
    const visited = Array(N + 1).fill(false);

    const go = (count) => {
        // base case
        if (count === M) {
            console.log(cur.join(" "));
            return;
        }

        // 모든 정점 탐색
        for (let i = 1; i < N + 1; i++) {
            // 오름차순인 경우만 확인...
            if (!visited[i]) {
                if (cur.length > 0) {
                    if (cur[cur.length - 1] > i) {
                        continue;
                    }
                }

                visited[i] = true;
                cur.push(i);
                // 다음 숫자 뽑기
                go(count + 1);

                // 원복
                visited[i] = false;
                cur.pop();
            }
        }
    };

    go(0);
}

// Execute
solution();
