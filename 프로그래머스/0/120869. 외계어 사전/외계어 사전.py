from itertools import permutations as pm

def solution(spell, dic):
    for i in pm(spell):
        tmp = "".join(i)
        if tmp in dic:
            return 1
    
    
    return 2