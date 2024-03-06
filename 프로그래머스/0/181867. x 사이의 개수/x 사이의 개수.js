function solution(myString) {
    let answer = [];
    let temp = myString.split("x");
    for(var v of temp){
       answer.push(v.length); 
    }
    
    return answer;
}