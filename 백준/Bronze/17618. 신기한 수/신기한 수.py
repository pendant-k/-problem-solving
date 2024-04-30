N = int(input())

cnt = 0

for i in range(1, N+1):
    tmp = 0
    for c in str(i):
        tmp += int(c)
    if i % tmp == 0:
        cnt += 1

print(cnt)