def solution(s):
    converted = s.lower().split(" ")
    result = []
    for part in converted:
        temp = list(part)
        if temp:
            temp[0] = temp[0].upper()
            result.append("".join(temp))
        else:
            result.append("")
    return " ".join(result)
