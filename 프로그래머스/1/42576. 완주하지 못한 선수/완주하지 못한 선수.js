function solution(participant, completion) {
    let answer = "";
    
    const hash = new Map();
    
    completion.forEach((e)=>{
        if(!hash.has(e)){
            hash.set(e,1);
        } else {
            hash.set(e, hash.get(e) + 1);
        }
    });
    
    for(let v of participant){
        if(!hash.has(v)){
            return v;
        }
        if(hash.get(v) >= 1){
            hash.set(v,hash.get(v) - 1);
        } else {
           return v;
        }
    }
}