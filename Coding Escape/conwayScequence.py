def look_and_say(sequence):
    result = []
    count = 1
    for i in range(1, len(sequence)):
        if sequence[i] == sequence[i - 1]:
            count += 1
        else:
            result.append(str(count))
            result.append(sequence[i - 1])
            count = 1
    result.append(str(count))
    result.append(sequence[-1])
    return ''.join(result)

def conway_sequence(R, L):
    current_line = str(R)
    for _ in range(L - 1):
        current_line = look_and_say(current_line)
    return ' '.join(current_line)

# Example usage:
import sys
input = sys.stdin.read
data = input().split()
R = int(data[0])
L = int(data[1])

# Generate and print the L-th line of the sequence starting with R
result = conway_sequence(R, L)
print(result)
