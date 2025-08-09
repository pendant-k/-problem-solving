function solution(n, computers) {
    // 기본값은 1 (최소)
    var answer = 1;
    
    let visited = Array(n).fill(false);
    visited[0] = true;
    
    // 각 정점마다 연결된 모든 값 방문 처리
    // 0부터 n
    // 각 노드에 연결된 노드는 computers[i][j]임
    for(let i =0; i < computers.length; i++){
        if(!visited[i]) answer++;
        
    	let queue = [i];
        while(queue.length > 0) {
            const currentNode = queue.shift();
            for(let neighbor = 0; neighbor < computers[currentNode].length; neighbor++){
                if(neighbor === currentNode) continue;
                // 연결된 경우
                if(computers[currentNode][neighbor] === 1 && !visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
    
    return answer;
}