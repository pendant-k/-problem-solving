import sys
input = sys.stdin.readline
dp = [1] * 10001

# 1로만 구성된 경우에서 2 추가되는 경우
for i in range(2, 10001):
    dp[i] += dp[i-2]

# 1로만 구성된 경우에서 3 추가되는 경우
for i in range(3, 10001):
    dp[i] += dp[i-3]

T = int(input())
for _ in range(T):
    n = int(input())
    print(dp[n])