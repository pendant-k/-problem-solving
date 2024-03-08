function solution(intStrs, k, s, l) {
    let answer = [];
    for(let e of intStrs){
        answer.push(Number(e.slice(s,s+l)));
    }
    return answer.filter(e => Number(e) > k);
}