S = input()
alp = "abcdefghijklmnopqrstuvwxyz"
rst = ""
for a in alp:
    rst += str(S.count(a)) + " "

print(rst)