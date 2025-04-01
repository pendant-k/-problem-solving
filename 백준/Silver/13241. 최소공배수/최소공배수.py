def gcd(a, b):
    while b > 0:
        a, b = b, a % b
    return a


A, B = map(int, input().split())

if A > B:
    print(abs(A*B) // gcd(A, B))
else:
    print(abs(A*B) // gcd(B, A))
