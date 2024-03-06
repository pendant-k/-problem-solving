function solution(myString) {
    let answer = "";
    for (var c of myString){
        c.charCodeAt(0) > "l".charCodeAt(0) ? answer += c : answer += "l";
    }
    
    return answer;
}