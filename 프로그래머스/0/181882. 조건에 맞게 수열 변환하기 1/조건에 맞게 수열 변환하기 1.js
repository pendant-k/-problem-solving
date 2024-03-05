function solution(arr) {
    var answer = [];
    for(var e of arr){
        if(e >= 50){
           if(e % 2 === 0){
               answer.push(e/2);
           } else {
               answer.push(e);
           }
        } else {
            if(e % 2 !== 0) {
                answer.push(e*2);
            } else {
                answer.push(e);
            }
        }
    }
    return answer;
}