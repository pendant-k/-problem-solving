def solution(n, lost, reserve):
    duplicated = set(lost) & set(reserve)
    lost = sorted([i for i in lost if i not in duplicated])
    reserve = sorted([i for i in reserve if i not in duplicated])
    
    for i in lost:
        if i-1 in reserve:
            reserve.remove(i-1)
        elif i+1 in reserve:
            reserve.remove(i+1)
        else:
            n-=1
            
    return n
    