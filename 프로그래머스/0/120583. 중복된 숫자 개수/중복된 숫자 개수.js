function solution(array, n) {
    var count = 0;
    for(var e of array){
        if(e === n){
            count++;
        }
    }
    return count;
}