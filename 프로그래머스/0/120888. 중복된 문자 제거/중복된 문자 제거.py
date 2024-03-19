def solution(my_string):
    answer = ""
    for c in list(my_string):
        if c not in answer:
            answer += c
    
    return answer