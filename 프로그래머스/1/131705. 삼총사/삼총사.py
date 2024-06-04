# number -> array
from itertools import combinations as cm
def solution(number):
    answer = 0
    for item in cm(number,3):
        if sum(item) == 0:
            answer +=1
            
    return answer