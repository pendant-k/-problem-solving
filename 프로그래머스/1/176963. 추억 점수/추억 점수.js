function solution(name, yearning, photo) {
    let answer = [];
    
    // :::: obj 구성 ::::
    // photo, yearning 기준
    let obj = {};
    for(let i=0; i < name.length; i++){
        obj[name[i]] = yearning[i];
    }
    // :::: test obj init ::::
    // console.log(obj);
    
    for(let row of photo) {
        let tmp = 0;
        // console.log(row);
        for(let el of row){
            if(obj[el]) {
         		tmp += obj[el];       
            }
        }
        // :::: add row sum to answer ::::
        answer.push(tmp);
    }
    
    return answer;
}