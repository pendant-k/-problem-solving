def solution(my_string):
    ls = my_string.split(" ")
    # init answer (first element)
    answer = int(ls[0])
    
    for i in range(len(ls)-1):
        if ls[i] == "+":
            answer += int(ls[i+1])
        elif ls[i] == "-":
            answer -= int(ls[i+1])
            
    return answer
            
