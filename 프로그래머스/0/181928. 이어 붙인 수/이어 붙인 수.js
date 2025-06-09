function solution(num_list) {
    let ret = 0;
    
    const odd = num_list.filter((num)=> num % 2 !== 0).join("");
    const even = num_list.filter((num)=> num % 2 === 0).join("");
    
    // convert할 필요가 없음
    
    // const oddConverted = odd.map((el)=> String(el)).join("");
    // const evenConverted = even.map((el)=> String(el)).join("");
    // return Number(oddConverted) + Number(evenConverted);
    return Number(odd) + Number(even);
}