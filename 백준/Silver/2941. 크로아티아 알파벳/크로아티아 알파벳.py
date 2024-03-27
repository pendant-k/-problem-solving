word = input()


def solution(value):
    check = ["c=", "c-", "dz=", "lj", "d-", "nj", "s=", "z="]
    for item in check:
            value = value.replace(item, "*")
    return len(value)

print(solution(word))