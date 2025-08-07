// 주어진 숫자들로 만들 수 있는 모든 숫자 구하기

function solution(numbers) {
    const arr = [];
    const rst = [];
    
    const isPrime = (n) => {
        for(let i =2; i < n; i++){
            if(n % i === 0){
                return false;
            }
        }
        return n > 1;
    }
    
    const go = (cur,cnt,visited) => {
        if(cur.length > cnt){
            const tmp = Number(cur.join(""));
            if(isPrime(tmp)){
                if(!rst.includes(tmp)){
                	rst.push(tmp);
                }
            }
            return;
        }
        
        for(let i =0; i < arr.length; i++){
            if(!visited[i]){
                cur.push(arr[i]);
                visited[i] = true;
                go(cur, cnt, visited);
                cur.pop();
                visited[i] = false;
            }
        }
    }
    
    // string to array
    for(const chr of numbers){
        arr.push(chr);
    }
    // console.log(arr);
    
    for(let i=0; i<arr.length; i++){
        const currentLength = i;
        const visited = Array(arr.length).fill(false);
        go([],i, visited);
        
    }
    
    return rst.length;
}