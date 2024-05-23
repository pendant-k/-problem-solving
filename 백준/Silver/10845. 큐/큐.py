import sys
from collections import deque

input = sys.stdin.readline

N = int(input())
q = deque()
for _ in range(N):
    cmd = input().rstrip().split(" ")
    if cmd[0] == "push":
        q.append(int(cmd[1]))
        continue
    if cmd[0] == "pop":
        print(q.popleft() if q else -1)
        continue
    if cmd[0] == "size":
        print(len(q))
        continue
    if cmd[0] == "empty":
        print(0 if q else 1)
        continue
    if cmd[0] == "front":
        print(q[0] if q else -1)
        continue
    if cmd[0] == "back":
        print(q[-1] if q else -1)
        continue