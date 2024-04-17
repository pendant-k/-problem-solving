A, B = map(str, input().split())

a = int(A[::-1])
b = int(B[::-1])
print(a if a > b else b)
