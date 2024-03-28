A = []
B = []
result = []
N, M = input().split(" ")
for _ in range(int(N)):
    A.append(input().split(" "))

for _ in range(int(N)):
    B.append(input().split(" "))

for i in range(int(N)):
    temp = []
    for j in range(int(M)):
        temp.append(int(A[i][j]) + int(B[i][j]))
    result.append(temp)

for item in result:
    for i in item:
        print(i, end=" ")
    print("")