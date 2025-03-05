# 1159 농구 경기
import sys
input = sys.stdin.readline

N = int(input())
rst = set()
names = [input().rstrip() for _ in range(N)]
for name in names:
    letter = name[0]
    if len(list(filter(lambda str: str[0] == letter, names))) >= 5:
        rst.add(letter)

print("".join(sorted(rst)) if len(rst) > 0 else "PREDAJA")
