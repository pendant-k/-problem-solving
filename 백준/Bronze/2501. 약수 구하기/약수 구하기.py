N, K = map(int, input().split(" "))

n_ls = []
k_ls = []
for i in range(1, N+1):
    if N % i == 0:
        n_ls.append(i)

try:
    print(n_ls[K-1])
except:
    print(0)