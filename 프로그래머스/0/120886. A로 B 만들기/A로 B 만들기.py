def solution(before, after):
    list_before = list(before)
    list_after = list(after)
    
    list_before.sort()
    list_after.sort()
    
    if list_before == list_after:
        return 1
    
    return 0
