from collections import Counter

s = input()

# 각 단어 세고 dictionary로 저장
cnt = Counter(s)
# 팰린드롬 바디 (반복되는 부분)
ret = []
mid = ""
# 펠린드롬 생성이 가능한지 확인
flag = 0

# char -> key of cnt
for char in sorted(cnt.keys()):
    # 갯수가 홀수인 문자 존재
    if cnt[char] % 2 == 1:
        # 기준 문자여야함
        mid = char
        flag += 1
        cnt[char] -= 1
    # 갯수가 홀수인 문자가 두개 이상 존재하면 종료
    if flag == 2:
        print("I'm Sorry Hansoo")
        exit()

    # 여러개 문자 한번에 넣기
    ret.extend([char] * (cnt[char] // 2))

result = "".join(ret) + mid + "".join(ret[::-1])
print(result)