def solution(clothes):
    rst = 0
    # 곱 저장
    tmp = 1
    d = {}
    
    # 각각의 옷 입었을 경우
    for i in clothes:
        key = i[1]
        if key in d.keys():
            d[key].append(i[0])
        else:
            d[key] = [i[0]]
        
        rst +=1
    
    print(d)
     
    for item in d.values():
        tmp *= (len(item)+1)
        
    
    return rst if len(d.keys()) == 1 else tmp -1