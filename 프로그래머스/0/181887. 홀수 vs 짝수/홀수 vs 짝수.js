function solution(num_list) {
    let even_sum = 0;
    let odd_sum = 0;
    
    num_list.map(function(e,idx){
        if(idx % 2 === 0){
            even_sum += e;
        } else {
            odd_sum += e;
        }
    });
    
    
    return Math.max(even_sum, odd_sum)
    
}