function solution(num_list) {
    let ret = 0;
    
    const odd = num_list.filter((num)=> num % 2 !== 0);
    const oddConverted = odd.map((el)=> String(el)).join("");
    
    const even = num_list.filter((num)=> num % 2 === 0);
    const evenConverted = even.map((el)=> String(el)).join("");
    
    
    return Number(oddConverted) + Number(evenConverted);
}