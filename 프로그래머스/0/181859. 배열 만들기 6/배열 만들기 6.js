function solution(arr) {
    let i = 0;
    let stk = [];
    while(i < arr.length){
        if(stk.length === 0){
            stk.push(arr[i]);
            i++;
            continue;
        } else {
         if(stk[stk.length -1] === arr[i]){
             stk.pop();
             i++;
            continue;
         } else {
             stk.push(arr[i]);
             i++;
            continue;
         }
        }
    }
    return stk.length === 0 ? [-1] : stk;
}