function solution(triangle) {
    // 푸는 방향은 맞음
    const dp = [];
    
    for(const row of triangle){
        dp.push(Array(row.length).fill(0));
    }
    
    // 최초값 초기화
    dp[0][0] = triangle[0][0];
    
    for(let y =1; y<triangle.length; y++){
        for(let x = 0; x < triangle[y].length; x++){
            
            // 오른쪽 끝인 경우
            if(x === y){
                dp[y][x] = dp[y-1][x-1] + triangle[y][x];
            } 
            // 왼쪽 끝인 경우
            else if(x === 0) {
                dp[y][x] = dp[y-1][x] + triangle[y][x];
            } 
            // 가운데인 경우
            else {
                dp[y][x] = Math.max(dp[y-1][x], dp[y-1][x-1]) + triangle[y][x];
            }
            
        }
    }
    
    const ret =  Math.max(...dp[dp.length-1]);
    return ret;
}