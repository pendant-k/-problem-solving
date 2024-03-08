function solution(my_string, m, c) {
    let temp = [];
    
    while(my_string.length > 0){
        temp.push([...my_string.slice(0,m)]);
        my_string = my_string.slice(m);
    }
    
    return temp.map((e)=> e[c-1]).join("");
}