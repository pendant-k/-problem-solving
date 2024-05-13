import sys
input = sys.stdin.readline

T = int(input())


def check(value):
    stk = []
    for c in value:
        if c == "(":
            stk.append(c)
        elif c == ")":
            if stk:
                if stk[-1] == "(":
                    stk.pop()
                else:
                    return False
            else:
                return False
    if stk:
        return False
    else:
        return True


for _ in range(T):
    tmp = input()
    if check(tmp):
        print("YES")
    else:
        print("NO")
