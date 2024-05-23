from collections import deque
import sys

input = sys.stdin.readline

q = deque()
N = int(input())
for _ in range(N):
    cmd = input().rstrip().split(" ")
    if cmd[0] == "push_front":
        q.appendleft(int(cmd[1]))
        continue
    if cmd[0] == "push_back":
        q.append(int(cmd[1]))
    if cmd[0] == "pop_front":
        print(q.popleft() if q else -1)
        continue
    if cmd[0] == "pop_back":
        print(q.pop() if q else -1)
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