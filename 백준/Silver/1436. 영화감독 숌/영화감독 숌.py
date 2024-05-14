import sys
input = sys.stdin.readline

N = int(input())
ls = []
cnt = 0

while len(ls) <= N:
    if "666" in str(cnt):
        ls.append(cnt)
    cnt += 1

print(ls[N-1])