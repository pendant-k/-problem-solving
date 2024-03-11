function solution(my_string, queries) {
    let arr = [...my_string]
    
    for(let [s,e] of queries){
        let temp = arr.slice(s,e+1).reverse();
        for(let i = 0 ; i < temp.length ; i++){
            arr[s+i] = temp[i];
        }
    }
    return arr.join("");
}