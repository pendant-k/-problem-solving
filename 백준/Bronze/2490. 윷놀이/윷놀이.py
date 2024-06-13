for _ in range(3):
    action = list(map(int, input().split(" ")))
    if sum(action) == 4:
        print("E")
    elif sum(action) == 3:
        print("A")
    elif sum(action) == 2:
        print("B")
    elif sum(action) == 1:
        print("C")
    elif sum(action) == 0:
        print("D")