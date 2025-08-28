function solution(start_num, end_num) {
    var answer = [];
    
    for(let i=end_num; i <= start_num;i++){
        answer.push(i);
    }
    
    answer.sort((a,b)=> b-a);
    
    return answer;
}