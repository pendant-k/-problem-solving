function solution(number) {
    let answer = 0;
    for(var c of number){
        answer += Number(c);
    }
    return answer % 9;
}