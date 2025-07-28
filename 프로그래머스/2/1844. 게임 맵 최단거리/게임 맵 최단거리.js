// 최단거리 => 아묻따 BFS
// 효율성 탈락 -> Queue 맹글어쓰자...
function solution(maps) {
	// 상하좌우 이동할 때 씀   
    const dy = [1,-1,0,0];
    const dx = [0,0,1,-1];
    
    const visited = Array.from({ length: maps.length }).map(
        () => Array(maps[0].length).fill(false)
    );
    
    // console.log(visited);
    
    const bfs = () => {
        // y,x,distance
        const queue = [[0,0,1]];
        while(queue.length > 0){
            const [y,x,distance] = queue.shift()
            
            // 도착했는지 확인
            if(y === maps.length -1 && x === maps[0].length -1) {
                return distance;
            } 
            
            for(let i = 0; i<4; i++){
                // 다음 움직이는 좌표
                const ny = y + dy[i];
                const nx = x + dx[i];
                
                // 칸 유효성 체크
                if(ny >=0 && nx >=0 && ny <= maps.length -1 && nx <= maps[0].length -1) {
                    if(maps[ny][nx] === 1 && !visited[ny][nx]){
                    	queue.push([ny,nx, distance +1]);
            			visited[ny][nx] = true;
                    }
                }
            }
        }
        return -1
    }
    
    return bfs();
}