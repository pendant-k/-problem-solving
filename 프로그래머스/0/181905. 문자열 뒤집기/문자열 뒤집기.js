function solution(my_string, s, e) {
    let answer = "";
    const left = my_string.substring(0,s);
    const right = my_string.substring(e+1);
    let temp = my_string.substring(s,e+1).split("").reverse().join("");
    return left + temp + right;
}