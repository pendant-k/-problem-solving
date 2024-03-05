function solution(a, b) {
    let temp = Number(a + "" + b);
    let temp_reverse = Number(b + "" + a);
    return temp >= temp_reverse ? temp : temp_reverse;
}