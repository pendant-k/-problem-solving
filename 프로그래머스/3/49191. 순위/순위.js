// 플로이드-워셜 변형 문제
// i -> k -> j의 경우를 모두 확인한다.
// 주어진 값은 i -> j뿐이지만, 중간에 거치는 경우도 모두 구해야함
function solution(n, results) {
    let answer = 0;
    // 방향 그래프 
    // winners에서 연결된 노드 개수 + loosers에서 연결된 노드 개수 = n인 경우에 순위 확정
    const winners = Array(n+1).fill(null).map((_)=> Array(n+1).fill(false));
    const losers = Array(n+1).fill(null).map((_)=> Array(n+1).fill(false));
    
    for(let [winner, loser] of results){
        winners[winner][loser] = true;
        losers[loser][winner] = true;
    }
    
    // 중간 노드
    for(let k=1; k < n+1; k++){
        // 시작 노드
        for(let i=1; i < n+1; i++){
            for(let j=1; j < n+1; j++){
                // 도착 노드
                // i가 k를 이겼고, k가 j를 이긴 경우
                // i가 j도 이긴다.
                if(winners[i][k] && winners[k][j]){
                    winners[i][j] = true;
                }
                if(losers[i][k] && losers[k][j]){
                    losers[i][j] = true;
                }
            }
        }
    }
    
    // 모든 노드에 대해서 연결된 노드를 조사한다.
    for(let i=1; i< n+1; i++){
        let tmp = 0;
        
        for(let j=1; j< n+1; j++){
            if (i !== j) {
                if(winners[i][j]){
                    tmp++;
                }
                if(losers[i][j]){
                    tmp++;
                }}
        }
        
        if(tmp === n-1){
            answer++;
        }
    }
    
    return answer;
}