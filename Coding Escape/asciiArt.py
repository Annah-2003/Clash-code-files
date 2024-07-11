import sys

# Read the width and height of each letter
L = int(input())
H = int(input())

# Read the text to be converted into ASCII art
T = input().upper()

# Read the ASCII art representation of A-Z and ?
ascii_art = []
for _ in range(H):
    ascii_art.append(input())

# Dictionary to hold ASCII art for each letter
alphabet_ascii = {}

# Extract ASCII art for each character A-Z and ?
for index in range(27):  # 26 letters + 1 for ?
    char_ascii = [row[index*L:(index+1)*L] for row in ascii_art]
    if index < 26:
        alphabet_ascii[chr(65 + index)] = char_ascii  # chr(65) is 'A'
    else:
        alphabet_ascii['?'] = char_ascii

# Create the ASCII art for the input text
output = ['' for _ in range(H)]
for char in T:
    if char in alphabet_ascii:
        char_art = alphabet_ascii[char]
    else:
        char_art = alphabet_ascii['?']
    for i in range(H):
        output[i] += char_art[i]

# Print the result
for line in output:
    print(line)
