T = int(input())

for _ in range(T):
    tc = int(input())
    quarter = str(tc // 25)
    tc %= 25
    dime = str(tc // 10)
    tc %= 10
    nickel = str(tc // 5)
    tc %= 5
    penny = str(tc // 1)
    print(" ".join([quarter, dime, nickel, penny]))
