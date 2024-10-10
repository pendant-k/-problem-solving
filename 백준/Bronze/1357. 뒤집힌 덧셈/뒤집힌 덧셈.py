X, Y = map(int, input().split())

def rev(value):
    converted = str(value)
    return int(converted[::-1])

print(rev(rev(X) + rev(Y)))