from collections import deque
N, K = map(int, input().split())

# 1 ~ N까지 순열 생성
queue = deque(range(1, N+1))
rst = []

while queue:
    # count to K
    cnt = 1
    while cnt < K:
        tmp = queue.popleft()
        queue.append(tmp)
        cnt += 1
    # if cnt == K
    tmp = queue.popleft()
    rst.append(tmp)

print("<", end="")
print(*rst, sep=", ", end="")
print(">", end="")