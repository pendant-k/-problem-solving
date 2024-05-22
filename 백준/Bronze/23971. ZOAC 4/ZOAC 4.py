H, W, N, M = map(int, input().split())

row_sum = 0
col_sum = 0
current_row = 0
current_col = 0

# row
while current_row < W:
    row_sum += 1
    current_row += (M+1)


while current_col < H:
    col_sum += row_sum
    current_col += (N+1)

print(col_sum)
