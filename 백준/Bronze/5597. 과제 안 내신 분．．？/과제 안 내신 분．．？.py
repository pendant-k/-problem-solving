ls = []
for _ in range(28):
    ls.append(int(input()))

result = [i for i in range(1, 31) if i not in ls]
print(*result, sep="\n")