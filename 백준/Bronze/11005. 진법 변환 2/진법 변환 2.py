N, B = map(int, input().split())
answer = ""
temp = N
cnt = 0

while N:
    current = int(N % B)
    if 0 <= current <= 9:
        answer += str(current)
    else:
        answer += chr(current + 55)
    N //= B

print(answer[::-1])