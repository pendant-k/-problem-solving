ls = []
for _ in range(5):
    ls.append(int(input()))

ls.sort()

print(int(sum(ls)/5))
print(ls[2])