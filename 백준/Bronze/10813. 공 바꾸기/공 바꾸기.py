N, M = map(int, input().split(" "))

# init list
ls = [ball+1 for ball in range(N)]

for _ in range(M):
    i, j = map(int, input().split(" "))
    temp = ls[i-1]
    ls[i-1] = ls[j-1]
    ls[j-1] = temp

print(*ls)