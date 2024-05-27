# 브루트 포스 문제인가?
# 모든 경우를 구하면 안된다.
# 최소가 되는 경우는 어떤 경우일까?


def solution(A,B):
    rst = 0
    A.sort()
    B.sort(reverse=True)
    
    while A:
        rst += A.pop() * B.pop()
        
    return rst