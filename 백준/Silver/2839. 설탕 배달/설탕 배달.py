N = int(input())

rst = 5000
# i for 3 count
for i in range(0, N//3 + 1):
    for j in range(0, N//5 + 1):
        if 3*i + 5*j == N:
            if rst >= i+j:
                rst = i+j
if rst == 5000:
    print(-1)
else:
    print(rst)