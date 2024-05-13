# 막대기
import sys
input = sys.stdin.readline

N = int(input())

ls = [int(input()) for _ in range(N)]

cnt = 0
min_h = 0

for h in reversed(ls):
    if h > min_h:
        cnt += 1
        min_h = h

print(cnt)
