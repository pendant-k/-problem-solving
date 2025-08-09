function solution(brown, yellow) {
    const totalArea = brown + yellow;
    
    for(let h =3; h <= Math.sqrt(totalArea); h++){
        if(totalArea % h === 0){
 			const w = totalArea / h;           
            
            if((h-2) * (w-2) === yellow){
                return [w,h];
            }
        }
    }
}