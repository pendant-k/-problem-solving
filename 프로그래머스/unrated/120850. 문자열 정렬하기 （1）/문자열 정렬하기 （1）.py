def solution(my_string):
    answer = []
    for str in my_string:
        if str in "1234567890":
            answer.append(int(str))

    return sorted(answer)