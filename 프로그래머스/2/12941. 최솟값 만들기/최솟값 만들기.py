
def solution(A,B):
    rst = 0
    A.sort()
    B.sort(reverse=True)
    
    while A:
        rst += A.pop() * B.pop()
        
    return rst