def solution(num_list):
    odd = [i for i in num_list if i % 2 != 0]
    even = [i for i in num_list if i % 2 == 0]
    return int("".join([str(i) for i in odd])) + int("".join([str(i) for i in even]))