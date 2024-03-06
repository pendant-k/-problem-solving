function solution(num_str) {
    var answer = 0;
    for(var c of num_str){
        answer += parseInt(c);
    }
    
    return answer;
}