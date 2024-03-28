N = int(input())
words = []

for i in range(N):
    words.append(input())


def solution(ls):
    cnt = len(ls)
    for word in ls:
        for i in range(len(word) - 1):
            if word[i] == word[i+1]:
                continue
            # word[i] != word[i+1]
            else:
                if word[i] in word[i+1:]:
                    cnt -= 1
                    break
    return cnt


print(solution(words))
