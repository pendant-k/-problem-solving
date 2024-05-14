N = int(input())

cnt = 0
for i in range(1, N+1):
    tmp = str(i)
    if "3" in tmp:
        cnt += tmp.count("3")
    if "6" in tmp:
        cnt += tmp.count("6")
    if "9" in tmp:
        cnt += tmp.count("9")

print(cnt)
