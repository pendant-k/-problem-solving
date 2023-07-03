a = input()

case_num = int(a)
cases = []

while case_num > 0:
    tmp = input()
    cases.append(tmp)
    case_num -= 1

# solution
for str in cases:
    print(str[0] + str[-1])