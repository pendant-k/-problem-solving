function solution(my_string) {
    let answer = [];
    for(var i = 0; i < my_string.length ; i++){
        const temp = my_string.slice(i);
        answer.push(temp)
    }
    return answer.sort();
}