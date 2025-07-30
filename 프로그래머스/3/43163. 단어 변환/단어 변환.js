// validation -> 1 loop, indexing 2 word simultaneously
function solution(begin, target, words) {
    // constants
    const wordLength = words[0].length;
    // console.log(wordLength);
    
    // target이 배열에 없다면 곧바로 종료 : O(n)
    if(words.filter((el) => el === target).length === 0){
        return 0;
    }
    
    // bfs 수행
    const visited = Array(words.length).fill(false);
    // visited[0] = true;
    // console.log(visited);
    // queue data => [word, count]
    const queue = [[begin,0]];
    
    while(queue.length > 0){
        // queue 첫번째 데이터 조회
        const [currentWord, distance] = queue.shift();
        if(currentWord === target){
            return distance;
        }
        // 다음 가능한 단어를 큐에 삽입
        for(const [idx,word] of words.entries()){
            // 일치하는 문자 카운트
        	let cnt = 0
            for(let i=0; i<wordLength; i++){
                if(currentWord[i] === word[i]) cnt++;
            }
            
            if(cnt === wordLength -1 && !visited[idx]){
                visited[idx] = true;
                queue.push([word, distance +1]);
            }
        }
    }
    return 0;
}