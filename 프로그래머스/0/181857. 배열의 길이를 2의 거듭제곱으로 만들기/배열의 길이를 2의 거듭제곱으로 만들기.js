function solution(arr) {
    while(true){
        if(checker(arr.length)) return arr;
        arr.push(0);
        continue;
    }
}

const checker = (n) => {
    for(let i = 0; i<=10 ; i++){
       if(n === 2**i) return true;
    }
    return false;
}

