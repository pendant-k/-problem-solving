def solution(s1, s2):
    answer = 0
    for el in s1:
        if el in s2: answer = answer+1
    
    return answer
