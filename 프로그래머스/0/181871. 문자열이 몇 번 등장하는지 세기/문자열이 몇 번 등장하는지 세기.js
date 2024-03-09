function solution(myString, pat) {
    let count = 0;
    for(let i=0;i<myString.length;i++){
        let temp = myString.slice(i,pat.length +i);
        if(temp === pat) count++;
    }
    return count;
}