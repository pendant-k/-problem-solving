# 스택

import sys
input = sys.stdin.readline

st = []
# input N
N = int(input())


# loop
for _ in range(N):
    cmd = list(input().split())
    if cmd[0] == "push":
        st.append(int(cmd[1]))
        continue

    if cmd[0] == "pop":
        if len(st) == 0:
            print(-1)
        else:
            print(st.pop())
        continue

    if cmd[0] == "top":
        if len(st) == 0:
            print(-1)
        else:
            print(st[-1])
        continue

    if cmd[0] == "size":
        print(len(st))
        continue

    if cmd[0] == "empty":
        if len(st) == 0:
            print(1)
        else:
            print(0)
        continue
