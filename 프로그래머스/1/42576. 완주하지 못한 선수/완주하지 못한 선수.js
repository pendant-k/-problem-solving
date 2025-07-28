function solution(participant, completion) {
    let rst = '';
    // js에서 객체 생성에는 hashmap 보다 성능이 좋은 방식을 활용함
    const hash = {};
    // 1. init hash
    for(let i=0; i<participant.length;i++){
        const currentKey = participant[i];
        if(hash[currentKey]){
            hash[currentKey]++;
        } else {
            hash[currentKey] = 1;
        }
    }
    
    // 2. loop 순회, 카운트 빼기
    for(let i=0; i<completion.length; i++){
        const currentKey = completion[i];
        if(hash[currentKey] === 0) {
            rst = currentKey;
            break;
        } else {
            hash[currentKey]--;
        }
    }
    // 3. 완주 못한 사람 확인
    for(let key in hash){
        if(hash[key] > 0){
            rst = key;
            break;
        }
    }
    
    return rst;
}