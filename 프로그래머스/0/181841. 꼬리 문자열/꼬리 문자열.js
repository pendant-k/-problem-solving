function solution(str_list, ex) {
    let answer = '';
    str_list.filter((e)=> !e.includes(ex)).map((e)=> answer += e);
    return answer;
}