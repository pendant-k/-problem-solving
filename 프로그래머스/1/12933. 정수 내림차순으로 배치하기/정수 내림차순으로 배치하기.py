def solution(n):
    ls = sorted([ int(i) for i in list(str(n))], reverse=True)
    return int("".join([str(c) for c in ls]))
