N, B = input().split()
a = int(B)
result = 0
for i in range(len(N)):
    try:
        result += int(N[i]) * (a ** (len(N)-1 - i))
    except:
        result += int(ord(N[i]) - 55) * (a ** (len(N) - 1 - i))

print(result)
