def solution(i, j, k):
    answer = 0
    for x in range(i,j+1):
        for element in str(x):
            if element == str(k):
                answer +=1
    return answer
            
