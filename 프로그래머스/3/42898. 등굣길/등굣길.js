// 1 <= m, n <= 100
// m,n 모두 1인 경우는 없다. m => x / n => y
function solution(m, n, puddles) {
    const MOD = 1000000007;
    let dp = Array(n).fill().map(()=> Array(m).fill(0));
    // dist === n-1 m-1
    // init puddles
    for(const [px,py] of puddles){
        dp[py-1][px-1] = -1;
    }
    // 시작점 반드시 초기화 (dp 첫번째는 반드시 초기화해야함)
    dp[0][0] = 1;
    
    for(let y = 0; y < n; y++){
        for(let x = 0; x < m; x++){
            // 좌표가 시작점인 경우
            if(y === 0 && x === 0) continue;
            // 현재 좌표가 물웅덩이인 경우
            if(dp[y][x] === -1) continue;
           	const upCase = (y > 0 && (dp[y-1][x] !== -1)) ? dp[y-1][x] : 0;
            const leftCase = (x > 0 && (dp[y][x-1] !== -1)) ? dp[y][x-1] : 0;
            
            dp[y][x] = (upCase + leftCase) % MOD;
        }
    }
    // console.log("[MAP] : ", map);
    // console.log(`[Input] pubbles: ${puddles}`);
    
    return dp[n-1][m-1];
}