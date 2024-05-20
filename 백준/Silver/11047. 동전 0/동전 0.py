N, K = map(int, input().split())
arr = []
for _ in range(N):
    arr.append(int(input()))

rst = 0
for money in arr[::-1]:
    if money <= K:
        rst += K // money
        K %= money

print(rst)
