name = input()

# 우승 확률 (최댓값 기록)
winVal = -1

# 우승 팀 이름
winnerTeamName = ""

N = int(input())


for _ in range(N):
    # calculate
    teamName = input()

    def countValue(value):
        return name.count(value) + teamName.count(value)

    L = countValue("L")
    O = countValue("O")
    V = countValue("V")
    E = countValue("E")

    tmpVal = ((L+O) * (L+V) * (L+E) * (O+V) * (O+E) * (V+E)) % 100

    if tmpVal > winVal:
        winVal = tmpVal
        winnerTeamName = teamName
    elif tmpVal == winVal:
        winnerTeamName = sorted([winnerTeamName, teamName])[0]

print(winnerTeamName)