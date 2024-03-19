def solution(my_string):
    answer = []
    for c in list(my_string):
        if c.isupper() : answer.append(c.lower())
        else : answer.append(c)
    
    answer.sort()
    return "".join(answer)