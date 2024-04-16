def solution(array, height):
    return len([person for person in array if person > height])
