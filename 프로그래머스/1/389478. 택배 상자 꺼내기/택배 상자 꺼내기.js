// 1 ~ n
// 사용하지 않는 값 => 0으로 표시

function solution(n, w, num) {
    var rst = 0;
    
    // 높이 구하기
    const h = parseInt((n / w) + (n % w > 0 ? 1 : 0));
    // console.log(h);
    
	// 1. 2차원 배열 만들기 * 0채우기
    const arr = [];
    for(let i=0; i<h; i++){
        const row = new Array(w).fill(0,0,w);
        arr.push(row);
    }
    
    // console.log(arr);
    
	// 2. ㄹ자로 숫자 채우기
    for(let y=h-1; y >= 0; y--){
        // 정방향 채우기
        if(y % 2 === 0) {
            for(let x = 0; x < w; x++){
                arr[h-y-1][x] = y*w + 1 + x;
            }
        } else {
        // 역방향 채우기
            for(let x = w-1; x >= 0; x--){
                arr[h-y-1][w-x-1] = y*w + 1 + x;
            }
        }
    }
    
	// 3. h (n/w +1 or not) - 해당 숫자의 y값 = 치워야하는 숫자
    for(let y=0; y < h; y++){
        for(let x=0; x < w; x++){
            if (arr[y][x] === num){
                for(let tmp = y; tmp >= 0; tmp--){
                    if (arr[tmp][x] <= n){
                        rst++;
                    }
                }
            }
        }
    }
    
    console.log(arr);
    
    
    
    return rst;
}