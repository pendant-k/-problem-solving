
// data[i][j] => i+1 번째 튜플의 j+1 번째 컬럼의 값


function solution(data, col, row_begin, row_end) {
   let ret = 0;
    
    // 1. col 값 정렬 + 동일 값인 경우 [0]번 값을 기준으로 내림차순
    data.sort((a,b) => {
        const [a_value, a_prime] = [a[col-1], a[0]];
        const [b_value, b_prime] = [b[col-1], b[0]];
        
          if(a_value > b_value) return 1;
          if(a_value === b_value){
              // 첫 번째 컬럼의 값을 기준으로 내림차순
              if (a_prime > b_prime) return -1;
              if (a_prime === b_prime) return 0;
              if (a_prime < b_prime) return 1;
          }
          if(a_value < b_value) return -1;
    })
    
    // 2. row_begin ~ row_end 해시함수
    let hash_arr = [];
	for(let i = row_begin-1; i<=row_end-1; i++){
        // mod 연산 결과값 저장 변수
        let tmp = 0;
        
        for(let j = 0; j < data[i].length; j++){
            // mod 연산 진행
            tmp += data[i][j] % (i+1);
        }
        hash_arr.push(tmp)
    }
    
    if (hash_arr.length > 0) {
        // 첫번째값 할당
        ret = hash_arr[0];
        for (let i = 1; i < hash_arr.length; i++) {
            ret ^= hash_arr[i];
        }
    }
    
    return ret;
}