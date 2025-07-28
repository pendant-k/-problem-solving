function solution(n, computers) {
    let cnt = 0;
    const visited = Array(n).fill(false);
    
    const dfs = (node) => {
        visited[node] = true;
        
        for(let neighbor=0; neighbor<n; neighbor++){
            if(computers[node][neighbor] === 1 && !visited[neighbor] ){
                dfs(neighbor);
            }
        }
        return;
    }
    
    
    for(let i =0; i < n; i++){
        if(!visited[i]){
            cnt++;
        	dfs(i);
        }
    }
    
    return cnt;
}

