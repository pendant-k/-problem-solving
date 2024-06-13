# 핸드폰 요금
N = int(input())
calls = [int(i) for i in input().split(" ")]

y_case = m_case = 0

for i in calls:
    y_case += (i//30 + 1) * 10
    m_case += (i//60 + 1) * 15

if y_case < m_case:
    print("Y", y_case, sep=" ")
elif y_case > m_case:
    print("M", m_case, sep=" ")
else:
    print("Y", "M", y_case, sep=" ")