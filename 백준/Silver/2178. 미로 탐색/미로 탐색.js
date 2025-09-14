// 2178 미로탐험

const [N, M, ...rows] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s+/);
// console.log(inputs);

// console.log(rows);

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

// Solution body
function solution() {
    const n = parseInt(N);
    const m = parseInt(M);

    const mp = [];
    // console.log(visited);
    // init maze
    for (const row of rows) {
        mp.push(Array.from(row).map((el) => parseInt(el)));
    }

    // console.log(mp);

    const bfs = () => {
        let queue = [[0, 0]];
        while (queue.length >= 1) {
            const [cy, cx] = queue.shift();
            if (cy == n - 1 && cx == m - 1) {
                console.log(mp[cy][cx]);
                return;
            }

            for (let i = 0; i < 4; i++) {
                const ny = cy + dy[i];
                const nx = cx + dx[i];

                // 이동 가능한 좌표
                if (ny >= 0 && ny < n && nx >= 0 && nx < m) {
                    if (mp[ny][nx] === 1) {
                        queue.push([ny, nx]);
                        mp[ny][nx] += mp[cy][cx];
                    }
                }
            }
        }
    };

    bfs();
}

// Execute
solution();
