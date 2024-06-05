def solution(n):
    cnt = 0
    idx = 1
    while idx <= n:
        tmp = 0
        for i in range(idx,n+1):
            tmp += i
            if tmp > n: break
            if tmp == n:
                cnt +=1
                break
        idx +=1
    return cnt