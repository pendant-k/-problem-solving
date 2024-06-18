def solution(score):
    # 등수 매기기 ?
    avg = [sum(i) for i in score]
    return [sorted(avg,reverse=True).index(a) +1 for a in avg]
