function solution(arr) {
    let x = 0;
    let previous = [...arr];
    while(true){
        let current = previous.map((e)=>{
            if(e >= 50 && e % 2 === 0){
                return e /2;
            }
            if (e < 50 && e % 2 !== 0){
                return (e*2) +1;
            }
            return e;
        });
        
        let isEqual = true;
        for(let i = 0 ; i < arr.length ; i++){
            if(previous[i] !== current[i]){
                isEqual = false;
                break;
            }
        }
        if(isEqual) break;
        previous = current;
        x++;
    }
    return x;
}