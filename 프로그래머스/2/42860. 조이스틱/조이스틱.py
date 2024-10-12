def solution(name):
    # 위 아래 횟수
    manual = {
        "A": 0,
        "B": 1,
        "C": 2,
        "D": 3,
        "E": 4,
        "F": 5,
        "G": 6,
        "H": 7,
        "I": 8,
        "J": 9,
        "K": 10,
        "L": 11,
        "M": 12,
        "N": 13,
        "O": 12,
        "P": 11,
        "Q": 10,
        "R": 9,
        "S": 8,
        "T": 7,
        "U": 6,
        "V": 5,
        "W": 4,
        "X": 3,
        "Y": 2,
        "Z": 1
    }
    
    # 위 아래 조작은 무관
    cnt = 0
    for c in name:
        cnt += manual[c]
    
    # 모두 오른쪽으로 움직인 경우
    min_moves = len(name) -1
    
    for idx in range(len(name)):
        # idx : 움직인 횟수
        next_idx = idx +1
        # 다음 A값 구하기
        while next_idx < len(name) and name[next_idx] == "A":
            next_idx +=1
            
        min_moves = min(min_moves, 2*idx + len(name) - next_idx, idx + 2*(len(name) - next_idx))
    
    
    return cnt + min_moves