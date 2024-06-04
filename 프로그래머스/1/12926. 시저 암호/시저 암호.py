def solution(s, n):
    answer = ''
    for ch in s:
        if ch == " ":
            answer += " "
        else:
            tmp = ord(ch)
            for i in range(n):
                if tmp == ord("z"):
                    tmp = ord("a")
                elif tmp == ord("Z"):
                    tmp = ord("A")
                else:
                    tmp +=1
            answer += chr(tmp)
    return answer