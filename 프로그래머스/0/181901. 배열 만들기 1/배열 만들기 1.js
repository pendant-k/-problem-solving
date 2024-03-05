function solution(n, k) {
    let answer = [];
    for(var i = 1 ; i <= n ; i++){
        if(i % k === 0){
            answer.push(i);
        }
    }
    return answer;
}