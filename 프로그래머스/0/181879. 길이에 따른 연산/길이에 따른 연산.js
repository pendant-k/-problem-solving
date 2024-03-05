function solution(num_list) {
    var answer = 0;
    if(num_list.length >= 11){
        for(var i of num_list){
            answer += i;
        }
    } else {
        answer++;
        for(var i of num_list){
            answer *= i;
        }
    }
    return answer;
}