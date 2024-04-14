N, M = map(int, input().split())
ls = ["0" for _ in range(N+1)]

for i in range(M):
    i, j, k = map(int, input().split())
    for idx in range(i, j+1):
        ls[idx] = str(k)

print(" ".join(ls[1:]))
