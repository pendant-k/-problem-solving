while True:
    n = int(input())
    ls = []
    if n == -1:
        break
    for i in range(1, n):
        if n % i == 0:
            ls.append(i)

    if sum(ls) == n:
        print(f'{n} = ', end="")
        print(*ls, sep=" + ")
    else:
        print(f'{n} is NOT perfect.')