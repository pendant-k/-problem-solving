A = int(input())
B = int(input())
C = int(input())
target = str(A*B*C)
answer = [0,0,0,0,0,0,0,0,0,0]
#print(type(target))


# solve
for char in target:
        if char == '0':
                answer[0] +=1
        elif char == '1':
                answer[1] +=1
        elif char == '2':
                answer[2] +=1
        elif char == '3':
                answer[3] +=1
        elif char == '4':
                answer[4] +=1
        elif char == '5':
                answer[5] +=1
        elif char == '6':
                answer[6] +=1
        elif char == '7':
                answer[7] +=1
        elif char == '8':
                answer[8] +=1
        elif char == '9':
                answer[9] +=1
for cnt in answer:
        print(cnt)