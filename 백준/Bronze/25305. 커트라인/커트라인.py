# 커트라인 / 정렬
import sys
input = sys.stdin.readline

# input
N, k = map(int, input().split())
ls = sorted([i for i in map(int, input().split())], reverse=True)

print(ls[k-1])