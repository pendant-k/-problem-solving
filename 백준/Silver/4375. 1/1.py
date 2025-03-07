while True:
    try:
        target = 1
        k = 1
        n = int(input())
        while True:
            if target % n == 0:
                print(len(str(target)))
                break
            else:
                target += (k * 10)
                k *= 10

    except:
        break
