function solution(triangle) {
    // 푸는 방향은 맞음
    const dp = [];
    for(const node of triangle){
        dp.push(Array(node.length).fill(0));
    }
    
    // console.log(triangle[3]);
    // 모든 점 방문하면서 dp 배열 채우기
    dp[0][0] = triangle[0][0];
    for(let y =1; y<triangle.length; y++){
        for(let x = 0; x < triangle[y].length; x++){
            if(y === 1){
                dp[y][x] = dp[0][0] + triangle[y][x];
            } else {
                // 오른쪽 끝
                if(x === triangle[y].length -1){
            		dp[y][x] = dp[y-1][x-1] + triangle[y][x];
                } else if(x === 0) {
            		dp[y][x] = dp[y-1][x] + triangle[y][x];
                } else {
            		dp[y][x] = Math.max(dp[y-1][x], dp[y-1][x-1]) + triangle[y][x];
                }
            }
            // console.log(dp);
        }
    }
    // console.log(dp);
    // 첫번째 값 초기화
    // dp[0][0] = triangle[0][0];
    // console.log(dp[0][0]);
    // dp[y][x] = Math.max(dp[y-1][x-1], dp[y-1][x])
    
    // console.log(dp[dp.length-1]);
    
    const ret =  Math.max(...dp[dp.length-1]);
    return ret;
}