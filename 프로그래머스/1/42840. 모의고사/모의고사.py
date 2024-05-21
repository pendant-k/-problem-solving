def solution(answers):
    one = [1,2,3,4,5] * 2000
    two = [2,1,2,3,2,4,2,5] * 1250
    three = [3,3,1,1,2,2,4,4,5,5] * 1000
    
    cnt_one = 0
    cnt_two = 0
    cnt_three = 0
    
    ans = []
    
    for i in range(len(answers)):
        if one[i] == answers[i]:
            cnt_one +=1
        if two[i] == answers[i]:
            cnt_two +=1
        if three[i] == answers[i]:
            cnt_three +=1
        
        max_v = max(cnt_one,cnt_two,cnt_three)
    
    if cnt_one >= max_v:
        ans.append(1)
    if cnt_two >= max_v:
        ans.append(2)
    if cnt_three >= max_v:
        ans.append(3)
    
    return ans