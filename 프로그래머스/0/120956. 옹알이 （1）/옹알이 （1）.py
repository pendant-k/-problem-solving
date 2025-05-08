def solution(babbling):
    ls = ["aya","ye","woo","ma"]
    ret = 0
    for word in babbling:
        avail = True
        tmp = word
        tmp = tmp.replace("aya","1")
        tmp = tmp.replace("ye","1")
        tmp = tmp.replace("woo","1")
        tmp = tmp.replace("ma","1")
        for c in tmp:
            if c != "1":
                avail = False
        if avail:
            ret += 1
            
            
    return ret