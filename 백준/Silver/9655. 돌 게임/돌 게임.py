N = int(input())
# start is SK
winner = "SK"
cnt = 0

while N > 0:
    if N % 3 == 0:
        N -= 3
    else:
        N -= 1
    if N == 0:
        break
    else:
        cnt += 1

print("SK" if cnt % 2 == 0 else "CY")
