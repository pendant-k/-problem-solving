space = [[0] * 100 for _ in range(100)]
result = 0

N = int(input())

for _ in range(N):
    x, y = map(int, input().split())

    for i in range(y, y+10):
        for j in range(x, x+10):
            if space[i][j] == 0:
                space[i][j] = 1
            else:
                pass

for ele in space:
    result += sum(ele)

print(result)
