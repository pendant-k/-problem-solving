// 던전 중에 중복 없이 하나씩 뽑는 경우의 수 모두 고려
function solution(k, dungeons) {
    let rst = 0;
    const visited = Array(dungeons.length).fill(false);
    
    // 탐색 함수
    const go = (hp,cnt,visited) => {
        
     	if(hp === 0) {
            rst = Math.max(rst, cnt);
            return;
        } 
        
        //모든 던전 탐색
        for(let i =0; i < dungeons.length; i++){
            if(!visited[i]){
                console.log(i);
                // 진행 가능한 경우에만 진행
                if(hp >= dungeons[i][0]){
                	visited[i] = true;
                	go(hp-dungeons[i][1], cnt+1, visited)
                	visited[i] = false;
                } 
            }
        }
        rst = Math.max(rst, cnt);
        return;
    }
    
    go(k, 0, visited);
    
    return rst;
}