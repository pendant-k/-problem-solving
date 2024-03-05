function solution(num_list, n) {
    return num_list.filter((e,idx,_)=> idx % n === 0);
}