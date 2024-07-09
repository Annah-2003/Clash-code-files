n = int(input())
if n == 0: print(0)
else: print(min(map(int, input().split()), key=lambda x: (abs(x), -x)))
