# 완탐 -> 시간 초과
# 작은 값부터 넣어야 최대한 많은 부서에 예산 사용이 가능함
# 최대한 많은 부서에 예산 사용하기
def solution(d, budget):
    sum_d = 0
    rst = 0
    
    for i in sorted(d):
        if sum_d + i <= budget:
            sum_d += i
            rst +=1
            
    return rst
            
        
	