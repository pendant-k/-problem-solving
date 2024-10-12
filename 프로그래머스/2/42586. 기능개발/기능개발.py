def solution(progresses, speeds):
    answer = []
    dep_checker = [False] * len(progresses)

    while sum(answer) < len(progresses):
        # 하루 진행
        for i in range(len(progresses)):
            progresses[i] += speeds[i]
        
        # 마감 (waiting list check)
        if progresses[0] >= 100:
            dep_cnt = 0
            for j in range(len(progresses)):
                if progresses[j] < 100:
                    break
                else:
                    if dep_checker[j]:
                        pass
                    else:
                        dep_cnt += 1
                        dep_checker[j] = True
            if dep_cnt != 0:
            	answer.append(dep_cnt)
    
    return answer