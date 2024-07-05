message = input()

#Step 1: convert input message to its binary reprsentation
binary_message = ''.join(f'{ord(c):07b}' for c in message)

#Step 2 : Group the binary digits into runs of consecutive identical digits
encoded_message = []
i=0
while i < len(binary_message):
    current_bit = binary_message[i]
    run_length = 1
    while i +1 < len(binary_message[i]) and binary_message[i +1] == current_bit:
        run_length += 1
        i += 1

        # Step 3: Encode the runs
        if current_bit == '1':
            encoded_message.append(f'0 {"0" * run_length}')
        else:
            encoded_message.append(f'00 {"0" * run_length}')
        i +=1

# Step 4: Join the encoded run with spaces and print
print(' '.join(encoded_message))