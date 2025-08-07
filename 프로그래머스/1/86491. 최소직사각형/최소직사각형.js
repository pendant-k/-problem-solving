// 가로, 세로 pic하는 경우
// (가로, 세로) => 한 쌍, 정렬 (큰값, 작은 값으로 바꾸기)
// 가로가 가장 큰 값, 세로가 가장 큰값 정리
// 가로 * 세로 기준임으로 반대 경우 고려하지 않아도 됨

function solution(sizes) {
    const width = [];
    const height = [];
    
    for(const [w,h] of sizes){
        if(w >= h){
            width.push(w);
            height.push(h);
        } else {
            width.push(h);
            height.push(w);
        }
        // console.log(w)
        // console.log(h)
    }
    
    
    width.sort((a,b)=> b-a);
    height.sort((a,b)=> b-a);
    
    return width[0] * height[0];
}