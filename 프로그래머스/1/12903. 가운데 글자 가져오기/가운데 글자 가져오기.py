import math

def solution(s):
    length = len(s)
    half = length / 2
    if length % 2 == 0:
    	return s[int(half)-1:int(half)+1]
    
    return s[math.trunc(half)]
