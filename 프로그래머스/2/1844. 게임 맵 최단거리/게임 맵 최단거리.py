from collections import deque
import copy

def go(maps):
    n = len(maps[0])
    m = len(maps)
    adj = copy.deepcopy(maps)
    dy = [0,0,1,-1]
    dx = [1,-1,0,0]
    
    # 방문해야할 node 저장
    queue = deque([(0,0)])
    cnt = 1
    
    while queue:
        (cy,cx) = queue.popleft()
        for i in range(4):
            ny = cy + dy[i]
            nx = cx + dx[i]
            if 0 <= ny < m and 0 <= nx < n and adj[ny][nx] == 1:
                adj[ny][nx] = adj[cy][cx] + 1
                queue.append((ny,nx))
                
    return -1 if adj[m-1][n-1] == 1 else adj[m-1][n-1]
    
def solution(maps):
    return go(maps)