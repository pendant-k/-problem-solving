N, K = map(int, input().split())
arr = []
coins = [int(input()) for _ in range(N)]

rst = 0
for money in coins[::-1]:
    if money <= K:
        rst += K // money
        K %= money

print(rst)