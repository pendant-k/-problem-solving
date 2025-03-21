

from collections import deque
from itertools import combinations as cm

import copy
import sys
input = sys.stdin.readline
# n * m (세로 * 가로) y < n / x < m

n, m = map(int, input().strip().split())

adj = []
dy = [0, 0, 1, -1]
dx = [1, -1, 0, 0]

for _ in range(n):
    row = list(map(int, input().split()))
    adj.append(row)

# print(adj)


def bfs(test_adj):
    queue = deque()

    for y in range(n):
        for x in range(m):
            if test_adj[y][x] == 2:
                queue.append((y, x))

    while queue:
        (cy, cx) = queue.popleft()

        # 4방향 탐색
        for i in range(4):
            ny = cy + dy[i]
            nx = cx + dx[i]

            # 유효한 정점인지 확인
            if 0 <= ny < n and 0 <= nx < m:
                if test_adj[ny][nx] == 0:
                    # 바이러스 퍼트리기
                    test_adj[ny][nx] = 2
                    # 방문 처리
                    queue.append((ny, nx))

    # 탐색 끝난 경우
    global ret
    tmp = 0
    for y in range(n):
        for x in range(m):
            if test_adj[y][x] == 0:
                tmp += 1

    ret = max(ret, tmp)


# 메인 로직
# 최댓값
ret = 0
wall_candidates = []

# 벽 세울 수 있는 모든 조합 확인
for y in range(n):
    for x in range(m):
        if not adj[y][x]:
            wall_candidates.append((y, x))

for c in cm(wall_candidates, 3):
    test_adj = copy.deepcopy(adj)
    for y, x in c:
        test_adj[y][x] = 1

    bfs(test_adj)


print(ret)