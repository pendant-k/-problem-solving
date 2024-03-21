def solution(arr):
    target = min(arr)
    arr.remove(target)
    return arr or [-1]
