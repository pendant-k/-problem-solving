function solution(arr, k) {
    const temp = new Set(arr);
    const result = [...temp];
    if(result.length !== k){
        while(result.length < k){
            result.push(-1);
        }
    }
    return result.slice(0,k);
}