def solution(quiz):
    rst = []
    for q in quiz:
        [x,op,y,_,answer] = q.split()
        if op == "-":
            if int(x) - int(y) == int(answer):
                rst.append("O")
            else:
                rst.append("X")
        else:
            if int(x) + int(y) == int(answer):
                rst.append("O")
            else:
                rst.append("X")
    return rst