function solution(answers) {
    const ret = []
    
    const first = [1,2,3,4,5];
    const second = [2,1,2,3,2,4,2,5];
    const third = [3,3,1,1,2,2,4,4,5,5];
    
    let ls = [0,0,0];
    
    for(let idx = 0; idx < answers.length; idx++){
        if(answers[idx] === first[idx % first.length]) ls[0]+=1
        if(answers[idx] === second[idx % second.length]) ls[1]+=1
        if(answers[idx] === third[idx % third.length]) ls[2]+=1
        // console.log(ls)
    }
    
    const mx = Math.max(...ls);
    
    for(let i=0; i<ls.length; i++){
        if(ls[i] === mx){
            ret.push(i+1);
        }
    }
    return ret;
}