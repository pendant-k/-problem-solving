word = input()


def solution(value):
    cnt = 0
    check = ["c=", "c-", "dz=", "lj", "d-", "nj", "s=", "z="]
    for item in check:
        if item in value:
            cnt += 1
            value = value.replace(item, "A")
    return len(value)


print(solution(word))
