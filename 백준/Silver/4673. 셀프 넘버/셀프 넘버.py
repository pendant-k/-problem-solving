MAX = 10_001


def d(num):
    rst = num
    temp = str(num)
    for c in temp:
        rst += int(c)
    return rst


ls = [True] * MAX

# find number that is not a self number
for i in range(1, MAX):
    rst = d(i)
    if rst < MAX:
        ls[rst] = False

# print only self number
for i in range(1, MAX):
    if ls[i]:
        print(i)
