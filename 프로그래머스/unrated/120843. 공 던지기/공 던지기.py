def solution(numbers, k):
    current_idx = 0
    # k번째로 공 던지는 사람 구하기 -> k번 실행
    for order in range(k):
        for t in range(2):
            if current_idx == len(numbers) -1:
                current_idx = 0
            else :
                current_idx +=1
    return numbers[current_idx-2]
            