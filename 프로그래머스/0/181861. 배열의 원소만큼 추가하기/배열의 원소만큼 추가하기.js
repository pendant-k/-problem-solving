function solution(arr) {
    const x = [];
    for(var v of arr){
        for(var i = 0 ; i < v ; i++){
            x.push(v);
        }
    }
    return x;
}