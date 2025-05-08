def solution(babbling):
    ls = ["aya","ye","woo","ma"]
    ret = 0
    for word in babbling:
        pos = True
        tmp = word
        tmp = tmp.replace("aya","1")
        tmp = tmp.replace("ye","1")
        tmp = tmp.replace("woo","1")
        tmp = tmp.replace("ma","1")
        for c in tmp:
            if c != "1":
                pos = False
                break
        if pos:
            ret += 1
            
            
    return ret