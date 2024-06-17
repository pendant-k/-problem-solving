def solution(n):
    ls = []
    for i in range(1,500):
        if i % 3 != 0:
            if "3" not in str(i):
                ls.append(i)
    return ls[n-1]
