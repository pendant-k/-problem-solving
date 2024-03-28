data = []
grade_dict = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0,
}
for i in range(20):
    data.append(input())

# 결과
result = 0
# 학점 총점
deno = 0

for d in data:
    [name, unit, grade] = d.split(" ")

    if grade == "P":
        continue
    else:
        result += float(unit) * grade_dict[grade]
        deno += float(unit)

result /= deno

print(round(result, 6))