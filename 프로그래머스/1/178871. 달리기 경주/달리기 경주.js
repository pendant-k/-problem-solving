
// players[i] i 번째 선수 이름

function solution(players, callings) {
    let ret = [];
    // 순위 : 이름
    // 이름 : 순위
    const obj = {};
    let cnt = 1;
    
    for(let i=0; i<players.length; i++){
        // name 별로 index 저장
        const tmp = players[i];
        obj[cnt] = tmp;
        obj[tmp] = cnt;
        cnt++;
    }
    
    // console.log(obj);
    
    for(let i=0; i<callings.length; i++){
        // get calling name
        const calledName = callings[i]
        const calledRank = obj[calledName];
        // console.log(calledName, calledRank);
        
        // 변경해야할 순위
        const targetRank = calledRank -1;
        const targetName = obj[targetRank];
        
        obj[calledName] = targetRank;
        obj[calledRank] = targetName;
        
        obj[targetName] = calledRank;
        obj[targetRank] = calledName;
    }
    
    for(let i=0; i < players.length; i++){
        ret.push(obj[i+1]);
    }
    
    
    return ret;
}