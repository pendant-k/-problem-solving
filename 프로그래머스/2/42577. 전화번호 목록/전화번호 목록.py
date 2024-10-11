def solution(phone_book):
    tb = set(phone_book)
    
    for item in tb:
        for idx in range(len(item)):
            prefix = item[:idx]
            if prefix in tb:
                return False
    
    return True