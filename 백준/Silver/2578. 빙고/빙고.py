cnt = 0
N = 5
table = []
for _ in range(N):
    row = list(map(int, input().split()))
    table.append(row)

flag = False
for _ in range(N):
    row = list(map(int, input().split()))
    # print(row)
    # get each value
    # check bingo
    for i in range(N):
        cnt += 1

        for j in range(N):
            for k in range(N):
                if table[j][k] == row[i]:
                    table[j][k] = 0
        # check number of bingo

        # row bingo
        row_bingo = 0
        for a in range(N):
            if sum(table[a]) == 0:
                row_bingo += 1

        col_bingo = 0
        for a in range(N):
            col_tmp = 0
            for b in range(N):
                col_tmp += table[b][a]

            if col_tmp == 0:
                col_bingo += 1

        # check diagonal bingo
        dia_bingo = 0
        # left to right
        tmp = 0
        for a in range(N):
            for b in range(N):
                if a == b:
                    tmp += table[a][b]
        if tmp == 0:
            dia_bingo += 1

        # # right to left
        if table[0][4] + table[1][3] + table[2][2] + table[3][1] + table[4][0] == 0:
            dia_bingo += 1

        if dia_bingo + col_bingo + row_bingo >= 3:
            flag = True
            break

    if flag:
        break
        
print(cnt)
