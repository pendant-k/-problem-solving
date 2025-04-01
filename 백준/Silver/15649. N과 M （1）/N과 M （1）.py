# 1~ N까지 자연수 중에서 중복 없이 M개를 고른 수열
from itertools import permutations as pm

n, m = map(int, input().split())
numbers = [i for i in range(1, n+1)]

for i in pm(numbers, m):
    print(*i)
