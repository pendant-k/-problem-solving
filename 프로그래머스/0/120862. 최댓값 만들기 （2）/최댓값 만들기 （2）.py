def solution(numbers):
    max_num = -100000000
    if len(set(numbers)) == 1: return numbers[0] * numbers[1]
    for i in numbers:
        for j in numbers:
            if numbers.index(j) == numbers.index(i): continue
            if i * j >= max_num:
                max_num = i*j
    
    return max_num
