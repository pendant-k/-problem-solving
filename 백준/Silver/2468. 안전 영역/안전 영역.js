// 2468: 안전 영역
// dfs , bfs 모두 구현해보기
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 첫 줄: N
const N = Number(input[0]);

// 다음 줄들: 높이 정보
const board = input.slice(1).map((line) => line.split(" ").map(Number));
// console.log(board);

const dy = [0, 0, 1, -1];
const dx = [1, -1, 0, 0];

// check max h value
let maxHeight = 0;
board.forEach((row) => {
    row.forEach((e) => {
        if (e > maxHeight) maxHeight = e;
    });
});
// console.log(maxHeight);

// rain ++ 증가하면서 매턴마다 컴포넌트 개수 구하기

function solution() {
    // 안전지대 최대값
    let maxCount = 0;

    // rain : 강수량 / TC 개념
    for (let rain = 0; rain <= maxHeight; rain++) {
        let visited = Array(N)
            .fill()
            .map((_) => Array(N).fill(false));
        let tempCount = 0;

        const dfs = (y, x) => {
            visited[y][x] = true;
            for (let i = 0; i < 4; i++) {
                ny = y + dy[i];
                nx = x + dx[i];

                if (ny >= 0 && ny < N && nx >= 0 && nx < N) {
                    // 안전지대인 경우
                    if (board[ny][nx] > rain && !visited[ny][nx]) {
                        dfs(ny, nx);
                    }
                }
            }
            return;
        };
        // console.log(visited);
        for (let y = 0; y < N; y++) {
            for (let x = 0; x < N; x++) {
                // 안전지대이면서 방문하지 않은 점이면 카운트 ++ 이후 dfs
                if (board[y][x] - rain > 0 && !visited[y][x]) {
                    tempCount += 1;
                    dfs(y, x);
                }
            }
        }
        maxCount = Math.max(maxCount, tempCount);
        // console.log(maxCount);
    }

    //
    console.log(maxCount);
}

// run solution function
solution();
