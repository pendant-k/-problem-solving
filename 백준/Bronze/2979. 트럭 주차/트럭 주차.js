// 2979 트럭주차

const [A, B, C, ...inputs] = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split(/\s+/)
    .map(Number);
// console.log(inputs);

// Solution body
function solution() {
    let rst = 0;
    // 시간은 1 ~ 100 사이값
    let timeTable = Array(101).fill(0);
    // console.log(timeTable[1]);
    for (let i = 0; i < inputs.length - 1; i += 2) {
        // console.log(arrivalTime, departureTime);
        // 도착 시간
        const arrivalTime = inputs[i];
        // 출발 시각
        const departureTime = inputs[i + 1];

        for (let j = arrivalTime; j < departureTime; j++) timeTable[j]++;
    }

    // calculate fee
    for (let time of timeTable) {
        if (time === 1) rst += A;
        if (time === 2) rst += 2 * B;
        if (time === 3) rst += 3 * C;
    }

    console.log(rst);
}

// Execute
solution();
