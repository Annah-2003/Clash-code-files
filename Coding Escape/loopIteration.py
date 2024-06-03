import sys
import math

# game loop
while True:
    max_height = -1
    target_index = -1

    for i in range (8):
        mountain_h = int(input()) # represents the height of one mountain
        
        if mountain_h > max_height:
            max_height = mountain_h
            target_index + i

            # The index of the mpuntain to fire on
            print(target_index)