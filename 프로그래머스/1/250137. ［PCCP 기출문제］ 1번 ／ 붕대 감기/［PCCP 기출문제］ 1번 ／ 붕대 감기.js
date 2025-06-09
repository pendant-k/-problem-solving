function solution(bandage, health, attacks) {
    let rst_hp = health;
    let cnt = 0;
    
    // 시전 시간 , 초당 회복량 , 추가 회복량(시전 시간 모두 지나는 경우)
    const [t,x,y] = bandage;
    // console.log(t,x,y);
    
    const attackTimes = attacks.map((el)=> el[0]);
    const obj = {}
    
    for(let i of attacks){
        obj[i[0]] = i[1];
    }
    
    // console.log(obj['5']);
    
    
    // 시간 흐름
    for (let time = 0; time <= attackTimes[attackTimes.length-1]; time++) {
        
        // 공격 받은 경우
        if (attackTimes.includes(time)){
            cnt = 0;
            rst_hp -= obj[time];
        } else {
        // 매 초마다 회복 + 연속 카운트 증가
            cnt += 1;
            rst_hp += x;
        }
        
        // 사망하는 경우 체크
        if(rst_hp <= 0) {
            return -1;
        }
        
        
        // 추가 체력회복
        if (cnt == t){
            cnt = 0;
            rst_hp += y;
        }
        
        // 회복량이 최대 체력을 넘기지 못함
        if (rst_hp > health) {
            rst_hp = health;
        }
    }
    
    
    return rst_hp;
}