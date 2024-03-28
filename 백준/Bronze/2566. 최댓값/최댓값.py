import sys

matrix = []

max_num = 0
col = 1
row = 1

input = sys.stdin.readline
for i in range(9):
    tmp_row = list(map(int, input().split(" ")))
    matrix.append(tmp_row)

for a in range(9):
    crt = max(matrix[a])
    if max_num < crt:
        max_num = crt

for i in range(9):
    for j in range(9):
        if matrix[i][j] == max_num:
            col = i+1
            row = j+1
            break

print(max_num)
print(col, row)
