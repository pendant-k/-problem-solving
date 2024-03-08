function solution(num_list) {
    let count = 0;
    
    for(let v of num_list){
        let temp = v;
        
        while(temp > 1){
            if(temp % 2 === 0){
                temp = temp / 2;
            	count++;
                continue;
            } else {
                temp = (temp -1) / 2;
            	count++;
                continue;
            }
        }
    }
    
    return count;
}