def solution(s):
    temp = [int(i) for i in s.split(" ")]
    return f'{min(temp)} {max(temp)}'