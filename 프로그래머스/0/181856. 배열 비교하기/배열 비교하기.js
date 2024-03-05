function solution(arr1, arr2) {
    var answer = 0;
    
    if(arr1.length !== arr2.length){
        if (arr1.length > arr2.length){
            answer++;
        } else {
            answer--;
        }
    } else {
        // same length
        var sum1 = 0;
        var sum2 = 0;
        
        arr1.map((e)=> sum1 += e);
        arr2.map((e)=> sum2 += e);
        
        if(sum1 === sum2) {
            return answer;
        } else {
        sum1 > sum2 ? answer++ : answer--;
        }
        
    }
    return answer;
}