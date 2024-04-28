N, M = map(int, input().split(" "))

ls = [num for num in range(1, N+1)]

for _ in range(M):
    i, j = map(int, input().split(" "))
    target = [ls[k] for k in range(len(ls)) if k >= i-1 and k <= j-1]
    target.reverse()

    temp = ls[:i-1]
    temp.extend(target)
    temp.extend(ls[j:])
    ls = temp

print(*ls)
