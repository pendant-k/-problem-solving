def solution(s):
    sol = []
    converted = s.split(" ")
    for item in converted:
        if item == "Z":
            sol.pop()
        else :
            sol.append(int(item))
    
    return sum(sol)
    
            