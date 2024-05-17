import sys
import heapq
input = sys.stdin.readline

N = int(input())
heap = []
m = {}

for _ in range(N):
    x = int(input())
    # x is not 0
    if x:
        if x < 0:
            if str(x) in m.keys():
                m[str(x)] += 1
            else:
                m[str(x)] = 1
        heapq.heappush(heap, abs(x))
    else:
        if heap:
            tmp = heapq.heappop(heap)
            if f'-{tmp}' in m.keys():
                if m[(f'-{tmp}')] > 0:
                    print(f'-{tmp}')
                    m[(f'-{tmp}')] -= 1
                else:
                    print(tmp)
            else:
                print(tmp)
        else:
            print(0)
