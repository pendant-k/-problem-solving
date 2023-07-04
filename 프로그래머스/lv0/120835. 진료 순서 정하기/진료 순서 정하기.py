def solution(emergency):
    answer = []
    for i in range(0, len(emergency)):
        tmp = emergency[i]
        count = 1
        for j in emergency:
            if j > tmp:
                count += 1
        answer.append(count)
    return answer
