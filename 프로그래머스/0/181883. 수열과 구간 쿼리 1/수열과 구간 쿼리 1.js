function solution(arr, queries) {
    for (let query of queries){
        let [s,e] = query;
        for(let i = 0 ; i < arr.length ; i++){
            if(i >= s && i <=e) arr[i] = arr[i] +1;
        }
    }
    return arr;
}