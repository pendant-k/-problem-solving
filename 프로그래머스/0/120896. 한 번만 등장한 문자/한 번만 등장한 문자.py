def solution(s):
    temp = []
    for item in s:
        if s.count(item) == 1:
            temp.append(item)
            
    return "".join(sorted(temp))