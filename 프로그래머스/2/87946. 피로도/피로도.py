from itertools import permutations as pm

def solution(k, dungeons):
    answer = 0
    for i in pm(dungeons, len(dungeons)):
        tmp = k
        cnt = 0
        # 튜플 순회하기
        for req, reduce in i:
            if tmp >= req:
                tmp -= reduce
                cnt +=1
        answer = max(cnt, answer)
        
    return answer