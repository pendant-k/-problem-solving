def solution(my_string):
    answer = 0
    stack = []
    for item in my_string:
        if item.isdigit():
            stack.append(item)
        else:
            if len(stack) != 0:
                temp = int("".join(stack))
                answer += temp
                stack.clear()
                
    if len(stack) != 0:
        temp = int("".join(stack))
        answer += temp
        
    return answer