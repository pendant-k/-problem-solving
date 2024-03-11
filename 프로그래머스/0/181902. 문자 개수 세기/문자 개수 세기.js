function solution(my_string) {
    let answer = [];
    let ap = "abcdefghijklmnopqrstuvwxyz";
    for(let c of ap.toUpperCase()){
        let count = 0;
        [...my_string].map((e)=> {
            if(e === c){
                count++
            }
        });
        answer.push(count);
    }
    
    for(let c of ap){
        let count = 0;
        [...my_string].map((e)=> {
            if(e === c){
                count++
            }
        });
        answer.push(count);
    }
    return answer;
}