function solution(arr) {
   	result = 1;
    const n = arr.length;
    for(var i = 0; i < n ; i++){
        for(var j = 0; j < n ; j++){
            if(arr[i][j] !== arr[j][i]){
              result = 0;  
              break;
            }
        }
    }
    return result;
}