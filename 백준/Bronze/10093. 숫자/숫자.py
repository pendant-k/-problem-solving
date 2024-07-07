A, B = map(int, input().split(" "))
big = max(A, B)
small = min(A, B)
if A == B:
    print(0)
else:
    print(big-small-1)

for i in range(small+1, big):
    print(i, end=" ")
