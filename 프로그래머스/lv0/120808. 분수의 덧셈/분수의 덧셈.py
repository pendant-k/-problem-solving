from math import gcd

def solution(numer1, denom1, numer2, denom2):
    # 분수 더하기
    tmpDenom = denom1 * denom2
    tmpNumer = (numer1 * denom2) + (numer2 * denom1)
    gcdenom = gcd(tmpDenom,tmpNumer)
    return [(tmpNumer / gcdenom),(tmpDenom / gcdenom)]