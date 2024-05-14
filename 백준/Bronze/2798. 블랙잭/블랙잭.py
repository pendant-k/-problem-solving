from itertools import combinations

N, M = map(int, input().split())
cards = list(map(int, input().split()))
rst = 0

for item in combinations(cards, 3):
    temp = sum(item)
    if temp <= M:
        rst = max(rst, temp)

print(rst)
