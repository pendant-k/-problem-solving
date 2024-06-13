# 덱 2
import sys
from collections import deque

input = sys.stdin.readline
# deque 선언
deq = deque()

N = int(input())

for _ in range(N):
    tmp = input().rstrip().split(" ")
    if tmp[0] == "1":
        deq.appendleft(int(tmp[1]))
    elif tmp[0] == "2":
        deq.append(int(tmp[1]))
    elif tmp[0] == "3":
        if deq:
            print(deq.popleft())
        else:
            print(-1)
    elif tmp[0] == "4":
        if deq:
            print(deq.pop())
        else:
            print(-1)
    elif tmp[0] == "5":
        print(len(deq))
    elif tmp[0] == "6":
        if deq:
            print(0)
        else:
            print(1)
    elif tmp[0] == "7":
        if deq:
            print(deq[0])
        else:
            print(-1)
    elif tmp[0] == "8":
        if deq:
            print(deq[-1])
        else:
            print(-1)
