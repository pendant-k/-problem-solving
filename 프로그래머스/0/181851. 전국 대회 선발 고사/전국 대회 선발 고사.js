function solution(rank, attendance) {
    let temp = rank.filter((_,idx)=> attendance[idx]);
    
    temp.sort((a,b)=>a-b);
    
    if(temp.length > 3) temp = temp.slice(0,3);
    const [a,b,c] = temp;
    return 10000 * rank.indexOf(a) + 100 * rank.indexOf(b) + rank.indexOf(c);
}