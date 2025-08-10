
function solution(maps) {
    const dy = [0,0,1,-1];
    const dx = [1,-1,0,0];
    
    // y , x , dist
    let queue = [[0,0,1]];
    
    while(queue.length > 0){
        const [cy,cx, dist] = queue.shift()
        
        if(cy === maps.length-1 && cx === maps[0].length -1){
            return dist;
        }
        
        for(let i =0; i < 4; i++){
            const ny = cy + dy[i];
            const nx = cx + dx[i];
            
            // 유효한 좌표일 때
            if(ny >=0 && ny < maps.length && nx >=0 && nx < maps[0].length){
                // 방문하지 않은 경우에만
                if(maps[ny][nx] === 1){
                    queue.push([ny,nx, dist+1]);
                    // 방문 처리
                    maps[ny][nx]++;
                }
            }
        }
    }
    
    return -1
}