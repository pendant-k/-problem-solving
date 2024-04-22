A, B = map(int, input().split(" "))
C = int(input())

hour = A
minute = B + C

if minute >= 60:
    temp = minute // 60
    minute -= temp * 60
    hour += temp

if hour >= 24:
    hour -= 24

print(hour, minute)