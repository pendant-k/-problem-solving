function solution(arr, k) {
    return arr.map(function(e){
        if(k % 2 !== 0){
            return e * k;
        } else {
            return e + k;
        }
    });
}