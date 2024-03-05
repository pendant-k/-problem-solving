function solution(num_list) {
    var mul = 1;
    var sum = 0;
    
    for(var i of num_list){
        mul *= i;
        sum += i;
    }
    
    return +(mul < sum**2);
}