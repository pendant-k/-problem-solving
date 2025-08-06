function solution(n) {
    let answer = 0;
    const board = Array(n).fill(-1);
    // col 위치 정보를 저장
    // board[i] = i행에 놓인 퀸의 위치 (숫자료 표시 0 ~ N)
    
    const isValid = (row, col, board) => {
        for(let i =0; i < row; i++){
         	if(board[i] === col){
                return false;
            }
            // 열 차이 === 행 차이면 대각선에 위치한다는 것
            if(Math.abs(board[i]-col) === Math.abs(i - row)){
                return false;
            }
            
        }
        return true;
    }
    
    // 한 행에 하나의 퀸만 놓을 수 있음
    const go = (row) => {
        // 0 ~ n-1까지 놓은 경우 (n개 행) : 재귀 종료, count
        if(row === n){
            answer++
            return;
        }
        
        // 모든 열에 퀸을 놓아보는 경우의 수 조사
        for(let col=0; col < n; col++){
            if(isValid(row,col, board)){
                board[row] = col;
                go(row+1);
                // backtracking
                board[row] = -1;
            }
        }
    }
    
    go(0);
    
    return answer;
}