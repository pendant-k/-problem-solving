word = input()


def solution(value):
    temp = word.upper()
    d = {}
    for c in temp:
        if c in d:
            d[c] += 1
        else:
            d[c] = 1

    solve = [k for k, v in d.items() if max(d.values()) == v]
    if len(solve) > 1:
        return "?"
    return "".join(solve)


print(solution(word))
