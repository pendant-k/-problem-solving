function solution(n, control) {
    for(var v of control){
        switch(v){
            case "w": 
               n++;
               break;
            case "s":
               n--;
               break;
            case "d":
               n += 10;
               break;
            case "a":
               n -= 10;
               break;
            default: 
               return;
        }
    }
    return n;
}