N = int(input())
ls = list(map(int, input().split()))
cnt = 0


def is_prime(n):
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True


for i in ls:
    if i > 1:
        if is_prime(i):
            cnt += 1
        else:
            continue


print(cnt)