function solution(arr, idx) {
    return arr.findIndex((e, index)=> index >= idx && e === 1);
}