def calculate(num):
    for temp in range(2,num):
        if num % temp == 0:
            return 1
    return 0;
    
def solution(n):
    result = 0
    for num in range(n+1):
        if calculate(num):
            result +=1
    return result