def solution(phone_book):
    
    answer = True
    tb = set(phone_book)
    
    for item in tb:
        for idx in range(len(item)):
            prefix = item[:idx]
            if prefix in tb:
                answer = False
                break
    
    return answer