remove_cnt = 0
convert_cnt = 0

def convert(a):
    global remove_cnt 
    remove_cnt += a.count("0")
    tmp = len(a.replace("0",""))
    return str(bin(tmp))[2:]

def solution(s):
    global convert_cnt
    global remove_cnt
    while True:
        if s == "1":
            return [convert_cnt, remove_cnt]
        else:
            s = convert(s)
            convert_cnt += 1

