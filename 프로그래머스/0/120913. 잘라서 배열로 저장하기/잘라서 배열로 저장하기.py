def solution(my_str, n):
    answer = []
    temp = ""
    for i in range(len(my_str)):
        temp += my_str[i]
        if len(temp) == n:
            answer.append(temp)
            temp = ""
    if temp:
        answer.append(temp)
        
    return answer