A = int(input())
B = int(input())
C = int(input())

ls = [0] * 10

target = A*B*C

for c in str(target):
    ls[int(c)] += 1

print(*ls, sep="\n")