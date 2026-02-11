const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const t = Number(input[0]);

let output = [];

for (let i = 1; i <= t; i++) {
    // 괄호 저장
    let stack = [];
    const str = input[i].trim();
    for (c of str) {
        if (c === "(") {
            stack.push(c);
            continue;
        }

        if (stack.length < 0) {
            stack.push(c);
            continue;
        }

        const top = stack[stack.length - 1];
        if (top === "(") {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    const tmp = stack.length === 0 ? "YES" : "NO";
    output.push(tmp);
}

console.log(output.join("\n"));
