function solution(names) {
    var answer = [];
    
    names.map((e,idx)=> idx % 5 === 0 ? answer.push(e) : null );
    return answer;
}