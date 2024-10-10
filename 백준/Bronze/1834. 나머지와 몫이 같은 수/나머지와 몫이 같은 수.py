N = int(input())
rst = 0
x = N

for i in range(1, N):
    rst += i*N + i

print(rst)