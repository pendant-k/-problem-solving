function solution(num_list) {
    var lastItem = num_list[num_list.length -1];
    var prevItem = num_list[num_list.length -2];
    
    if(lastItem > prevItem){
        num_list.push(lastItem - prevItem);
    } else {
        num_list.push(lastItem *2);
    }
    return num_list;
}