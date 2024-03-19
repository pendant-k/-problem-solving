def solution(order):
    answer = 0
    for i in str(order):
        if clap(i): answer+=1
    return answer

def clap(value):
    return value == "3" or value == "6" or value == "9"