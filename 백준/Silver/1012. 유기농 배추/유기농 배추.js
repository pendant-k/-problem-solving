const fs = require("fs");
// 전체 입력을 읽어와 줄 단위로 나눕니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const dy = [1, -1, 0, 0];
const dx = [0, 0, 1, -1];

// TC 개수
const T = Number(input[0]);

let line = 1;

for (let i = 0; i < T; i++) {
    // 현재 테스트 케이스의 M, N, K 값
    const [M, N, K] = input[line].split(" ").map(Number);
    // console.log(M, N, K);

    // K개 배추 위치 저장배열
    const locations = [];
    for (let j = 1; j <= K; j++) {
        const [X, Y] = input[line + j].split(" ").map(Number);
        locations.push([X, Y]);
    }

    // 예: 2차원 배열(배추밭) 생성 및 배추 심기
    const field = Array.from({ length: N }, () => Array(M).fill(0));
    locations.forEach(([X, Y]) => {
        field[Y][X] = 1;
    });

    // console.log(field);

    let wormCount = 0;
    const visited = Array.from({ length: N }, () => Array(M).fill(false));

    // (y,x)값을 시작으로 상하좌우 이동하면서 연결된 모든 곳 방문
    const dfs = (cy, cx, visited) => {
        visited[cy][cx] = true;
        for (let i = 0; i < 4; i++) {
            const ny = cy + dy[i];
            const nx = cx + dx[i];
            if (ny >= 0 && ny < N && nx >= 0 && nx < M) {
                if (field[ny][nx] === 1) {
                    if (!visited[ny][nx]) dfs(ny, nx, visited);
                }
            }
        }
        return;
    };

    // field 돌면서 component 개수 구하기
    for (let y = 0; y < field.length; y++) {
        for (let x = 0; x < field[0].length; x++) {
            if (field[y][x] === 1 && !visited[y][x]) {
                dfs(y, x, visited);
                // dfs 한번 실행 시
                // 해당 노드와 인접한 모든 노드를 방문함
                wormCount += 1;
            }
        }
    }

    // 결과 출력
    console.log(wormCount);

    line += K + 1;
}
