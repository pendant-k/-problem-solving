function solution(myStr) {
    let answer = [];
    let temp = "";
    while(myStr !== ""){
        let v = myStr[0];
        if(v === "a" || v=== "b" || v === "c"){
            if(temp !== ""){
                answer.push(temp);
                temp = "";
            } 
            myStr = myStr.slice(1);
        } else {
            temp += v;
            myStr = myStr.slice(1);
        }
    }
    if(temp !== ""){
    	answer.push(temp);
    }
    
    return answer.length === 0 ? ["EMPTY"] : answer;
}