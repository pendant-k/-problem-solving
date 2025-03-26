n = int(input())

# 오큰수 찾아야하는 인덱스 담기
stack = []
# reversed
# ret -> print(*ret, sep=" ")
ret = [-1] * n


nums = list(map(int, input().split()))

# 1 ~ n-1
for i in range(n):
    # stack에 탐색해야할 idx 값이 있는 경우
    while stack and nums[stack[-1]] < nums[i]:
        idx = stack.pop()
        ret[idx] = nums[i]
    stack.append(i)

print(*ret, sep=" ")