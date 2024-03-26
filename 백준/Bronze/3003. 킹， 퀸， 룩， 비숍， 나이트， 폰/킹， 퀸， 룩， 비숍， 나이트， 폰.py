chess = input().split()
expected = [1, 1, 2, 2, 2, 8]
answer = []
for i in range(6):
    answer.append(str(expected[i] - int(chess[i])))

print(" ".join(answer))
