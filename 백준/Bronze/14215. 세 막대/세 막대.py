ls = list(map(int, input().split()))
ls.sort()
a, b, c = ls

if a+b <= c:
    # 가장 긴 변이 두 변의 합보다 최소 1이상 커야한다.
    c = a+b - 1

print(a+b+c)