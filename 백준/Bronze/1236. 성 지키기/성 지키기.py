# N, M <= 50 자연수
N, M = map(int, input().split())

# init matrix
castle = []

for _ in range(N):
    row = input()
    castle.append(row)

# counter
row_cnt = 0
col_cnt = 0

# check X in row
for i in range(N):
    if "X" not in castle[i]:
        row_cnt += 1

# check X in col
for j in range(M):
    col = [castle[i][j] for i in range(N)]
    if "X" not in col:
        col_cnt += 1

print(max(row_cnt, col_cnt))