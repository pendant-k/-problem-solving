function solution(myString, pat) {
    let answer = "";
    
  for(let i=0; i<myString.length ; i++){
     let temp = myString.slice(i, pat.length +i);
     if(temp === pat) answer = myString.slice(0,pat.length + i);
  }  
    return answer;
}