// bfs로 전체 탐색 + distance 구하기
// distance들은 모두 하나의 배열에 저장 ?
function solution(n, edge) {
    let cnt = 0;
    
    // graph로 표현하기
    // 1 ~ n까지의 노드
    const visited = Array(n+1).fill(false);
    visited[1] = true;
    // console.log(visited);
    // adj list
    const graph = {};
    
    
    // 1. 그래프 초기화
    for(let i=1; i <n+1; i++){
        graph[i] = [];
    }
    
    // console.log(graph);
    
    for(const [a,b] of edge){
        graph[a].push(b);
        graph[b].push(a);
    }
    
    // console.log(graph);
    
    
    // 2. 그래프 탐색하면서 각 노드까지의 depth 구하기
    
    // queue에 데이터 담을 때 함께 담아둘 공간
    const sheet = [];
    // bfs 활용 queue
    const queue = [[1,0]];
    while (queue.length > 0) {
    	const [node, depth] = queue.shift();
        // console.log(node, depth);
        
        // 각 노드 별 방문하지않은 연결된 노드들 탐색 queue에 삽입
        for(const otherNode of graph[node]){
            // console.log(otherNode);
            // console.log(visited[otherNode]);
            if(!visited[otherNode]) {
                queue.push([otherNode, depth+1]);
                sheet.push([otherNode, depth+1]);
                visited[otherNode] = true;
            }
        }
    }
    // console.log(sheet);
    const maxVal = sheet[sheet.length - 1][1];
    
    for(const el of sheet){
        if (el[1] === maxVal) cnt++;
    }
    
    return cnt;
}