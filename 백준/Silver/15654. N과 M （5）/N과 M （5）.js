const fs = require("fs");

// Input
function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

// Solution body
// Current : 15654 (N과 M (5))
function solution() {
    const input = getInput();
    const lines = input.split("\n");
    // input
    const [N, M] = lines[0].split(/\s+/).map((value) => {
        return parseInt(value);
    });

    const numbers = lines[1]
        .split(/\s+/)
        .map(Number)
        .sort((a, b) => a - b);

    // 현재 만드는 수열
    const cur = [];
    // 최종 결과
    const rst = [];

    const visited = Array(numbers.length).fill(false);

    const go = (cnt) => {
        // base line
        // 재귀 종료 조건
        if (cnt === M) {
            rst.push(cur.join(" "));
        }

        for (let idx = 0; idx < numbers.length; idx++) {
            // console.log(numbers[idx]);
            const currentNumber = numbers[idx];
            if (!visited[idx]) {
                visited[idx] = true;
                cur.push(currentNumber);
                go(cnt + 1);
                visited[idx] = false;
                cur.pop();
            }
            // go(cnt + 1);
            // cur.pop();
        }
    };

    // 수열 만들기 -> dfs로 사용 가능한 숫자 조회
    // cur 배열에 숫자 하나씩 담기
    go(0);
    // 최종 결과 출력
    console.log(rst.join("\n"));
}

// Execute
solution();
