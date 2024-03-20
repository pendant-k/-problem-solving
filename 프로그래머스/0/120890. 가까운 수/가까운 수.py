def solution(array, n):
    candidates = []
    # init min_gap
    min_gap = abs(array[0] - n)
    
    # find min_gap
    for i in array:
        if abs(i-n) < min_gap:
            min_gap = abs(i - n)
            
    # find candidates for answer
    for i in array:
        if abs(i-n) == min_gap:
            candidates.append(i)
            
    return sorted(candidates)[0]