N = int(input())

d = {}

for _ in range(N):
    title = input()

    # save to dict
    if title in d.keys():
        d[title] += 1
    else:
        d[title] = 1

max_v = 0
rst = ""
tmp = []
for k, v in d.items():
    if v == max_v:
        max_v = v
        rst = sorted([rst, k])[0]

    if v > max_v:
        max_v = v
        rst = k

print(rst)
