from itertools import permutations as pm

def is_prime(n):
    if n <=1:
        return False
    else:
        for i in range(2,int(n**0.5+1)):
            if n % i == 0:
                return False
        return True


def solution(numbers):
    chk = {}
    answer = 0
    cnt = 1
    while cnt < len(numbers)+1:
        for i in pm(numbers,cnt):
            tmp = "".join(i)
            if tmp[0] == 0:
                pass
            if is_prime(int(tmp)):
                if int(tmp) in chk.keys():
                    pass
                else:
                    chk[int(tmp)] = 1
                    answer +=1
        cnt+=1
    return answer