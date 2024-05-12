def solution(array, commands):
    rst = []
    for cmd in commands:
        [i,j,k] = cmd
        temp = sorted([e for e in array[i-1:j]])
        rst.append(temp[k-1])
    return rst