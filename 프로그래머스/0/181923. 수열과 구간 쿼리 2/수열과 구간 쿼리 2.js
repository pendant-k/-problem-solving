function solution(arr, queries) {
    let answer = [];
    for(let [s,e,k] of queries){
        const part = arr.slice(s,e+1).filter((e)=> e > k);
        if(part.length === 0){
            answer.push(-1);
        } else{
            answer.push(Math.min(...part));
        }
    }
    return answer;
}