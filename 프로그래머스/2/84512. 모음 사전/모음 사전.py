from itertools import product as prod

def solution(word):
    alpabets = ['A','E','I','O','U']
    words = []
    for i in range(1,6):
        tmp = list(prod(alpabets, repeat=i))
        for c in tmp:
            words.append("".join(c))
        
    
    return sorted(words).index(word) + 1