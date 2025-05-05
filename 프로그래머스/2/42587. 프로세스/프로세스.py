from collections import deque


def solution(priorities, location):
    cnt = 0
    queue = deque()
    
    for i in range(len(priorities)):
        queue.append((i,priorities[i]))
    
    while queue:
        willRun = False
        (idx, value) = queue.popleft()
        for (i,v) in queue:
            if v > value:
                willRun = True
                break
        
        if willRun:
            queue.append((idx,value))
        else:
            cnt += 1
            if idx == location:
                return cnt
        
        
