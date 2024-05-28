N = int(input())

# find constructor
no_result = True

for i in range(1, N):
    rst = i
    for c in str(i):
        rst += int(c)
    if rst == N:
        no_result = False
        print(i)
        break

if no_result:
    print(0)
