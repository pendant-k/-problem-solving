function solution(numbers, target) {
    let ret = 0;
    const go = (node,cnt) => {
        if(node >= numbers.length){
            // console.log(cnt);
            // console.log(cnt);
            if(cnt === target) ret++;
            return;
        }
        const current = numbers[node];
        
        go(node+1,cnt+current);
        go(node+1,cnt-current);
    }
    
    go(0,0);
    
    return ret;
}