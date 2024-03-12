function solution(picture, k) {
    const answer = [];
    for(let str of picture){
        for(let i = 0 ; i < k ; i++){
            answer.push([...str].map((e) => e.repeat(k)).join(""));
        }
    }
    return answer;
}