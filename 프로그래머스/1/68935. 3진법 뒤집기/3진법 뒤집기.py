def solution(n):
    max_fac = 0
    while 3**max_fac <= n:
    	max_fac +=1
    
    temp = []
    for i in range(max_fac)[::-1]:
        temp.append(n//(3**i))
        n %= (3**i)
    
    for j in range(len(temp)):
        temp[j] = temp[j] * (3**j)
    
    return sum(temp)