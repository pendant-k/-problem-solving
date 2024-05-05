N = int(input())
ls = []
for _ in range(N):
    ls.append(int(input()))

ls.sort()
print(*ls, sep="\n")