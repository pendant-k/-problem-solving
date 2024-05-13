import sys
input = sys.stdin.readline

K = int(input())
ls = []
for _ in range(K):
    tmp = int(input())
    if tmp:
        ls.append(tmp)
    else:
        ls.pop()

print(sum(ls))