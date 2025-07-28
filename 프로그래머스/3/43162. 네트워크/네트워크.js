function solution(n, computers) {
    
    const dfs = (node, visited) => {
        visited[node] = true;
        // node 기준 node에 연결된 neighbor 방문
        for(let neighbor=0; neighbor<n; neighbor++){
            // node와 neighbor이 연결되어있고,
            // 방문하지 않은 경우 => dfs
            if(computers[node][neighbor] === 1 && !visited[neighbor] ){
                dfs(neighbor, visited,n);
            }
        }
        return;
    }
    
    // 네트워크 개수
    let cnt = 0;
    
    // visited[i] => i번 노드 방문 여부
    const visited = Array(n).fill(false);
    
    for(let i =0; i < n; i++){
        if(!visited[i]){
            cnt++;
        	dfs(i,visited);
        }
    }
    
    return cnt;
}

