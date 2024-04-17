T = int(input())
for _ in range(T):
    R, S = map(str, input().split(" "))
    temp = ""
    for c in S:
        temp += c*int(R)
    print(temp)
