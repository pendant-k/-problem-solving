import sys
import heapq
input = sys.stdin.readline

N = int(input())
heap = []
for _ in range(N):
    x = int(input())
    # x is not 0
    if x:
        heapq.heappush(heap, -x)
    else:
        if heap:
            print(-heapq.heappop(heap))
        else:
            print(0)