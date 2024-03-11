function solution(strArr) {
    let answer = 0;
    let maxLen = 0;
    for(let v of strArr){
        if(v.length > maxLen){
            maxLen = v.length
        }
    }
    for(let i = 1 ; i <= maxLen ; i++){
        let temp = strArr.filter((e)=> e.length === i).length;
        if(answer < temp){
            answer = temp;
        };
    }
    return answer;
}