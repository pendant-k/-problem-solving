N, L = map(int, input().split())
space = [False] * 1001
rst = 0

for i in map(int, input().split()):
    # hole
    space[i] = True

x = 0
# x : 0 ~ 1000
while x < 1001:
    if space[x]:
        rst += 1
        x += L
    else:
        x += 1


print(rst)