import math

def solution(n):
    if math.sqrt(n) == math.floor(math.sqrt(n)):
        return 1
    return 2
