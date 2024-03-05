function solution(rny_string) {
    var answer = "";
    for(var v of rny_string){
        if(v === "m"){
            answer += "rn"
        } else {
            answer += v;
        }
    }
    return answer;
}