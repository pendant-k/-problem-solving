def solution(n):
    # pizza 모두 나눠지는 경우
    if n % 7 == 0 :
        answer = n//7
    else :
        answer = n//7 +1
    
    return answer