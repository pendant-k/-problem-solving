function solution(num_list, n) {
    const firstArr = num_list.slice(0,n);
    const secondArr = num_list.slice(n);
    return secondArr.concat(firstArr);
}