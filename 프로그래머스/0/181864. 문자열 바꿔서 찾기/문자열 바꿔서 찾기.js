function solution(myString, pat) {
    let tempStr = "";
    
    for(var c of myString){
        if(c === "A"){
         	tempStr += "B";   
        } else if (c === "B"){
            tempStr += "A";
        } else {
            tempStr += c;
        }
    }
    return +(tempStr.includes(pat));
}