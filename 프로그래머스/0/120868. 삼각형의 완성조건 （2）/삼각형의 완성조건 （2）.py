def solution(sides):
    sides.sort()
    result = []
    temp = [i for i in range(1,sum(sides))]
    for j in temp:
        if j+sides[0] > sides[1]:
            result.append(j)
            continue
        if j >= sides[1]:
            result.append(j)
    return len(result)