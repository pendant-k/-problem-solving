def solution(a, b, c, d):
    dices = [a,b,c,d]
    # 횟수 체크하기 위해 dict 사용
    dice_dict = dict()
    # dice를 순회하며 dict 생성
    for i in dices:
        if i in dice_dict:
            dice_dict[i] +=1
        else:
            dice_dict[i] = 1
    
    if len(dice_dict) == 1:
        return 1111 * a
    
    if len(dice_dict) == 4:
        return min(dices)
    
    converted = sorted(dice_dict.items(), key = lambda item: item[1])
    if len(converted) == 3:
        # 두 개 중복, 나머지 값 두 개
        q = converted[0][0]
        r = converted[1][0]
        return q * r
    
    # 세개 중복 또는 두 개 중복
    if len(converted) == 2:
        print(converted)
        if converted[1][1] == 3:
            p = converted[1][0]
            q = converted[0][0]
            return (10*p + q)**2
        else:
            p = converted[0][0]
            q = converted[1][0]
            return (p+q) * (abs(p-q))
        
        
    
    
