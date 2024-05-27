def solution(s):
    target = s.split(" ")
    rst = []
    for word in target:
        tmp = ""
        for i in range(len(word)):
            if i % 2 == 0:
                tmp += word[i].upper()
            else:
                tmp += word[i].lower()
        rst.append(tmp)
    return " ".join(rst)