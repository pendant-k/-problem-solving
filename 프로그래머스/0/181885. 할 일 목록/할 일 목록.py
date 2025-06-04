def solution(todo_list, finished):
    ret = []
    for i in range(len(todo_list)):
        if not finished[i]:
            ret.append(todo_list[i])
    return ret