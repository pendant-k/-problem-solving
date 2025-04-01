def backtracking():
    # 종료 조건
    if len(ret) == m:
        print(*ret, sep=" ")
        return

    # 종료 조건이 아닌 경우 -> 자식 노드 탐색
    for i in range(1, n+1):
        if i not in ret:
            if ret:
                if ret[-1] < i:
                    ret.append(i)
                    backtracking()
                    ret.pop()
            else:
                ret.append(i)
                backtracking()
                ret.pop()


ret = []
n, m = map(int, input().split())

backtracking()