function solution(num_list) {
    const tempA = num_list.reduce((a,b) => {return a + b},0);
    const tempB = num_list.reduce((a,b) => {return a * b},1);
    return tempB < tempA * tempA ? 1 : 0;
}