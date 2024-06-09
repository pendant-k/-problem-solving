def solution(id_pw, db):
    if id_pw in db:
        return "login"
    else:
        for [id,pw] in db:
            if id == id_pw[0]:
                return "wrong pw"
    return "fail"