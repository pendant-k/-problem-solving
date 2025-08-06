const fs = require("fs");

function getInput() {
    return fs.readFileSync("/dev/stdin").toString().trim();
}

function solution() {
    const input = getInput();
    const lines = input.split("\n");

    const [N_original, M] = lines[0].split(/\s+/).map((value) => parseInt(value));

    // --- 문제의 원인을 해결하는 부분 ---
    // Set을 이용해 입력값의 중복을 제거하고 정렬
    const uniqueNumbers = [...new Set(lines[1].split(/\s+/).map((value) => parseInt(value)))];
    uniqueNumbers.sort((a, b) => a - b);
    
    // 이제 numbers는 중복 없는 정렬된 배열
    const numbers = uniqueNumbers;
    const N = numbers.length;
    // ---------------------------------
    
    const cur = [];
    const ret = [];

    const go = (cnt) => {
        if (cnt === M) {
            ret.push(cur.join(" "));
            return;
        }

        for (let idx = 0; idx < N; idx++) {
            // 수열이 비어있거나, 현재 선택하려는 숫자가 이전 숫자보다 크거나 같으면 선택
            if (cur.length === 0 || cur[cur.length - 1] <= numbers[idx]) {
                cur.push(numbers[idx]);
                go(cnt + 1);
                cur.pop();
            }
        }
    };

    go(0);
    console.log(ret.join("\n"));
}

solution();