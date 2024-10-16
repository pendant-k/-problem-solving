# 7568 : 덩치

# First attempt

# (x, y) > (p, q)

N = int(input())

people = []

rst = [0 for _ in range(N)]

for _ in range(N):
    (x, y) = map(int, input().split())
    people.append((x, y))

for i in range(len(people)):
    # current watching person
    (cw, ch) = people[i]
    rank = 1

    for (w, h) in people:
        if cw < w and ch < h:
            rank += 1

    rst[i] = rank


print(" ".join([str(n) for n in rst]))
