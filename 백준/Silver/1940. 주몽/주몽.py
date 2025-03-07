# 1940(S4) - 주몽
import sys
input = sys.stdin.readline
N = int(input())
M = int(input())

# solution

rst = 0
arr = list(map(int, input().split()))
arr.sort()

start, end = 0, N-1
while start < end:
    tmp = arr[start] + arr[end]
    if tmp < M:
        start += 1
    elif tmp > M:
        end -= 1
    else:
        rst += 1
        start += 1
        end -= 1
print(rst)
