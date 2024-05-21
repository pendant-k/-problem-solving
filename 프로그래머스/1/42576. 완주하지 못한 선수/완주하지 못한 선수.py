# participant <= 100,000
def solution(participant, completion):
    ans = ''
    # hashmap
    d = {}
    for p in participant:
        if p in d.keys():
            d[p] +=1
        else:
            d[p] = 1
    
    # check hashmap
    # O(N)
    for p in completion:
        d[p] -= 1
    
    for k,v in d.items():
        if v >=1:
            ans = k
            break
    
    return ans