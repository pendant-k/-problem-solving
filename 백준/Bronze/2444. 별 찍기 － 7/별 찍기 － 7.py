N = int(input())

# 피라미드 구현
for i in range(1, N):
    print((" " * (N-i) + "*" * (2 * i - 1)))
# 역피라미드 구현
for i in range(N, 0, -1):
    print((" " * (N-i) + "*" * (2 * i - 1)))