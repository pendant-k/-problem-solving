answer = ""
matrix = []
for i in range(5):
    row = list(map(str, input()))
    matrix.append(row)

for i in range(15):
    for j in range(5):
        try:
            answer += matrix[j][i]
        except:
            pass
print(answer)