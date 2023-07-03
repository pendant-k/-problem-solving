# number of N
len_num = input()
# array items
items = input()
# value for find
v = input()
# answer
answer = 0

# solution
for item in items.split(" "):
    if item == v:
        answer += 1
print(answer)