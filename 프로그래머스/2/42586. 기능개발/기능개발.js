function solution(progresses, speeds) {
    let counts = [];
    const answer = [];
    for(let i = 0 ; i < progresses.length ; i++){
        let count = 0;
        while(progresses[i] < 100){
            progresses[i] += speeds[i];
            count++;
        }
        counts.push(count);
    }
    
    while(true){
        let front = counts[0];
        let deploy = 0;
        while(counts[0] <= front){
            deploy++;
            counts.shift();
        }
        answer.push(deploy);
        if(counts.length === 0) break;
    }
    return answer;
}