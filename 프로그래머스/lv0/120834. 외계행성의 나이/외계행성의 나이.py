def solution(age):
    convert = str(age)
    answer = ""
    for i in convert:
        answer = answer + (chr(int(i) + 97))
    return answer