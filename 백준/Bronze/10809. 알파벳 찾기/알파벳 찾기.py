aps = "abcdefghijklmnopqrstuvwxyz"
result = []

S = input()
for c in list(aps):
    if c in S:
        result.append(str(S.index(c)))
    else:
        result.append("-1")

print(" ".join(result))