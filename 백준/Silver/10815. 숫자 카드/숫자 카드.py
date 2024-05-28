import sys
input = sys.stdin.readline

# dictionary
h = {}

# number of cards
N = int(input())

for i in map(int, input().split()):
    h[i] = 1

M = int(input())

for i in map(int, input().split()):
    if i in h.keys():
        print(1, end=" ")
    else:
        print(0, end=" ")
