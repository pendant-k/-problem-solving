word = input()


def solution(value):
    middle = int(len(word) / 2)
    for c in range(middle):
        if word[c] != word[-c - 1]:
            return print(0)
    print(1)


solution(word)