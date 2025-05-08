from collections import deque
# 각 경우에 따라 +,-하고 list에 값 할당
# 모든 list 값을 순회하며 다음 넘버를 더하거나 빼기


def solution(numbers, target):
    # lst 초기화
    lst = [numbers[0], -numbers[0]]
    
    queue = deque(numbers[1:])
    
    while queue:
        tmp = []
        current = queue.popleft()
        for i in lst:
            tmp.append(i + current)
            tmp.append(i - current)
        lst = tmp
    
    ret = lst.count(target)
        
    return ret