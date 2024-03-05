function solution(numbers, n) {
    var answer = 0;
    for(var e of numbers){
        if(answer <= n){
            answer += e;
        } else {
            break;
        }
    }
    return answer;
}