def solution(my_string):
    answer = ''
    rm_str = 'aeiou'
    
    for str in my_string:
        if str not in rm_str:
            answer += str
    return answer