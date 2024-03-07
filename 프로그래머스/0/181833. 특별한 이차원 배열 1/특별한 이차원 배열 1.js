function solution(n) {
    let answer = [];
    let temp = [];
    for(var i = 0 ; i < n ; i++){
        for(var j = 0 ; j < n ; j++){
            if(i === j){
                temp.push(1);
            } else {
                temp.push(0);
            }
        }
        answer.push(temp);
        temp = [];
    }
    return answer;
}