T = int(input())
for _ in range(T):
    k = int(input())
    n = int(input())

    arr = []
    tmp = []
    for i in range(1, n+1):
        tmp.append(i)
    arr.append(tmp)

    # 층
    for i in range(1, k+1):
        tmp = []
        for j in range(n):
            tmp.append(sum(arr[i-1][:j+1]))
        arr.append(tmp)

    print(arr[k][n-1])