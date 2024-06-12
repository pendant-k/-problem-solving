import sys

input = sys.stdin.readline

N = int(input())
chk = {}
for _ in range(N):
    [name, cmd] = input().rstrip().split(" ")
    # case : enter
    if cmd == "enter":
        chk[name] = 1
    # case : leave
    else:
        chk[name] -= 1

rst = []
for name, exist in chk.items():
    if exist == 1:
        rst.append(name)

print(*sorted(rst, reverse=True), sep="\n")