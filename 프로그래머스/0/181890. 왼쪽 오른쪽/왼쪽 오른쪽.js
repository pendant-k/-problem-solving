function solution(str_list) {
    if(!str_list.includes("l") && !str_list.includes("r")) return [];
    
    let temp = "";
    for(let v of str_list){
        if(v === "l" || v === "r"){
            if(temp === ""){
                temp = v;
            }
        }
    }
    
    
    if(temp === "l") {
        return str_list.slice(0,str_list.indexOf("l"));
    } 
    return str_list.slice(str_list.indexOf("r")+1);
}
