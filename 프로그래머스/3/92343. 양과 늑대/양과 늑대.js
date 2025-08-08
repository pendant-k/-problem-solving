function solution(info, edges) {
    // 가능한 양 최대값
    const maxSheep = info.reduce((acc,val)=> acc+val,0);
    // console.log(maxSheep);
    
    // 결과값 저장
    let ret = 0;
    
    // 그래프 초기화
    const graph = Array(info.length).fill().map(() => []);
    for(const [u,v] of edges){
        graph[u].push(v);
    }
    // console.log(graph);
    
    
    // dfs
    const go = (sheep, wolf, current, possible) =>{
        if(info[current] === 0) sheep +=1;
        else wolf +=1;
        
        if(sheep <= wolf) return;
        
        ret = Math.max(ret,sheep);
        
         nextPossible = [...possible];
        
        for(const child of graph[current]){
            nextPossible.push(child);
        }
        
        const convertedPossible = nextPossible.filter((el) => el !== current);
        
        for(const next of convertedPossible){
            go(sheep, wolf, next, convertedPossible);
        }
        
    }
    
    go(0,0,0, [0]);
    
    return ret;
}