const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const n = Number(input[0]); // 1부터 n까지
const m = Number(input[1]); // m개를 고른다

const output = [];
const selected = []; // 현재까지 고른 수열
const visited = new Array(n + 1).fill(false); // 사용 여부

// 여기서부터 백트래킹 로직 작성하세요
function backtrack() {
    if (selected.length === m) {
        output.push(selected.join(" "));
        return;
    }

    for (let i = 1; i < n + 1; i++) {
        if (!visited[i]) {
            selected.push(i);
            visited[i] = true;
            backtrack();
            selected.pop();
            visited[i] = false;
        }
    }
}

backtrack();
console.log(output.join("\n"));