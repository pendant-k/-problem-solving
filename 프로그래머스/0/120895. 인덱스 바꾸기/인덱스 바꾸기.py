def solution(my_string, num1, num2):
    ls = [c for c in my_string]
    temp = ls[num1]
    ls[num1] = ls[num2]
    ls[num2] = temp
    return "".join(ls)
        
