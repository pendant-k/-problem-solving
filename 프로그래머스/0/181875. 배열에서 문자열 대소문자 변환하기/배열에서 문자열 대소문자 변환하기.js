function solution(strArr) {
    let answer = [];
    strArr.map(function(e){
        if(answer.length % 2 === 0){
            answer.push(e.toLowerCase());
        } else {
            answer.push(e.toUpperCase());
        }
    })
   return answer;
}