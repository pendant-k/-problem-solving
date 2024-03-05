function solution(n) {
    var answer = 0
    // odd
    if(n % 2 !== 0){
        for(var a = 0 ; a <= n ; a++){
            if(a % 2 !== 0){
                answer += a;
            }
        }
    } else {
    // even 
        for(var b = 0 ; b <= n ; b++){
            if(b % 2 === 0){
                answer += b**2;
            }
        }
    }
    return answer;
}