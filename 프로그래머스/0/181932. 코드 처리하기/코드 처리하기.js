function solution(code) {
    let ret = "";
    let mode = 0;
    
    for(let idx = 0 ; idx < code.length ; idx++){
        if(code[idx] === "1"){
            mode = mode ? 0 : 1;
            continue;
        } 
        if(mode){
            if(idx % 2 !== 0) ret += code[idx];
        } else {
            if(idx % 2 === 0) ret += code[idx];
        }
    }
    return ret.length ? ret : "EMPTY" ;
}
