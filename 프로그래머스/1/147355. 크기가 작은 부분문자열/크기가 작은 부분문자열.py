def solution(t, p):
    rst = 0
    for i in range(len(t) - len(p)+1):
        tmp = int(t[i:i+len(p)])
        if tmp <= int(p):
            rst +=1
    return rst