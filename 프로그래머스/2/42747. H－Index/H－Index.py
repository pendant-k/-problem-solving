def solution(citations):
    # 논문 수
    n = len(citations)
    # H-index 시작값
    h = 1
    while h <= n:
        higher = [i for i in citations if i >= h]
        if len(higher) >= h:
            h += 1
        else:
            break
    return 0 if h < 0 else h - 1

# H-index -> h
# n편 중 h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었다면 h의 최댓값이 H-Index

