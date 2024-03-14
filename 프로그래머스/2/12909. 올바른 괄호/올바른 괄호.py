def solution(s):
    if(s[0] == ")"): return False
    stack = []
    for x in s:
    	if(x == "("): 
            stack.append(x)
    	else:
            if(len(stack) != 0) :
            	stack.pop()
    return len(stack) == 0
