import sys
import math

def parse_mayan_numerals(l, h, numeral_lines):
    numerals = {}
    for i in range(20):
        numeral = [numeral_lines[j][i * l: (i + 1) * l] for j in range(h)]
        numerals[''.join(numeral)] = i
    return numerals

def mayan_number_to_decimal(numerals, l, h, number_lines):
    sections = len(number_lines) // h
    value = 0
    for i in range(sections):
        numeral = [number_lines[j + i * h] for j in range(h)]
        numeral_key = ''.join(numeral)
        if numeral_key in numerals:
            value = value * 20 + numerals[numeral_key]
    return value

def decimal_to_mayan_number(numerals, value, l, h):
    if value == 0:
        for key, num in numerals.items():
            if num == 0:
                return [key[i:i + l] for i in range(0, len(key), l)]
    mayan_representation = []
    while value > 0:
        digit = value % 20
        value //= 20
        for key, num in numerals.items():
            if num == digit:
                mayan_representation.append([key[i:i + l] for i in range(0, len(key), l)])
                break
    mayan_representation.reverse()
    return [line for numeral in mayan_representation for line in numeral]

# Input reading
l, h = map(int, input().split())

# Read Mayan numerals
numeral_lines = [input() for _ in range(h)]
numerals = parse_mayan_numerals(l, h, numeral_lines)

# Read first number
s1 = int(input())
num1_lines = [input() for _ in range(s1)]
num1 = mayan_number_to_decimal(numerals, l, h, num1_lines)

# Read second number
s2 = int(input())
num2_lines = [input() for _ in range(s2)]
num2 = mayan_number_to_decimal(numerals, l, h, num2_lines)

# Read operation
operation = input()

# Perform the operation
if operation == '+':
    result = num1 + num2
elif operation == '-':
    result = num1 - num2
elif operation == '*':
    result = num1 * num2
elif operation == '/':
    result = num1 // num2

# Convert the result back to Mayan numeral
result_lines = decimal_to_mayan_number(numerals, result, l, h)

# Output the result
for line in result_lines:
    print(line)
