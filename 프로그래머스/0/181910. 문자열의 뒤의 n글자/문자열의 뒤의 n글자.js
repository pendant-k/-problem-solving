function solution(my_string, n) {
    var temp = my_string.length - n
    
    var answer = my_string.slice(temp)
    return answer;
}