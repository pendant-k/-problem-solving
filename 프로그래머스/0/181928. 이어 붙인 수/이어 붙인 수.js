function solution(num_list) {
    var odd_num = ""
    var even_num = ""
    for(var e of num_list){
        if(e % 2 === 0){
            even_num += e.toString();
        } else {
            odd_num += e.toString();
        }
    }
    return Number(even_num) + Number(odd_num)
}