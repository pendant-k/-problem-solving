function solution(arr) {
    let row = arr.length;
    let column = arr[0].length;
    if(row === column) return arr;
   	if(row > column){
        arr = arr.map((e)=> {
            while(e.length !== row){
                e.push(0);
            }
            return e;
        });
        return arr;
    }
    
    if(row < column){
        for(let i = 0 ; i < column - row ; i++){
            arr.push(Array(column).fill(0));
        }
        return arr;
    }
}