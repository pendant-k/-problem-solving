days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

# month , day
x, y = map(int, input().split())
zero = [4, 6, 9, 11]
mon = 1
day_cnt = y-1
while mon < x:
    if mon == 2:
        day_cnt += 28
    elif mon in zero:
        day_cnt += 30
    else:
        day_cnt += 31
    mon += 1

print(days[day_cnt % 7])
