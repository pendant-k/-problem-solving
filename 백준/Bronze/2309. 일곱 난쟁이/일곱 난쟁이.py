from itertools import combinations as cm

arr = []
for _ in range(9):
    arr.append(int(input()))

for tmp in cm(arr, 7):
    if sum(tmp) == 100:
        print(*sorted(tmp), sep="\n")
        break
