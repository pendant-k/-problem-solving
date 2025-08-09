// 좌 우 판단 기준?
// 위 아래 판단 기준 -> 알파벳 m보다 작은 경우
const calUpDown = (target) => {
    if(target.charCodeAt(0) >= 'N'.charCodeAt(0)){
        return 'Z'.charCodeAt(0) - target.charCodeAt(0) + 1;
    }
    return target.charCodeAt(0) - 'A'.charCodeAt(0);
}

function solution(name) {
    let upDownCount = 0;
    for(let i = 0; i < name.length; i++){
        upDownCount += calUpDown(name[i]);
    }
    
    // 오른쪽으로 쭉 이동하는 경우에서 뒤로 돌아오는 경우가 더 적은지를 체크한다.
     let minMoveCount = name.length - 1; // 오른쪽으로만 쭉 가는 경우
    
    for (let i = 0; i < name.length; i++) {
        // 'A'가 아닌 첫 번째 문자의 위치
        let next = i + 1;
        while (next < name.length && name[next] === 'A') {
            next++;
        }
        
        // 오른쪽으로 갔다가 돌아오는 경우
        const move1 = (i * 2) + (name.length - next);
        
        // 왼쪽으로 갔다가 돌아오는 경우
        const move2 = (name.length - next) * 2 + i;
        
        minMoveCount = Math.min(minMoveCount, move1, move2);
    }
    
    return upDownCount + minMoveCount;
}