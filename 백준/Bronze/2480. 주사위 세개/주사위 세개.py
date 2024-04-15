dices = list(map(int, input().split()))
dice_set = set(dices)

if len(dice_set) == 1:
    print(10000 + dices[0] * 1000)

elif len(dice_set) == 3:
    print(max(dices) * 100)

else:
    temp = []
    for dice in dices:
        if dice not in temp:
            temp.append(dice)
        else:
            print(1000 + dice * 100)
            break