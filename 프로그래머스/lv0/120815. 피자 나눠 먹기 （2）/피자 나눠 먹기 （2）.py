import math

def solution(n):
    # 최소공배수
    tmp = math.gcd(n,6)
    return ((n * 6) / tmp) / 6



