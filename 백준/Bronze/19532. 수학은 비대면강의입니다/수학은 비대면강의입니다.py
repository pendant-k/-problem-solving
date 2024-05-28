a, b, c, d, e, f = map(int, input().split())

is_done = False
for x in range(-999, 1000):
    if is_done:
        break
    for y in range(-999, 1000):
        if a*x + b*y == c and d*x + e*y == f:
            print(x, y, sep=" ")
            is_done = True
            break