# 1,000,000 -> 이중 루프 사용 불가
def solution(phone_book):
    # default result value
    answer = True
    
    # get value : O(1)
    tb = set(phone_book)
    
    for item in tb:
        for idx in range(len(item)):
            prefix = item[:idx]
            if prefix in tb:
                answer = False
                break
    
    return answer