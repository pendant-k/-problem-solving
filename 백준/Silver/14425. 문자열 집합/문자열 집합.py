import sys

input = sys.stdin.readline

rst = 0
dict = {}
N, M = map(int, input().split())
for _ in range(N):
    dict[input()] = 1

for _ in range(M):
    chk = input()
    if chk in dict.keys():
        rst += 1

print(rst)