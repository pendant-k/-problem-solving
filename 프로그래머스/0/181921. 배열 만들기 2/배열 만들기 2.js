function solution(l, r) {
    let answer = []
    for(let i = l ; i <= r ; i++){
        if(i % 5 === 0){
           if([...i.toString()].every((e)=> e === "0" || e === "5")){
    			answer.push(i);           
           }
        }
    }
    return answer.length === 0 ? [-1] : answer;
}