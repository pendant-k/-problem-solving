def solution(array):
    result = 0
    count = 0
    checked = []
    for i in array:
        if(i not in checked):
            currentCount =  array.count(i)
            if(currentCount > count):
                count = currentCount
                result = i
            elif(currentCount == count):
                result = -1
            checked.append(i)
    return result