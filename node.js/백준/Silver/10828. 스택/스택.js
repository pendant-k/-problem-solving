const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);
const result = [];

const outputs = [];

const POP = "pop";
const TOP = "top";
const SIZE = "size";
const EMPTY = "empty";

for (let i = 1; i <= n; i++) {
    const command = input[i].trim().split(" ");
    // console.log(command);
    if (command.length > 1) {
        result.push(parseInt(command[1]));
        continue;
    }

    if (command[0] === POP) {
        outputs.push(result.pop() ?? -1);
        continue;
    }

    if (command[0] === SIZE) {
        outputs.push(result.length);
    }

    if (command[0] === EMPTY) {
        const tmp = result.length > 0 ? 0 : 1;
        outputs.push(tmp);
    }

    if (command[0] === TOP) {
        outputs.push(result[result.length - 1] ?? -1);
    }
}

console.log(outputs.join("\n"));