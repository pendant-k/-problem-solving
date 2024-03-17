def solution(sides):
    temp = 0
    max_num = max(sides)
    if len(set(sides)) == 1:
        return 1
    
    if len(set(sides)) == 2 and sides.count(max_num) == 2:
        return 1

    for i in sides:
   		if i != max_num: temp += i
    if temp > max_num: 
   	    return 1
    return 2