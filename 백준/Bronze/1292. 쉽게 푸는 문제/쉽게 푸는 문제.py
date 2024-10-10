A, B = map(int, input().split())

# 수열 만들기
seq = []

for i in range(1, 1001):
    for _ in range(i):
        seq.append(i)

print(sum(seq[A-1:B]))