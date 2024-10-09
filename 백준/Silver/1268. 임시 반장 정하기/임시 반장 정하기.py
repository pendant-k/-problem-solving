n = int(input())

# idx + 1 -> number
cnt_ls = [0] * n
rst = 0

table = []

# init table
for _ in range(n):
    row = list(map(int, input().split(" ")))
    table.append(row)
# students[0][0] -> 1번 학생과 1번 학생 만난 횟수 -> 체크 x
students = []
for i in range(n):
    students.append([0] * n)

# print(students)


for i in range(n):
    for j in range(5):
        currentValue = table[i][j]
        # check col
        for k in range(i+1, n):
            if table[k][j] == currentValue:
                students[k][i] = 1
                students[i][k] = 1

for i in range(n):
    cnt_ls[i] = sum(students[i])


for i in range(n):
    if cnt_ls[i] == max(cnt_ls):
        rst = i+1
        break

print(rst)
