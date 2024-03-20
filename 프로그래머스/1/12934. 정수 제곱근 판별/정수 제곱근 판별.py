import math

def solution(n):
    if math.sqrt(n) == math.trunc(math.sqrt(n)):
        return (math.sqrt(n)+1) **2
    return -1
    
