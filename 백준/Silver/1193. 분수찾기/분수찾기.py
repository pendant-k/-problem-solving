X = int(input())
temp = 0

# Find Line
line = 1
temp += X
while True:
    temp -= line
    if temp > 0:
        line += 1
    else:
        break

ls = []
cnt = 0

for j in range(line):
    cnt += j

if line % 2 == 0:
    # 짝수 라인은 위에서부터 아래로

    for i in range(line):
        ls.append((i+1, line-i))
else:
    for i in range(line):
        ls.append((line-i, i+1))

point = X-cnt - 1
x, y = ls[point]
print(f'{x}/{y}')