def solution(A, B):
    answer = 0
    print(A[-1] + A[:len(A)-1])
    while True:
        if answer > len(A) :
            return -1
        if A == B:
            break
        else:
            A = A[-1] + A[:len(A)-1]
            answer +=1
    return answer