import math



def solution(n):
    temp = 1
    while math.factorial(temp) < n:
        temp +=1
        
    if math.factorial(temp) > n:
        temp -=1
    return temp