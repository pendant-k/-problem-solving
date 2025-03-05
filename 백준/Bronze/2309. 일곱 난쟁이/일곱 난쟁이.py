from itertools import combinations as cm

tmp = []
for _ in range(0, 9):
    n = int(input())
    tmp.append(n)

rst = cm(tmp, 7)
for items in rst:
    if sum(items) == 100:
        for item in sorted(items):
            print(item)
        break
