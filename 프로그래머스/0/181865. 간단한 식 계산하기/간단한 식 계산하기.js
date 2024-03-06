function solution(binomial) {
    let answer = 0;
    let tempArr = binomial.split(" ");
    
    let a = tempArr[0]; 
    let op = tempArr[1];
    let b = tempArr[2];
    if(op === "+") return Number(a) + Number(b);
    if(op === "-") return Number(a) - Number(b);
    if(op === "*") return Number(a) * Number(b);
    
}